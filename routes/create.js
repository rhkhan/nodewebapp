var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/create',function(req,res){
	console.log("CRRREEEEEEEETE");
	res.render('create', { title: 'create customer!' });
})

router.post('/createEmp', (req, res) => {
   
     db.get().collection('Employees').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('All')
  })
  
})

module.exports = router;