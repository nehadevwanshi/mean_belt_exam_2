myApp.factory('userFactory', function($http,$sessionStorage){
 
	var login_user = $sessionStorage.login_user
	var factory = {}
	var users = []
	

	factory.getLoginUser = function(callback){
		return login_user ;   
	}

	factory.getUsers = function(callback){
		$http.get('/users').then(function(data){                      
			callback(data.data);
		});   
	}
	 

	factory.createUser = function(info, callback){
		$http.post('/user', info).then(function(response){
			if(response.error){
				callback(response);
			} else {
				console.log(" this is our friend data " +response)
				users.push(response.data)    
				callback(users);
			}   
		})
	}

	factory.logout = function(user_name){
		user_name = null;
	}

	return factory;
})