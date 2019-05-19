const express = require('express')
const router = express()

const models = require('../../models/index');

router.post('/add-employee',(req,res) => {
    let { group_id,dept_id,fullname,email,password,phone,age,address,gender,join_date} = req.body.data
    models.tbl_employee.create({
        group_id: group_id,
        dept_id: dept_id,
        fullname: fullname,
        email: email,
        password: password,
        phone: phone,
        age: age,
        address: address,
        gender: gender,
        join_date: join_date,
        person_identity: person_id,
        status: 1
    }).then((result) => {
        return res.status(200).send(result)
    })
})

router.get('/view-employee',(req,res) => {
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

router.get('/view-employee-by-id/:id',(req,res) => {
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


router.put('/update-employee/:id',(req,res) => {
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

router.delete('/delete-employee/:id',(req,res) => {
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