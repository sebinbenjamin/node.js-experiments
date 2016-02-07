var MongoClient = require('mongodb').MongoClient, format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
  if (err) throw err;
  console.log("Connected to Database");
// json record
	var document = {name:"Sebin Benjamin", class:"S8CSB", rollno:"27"};
	//insert document
	db.collection('student').insert(document, function(err, records) {
		if (err) throw err;
		console.log("Record added");
	});
});
