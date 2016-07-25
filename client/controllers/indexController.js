myApp.controller('indexController', function($scope, $sessionStorage,  bucketFactory,userFactory, $location){

	console.log('I am able to load my indexController along with my index partial ' );  
	//$scope.login_user = userFactory.getLoginUser();


	userFactory.getUsers(function(data){
		console.log('this is data in indexController get Users', data);
		$scope.users = data;
	
		bucketFactory.getItems(function(data){
			console.log('this is data in indexController get items', data);
			$scope.items = data;
			$scope.login_user = $sessionStorage.login_user;
				//$location.url('/');  		                       
		}) 
		//$location.url('/');  		                       
	})  

	$scope.getItems = function(){
		
		bucketFactory.getItems(function(data){
			console.log('this is data in indexController get items', data);
			$scope.items = data;
			$scope.login_user = $sessionStorage.login_user;
				//$location.url('/');  		                       
		}) 

		userFactory.getUsers(function(data){
			console.log('this is data in indexController get Users', data);
			$scope.users = data;
		
			//$location.url('/');  		                       
		})  
	}		
	

	$scope.login = function(){

		userFactory.createUser($scope.newUser, function(userArray){
			$scope.users = userArray;
			$sessionStorage.login_user = $scope.newUser.user_name;
			$scope.login_user = $sessionStorage.login_user;
			//$scope.getItems();
			$location.url('/items/'+$scope.login_user);
		})   

	}
	    
	

	$scope.logout = function(){
		userFactory.logout() 
		$sessionStorage.login_user = null
		//$scope.login_user = $sessionStorage.login_user; 
		$location.url('/');  
	}

$scope.markTaskCompleted = function(bucket){
		console.log('createPoll createController', bucket.completed);   
	
		bucketFactory.markTaskCompleted(bucket, function(bucketArray){
			$scope.buckets = bucketArray;
			$location.url('/items/'+$sessionStorage.login_user);
		})      
	} 

     
})     
    


			
	
	
