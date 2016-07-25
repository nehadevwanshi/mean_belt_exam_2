myApp.controller('showController', function($scope, $location,$route,$routeParams, userFactory,bucketFactory, $sessionStorage){

	var id = $routeParams.id;
	$scope.login_user = $sessionStorage.login_user;


	userFactory.getUsers(function(data){
		console.log('this is data in indexController get Users', data);
		$scope.users = data;	
		//$location.url('/');  		                       
	})  
	
	bucketFactory.getItems(function(data){
			console.log('this is data in bucketFactory get items', data);
			$scope.items = data;
			$scope.login_user = $sessionStorage.login_user;
	}) 		

	$scope.showUserBucket = function(data){
		$location.url('/user/'+$scope.login_user);  		                       
	}


})  