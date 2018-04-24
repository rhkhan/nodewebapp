var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var db = require('../db');


router.get('/edit/:id',function(req,res){
	console.log("Hello EDIT: ..........."+ req.params.id);
	
	db.get().collection('Employees').findOne({'_id':ObjectId(req.params.id)}, function(err, result) {
		console.log("rrr "+result.FirstName);
		res.render('edit', { title: "Update Employee!", ss:result});
	});
	
	/*
	db.get().collection('Employees').find( {' _id': ObjectId(req.params.id) },function(error,doc){
		console.log("rrr "+doc.FirstName);
		res.render('edit', { title: 'Update Employee!', ss:doc});
	});
	*/
	//db.get().collection('Employees').find( { _id: o_id } );//db.get().collection('Employees').find(ObjectId(req.params.id)); 
});

router.post('/edit', (req, res) => {
   console.log("Edit post: "+req.body.Id);
     /*db.get().collection('Employees').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
	*/
    
	
  //})
  
 db.get().collection('Employees').update({'_id':ObjectId(req.body.Id)}, {FirstName:req.body.FirstName},function(err,obj){
	 if(err)
	 {
		 console.warn(err.message);  // returns error if no matching object found
	 }
	 else
	 {
		res.redirect('All')
	 }
 });

})

module.exports = router;