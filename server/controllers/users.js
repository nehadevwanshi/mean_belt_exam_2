var mongoose = require('mongoose');
var Bucketdb = mongoose.model('Bucketdb');
var Userdb = mongoose.model('Userdb');

module.exports = (function(){  
	return {
		getItems: function(req, res){
			Bucketdb.find({user_name:req.params.user_name}, function(err, users){
				if(err){
					console.log(err);
					console.log('getfriends function fusers controller');
				} else {
					res.json(users);
				}

			})
		},

		getUsers: function(req, res){
			Userdb.find({}, function(err, users){
				if(err){
					console.log(err);
					console.log('getfriends function fusers controller');
				} else {
					res.json(users);
				}

			})
		},

		////////
		createBucket: function(req, res){
			item = new Bucketdb(req.body);
			item.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new user');
				} else {
					console.log('this is our new user',result);  
					res.json(result);
				}
			})
		},

		createUser: function(req, res){
			Userdb.findOne({name: req.params.name}, function(err, user){
				if (user ==  null) {
					user = new Userdb(req.body);
					user.save(function(err, result){
						if(err){
							console.log(err);
							console.log('error creating a new user');
						} else {
							console.log('this is our new user',result);  
							res.json(result);
						}
					})
				} else {
					res.json(user);
				}
			})
		},

		markTaskCompleted: function(req, res) {
			console.log(" completed " + req.body.completed  + ", " + req.params.id)

			Bucketdb.findOne({_id: req.params.id}, function(err, item){
			 item.completed = req.body.completed
			 item.save(function(err){
			     // if save was successful awesome!
			 })
			})

		}
		
	}        
})();     


