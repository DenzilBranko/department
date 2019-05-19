var express = require('express')
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/api/addcourse',(req,res) => {
   
   
});

app.post('/api/addstudent',(req,res) => {
 
   
})  

app.get('/api/getinfo',(req,res) => {
   
});

app.get('/api/getbyid/:id',(req,res) => {
    
});

app.delete('/api/deletestudent/:id',(req,res) => {
   
});

app.delete('/api/deletecourse/:id',(req,res) => {
})

app.put('/api/update-course/:id',(req,res) => {
   
   
});

module.exports = app