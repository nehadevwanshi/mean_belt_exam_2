myApp.factory('bucketFactory', function($http,$sessionStorage){
 

	var items = []
	
	var factory = {}
	
	
	factory.getItems = function(callback){
		$http.get('/items/'+$sessionStorage.login_user).then(function(data){
			items = data.data;                             
			callback(items);
		});   
	}
	 
	factory.createBucket = function(info, callback){
		$http.post('/bucket', info).then(function(response){
			if(response.error){
				callback(response);
			} else {
				console.log(" this is our friend data " +response)
				items.push(response.data)    
				callback(items);
			}   
		})
	}
	
	factory.markTaskCompleted = function(bucket, callback){
		$http.post('/completeTask/'+bucket._id,bucket).then(function(response){
			if(response.error){
				callback(response);
			} else {
				console.log(" this is our friend data " +response)
				items.push(response.data)    
				callback(items);
			}   
		})
	}

	return factory;
})