var users = require('./../controllers/users.js');

module.exports = function(app){
	

	app.post('/bucket', function(req, res){
		console.log('made it to my /user route');
		users.createBucket(req, res);
	})                                        

	app.get('/items/:user_name', function(req, res){
		console.log(' made it to my /users get route');
		console.log(" this is the user model" + users)

		users.getItems(req, res);
	})

	app.get('/users', function(req, res){
		console.log(' made it to my /users get route');
		console.log(" this is the user model" + users)

		users.getUsers(req, res);
	})

	app.post('/user', function(req, res){
		console.log(' made it to my /users get route');
		console.log(" this is the user model" + users)

		users.createUser(req, res);
	})
	app.post('/completeTask/:id', function(req, res){
		console.log('made it to my /delete_user get route');
		users.markTaskCompleted(req, res);
	})
	
}
  
	