const express = require('express')
const router = express()

const models = require('../../models/index');

router.post('/add-salary',(req,res) => {
    let { emp_id,salary_date,salary_amount} = req.body.data
    models.tbl_employee.create({
        emp_id: emp_id,
        salary_date: salary_date,
        salary_amount: salary_amount,
       
        status: 1
    }).then((result) => {
        return res.status(200).send(result)
    })
})

router.get('/view-salary',(req,res) => {
    models.TblEmployee.findAll({
        include: [
            { 
                model: models.TblGroups,
                attributes: ['id','name'],
                required: true,
                
            }
        ],
        raw: true,
    }) .then((result) => {
        return res.status(200).send(result)
    })
})

router.get('/view-salary-by-id/:id',(req,res) => {
    models.TblEmployee.findAll({
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


router.put('/update-salary/:id',(req,res) => {
    let { name } = req.body.data
    models.TblGroups.update(
        { name : name},
        { where: {id: req.params.id },raw: true}, 
    ).then((result) => {
         return res.status(200).send(result)
    }).catch((error) => {
         res.status(500).send(error)
    })
})

router.delete('/delete-salary/:id',(req,res) => {
    models.TblGroups.destroy({
        where: {
            id: req.params.id
        },
        raw: true
    }).then((result) => {
        return res.status(200).send({message: "deleted"})
    })
})
module.exports = router;