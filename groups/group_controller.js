const express = require('express')
const router = express()

const models = require('../models/index');


router.post('/add-groups',async(req,res) => {
    let { data } = req.body
 
            let name = req.body.data.name
            let duplicate_email  = await models.tblgroups.count({where: {name:name}})
            if(duplicate_email!=0) {
                return res.status(409).send({message: "duplicate"})
            }
            let new_model = await models.tblgroups.create({
                name: name,
                status: 1,
                raw: true
            })
            if([new_model].length>0) {
                return res.status(200).send({message: "created"})
            }
        
        
   
    //console.log(new_model.get('id')) //will give only the id 
})

router.get('/view-groups',async(req,res) => {
    models.tblgroups.findAll({
       raw: true
    }).then((result) => {
        if([result].length>0) {
            return res.status(200).send(result)
        }
        return res.status(204).send({message: "no record found"})
    })
})

router.get('/view-groups-by-id/:id',(req,res) => {
    models.tblgroups.findAll({
        where: {
          id: req.params.id,
        }, 
        raw: true
      }).then((result) => {
         return res.status(200).send(result)
      }).catch((error) => {
         res.status(500).send(error)
    })
})

router.put('/update-group/:id',(req,res) => {
    let { name } = req.body.data
    models.tblgroups.update(
        { name : name},
        { where: {id: req.params.id },raw: true}, 
    ).then((result) => {
         return res.status(200).send(result)
    }).catch((error) => {
         res.status(500).send(error)
    })
})

router.delete('/delete-group/:id',(req,res) => {
    models.tblgroups.destroy({
        where: {
            id: req.params.id
        },
        raw: true
    }).then((result) => {
        return res.status(200).send({message: "deleted"})
    })
})
module.exports = router;
