var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var db = require('../db');

router.get('/all', function(req, res) {
  console.log("Listing all record..........")
  var collection = db.get().collection('Employees')
  collection.find().toArray(function(err, docs) {
    res.render('index', {emplist: docs,title:"Employee List"})
  })
})

router.get('/delete/:id',function(req,res){
	console.log("Deleting a record.........."+req.params.id);
	 db.get().collection('Employees').remove({_id:ObjectId(req.params.id)},function(err,obj){
		 if(err)
		 {
			 console.warn(err.message);  // returns error if no matching object found
		 }
		 else
		 {
			res.redirect('/emp/all');
		 }
	 });
});

/*
router.get('/',function(req,res){
  MongoClient.connect(URL, function(err, db) {
	  if (err) return
	  var collection = db.collection('Employees')
		collection.find().toArray(function(err, docs) {
		  //console.log(docs)
			  if (err) return console.log(err);
		// renders index.ejs
			  res.render('index.ejs', {emplist: docs,title:"Employee List"});
		  db.close();
		})
  })
})
*/


/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});


/*
router.get('/', (req, res) => {
	var db = req.db;
  db.collection('Employees').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {emplist: result})
  })
})
*/

module.exports = router;
