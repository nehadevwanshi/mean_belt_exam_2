
myApp.controller('createController', function($scope, $location, $routeParams, bucketFactory, userFactory,$sessionStorage){

$scope.createItem = function(){
		console.log('createPoll createController', $scope.bucket);   
		bucketFactory.createBucket($scope.bucket, function(bucketArray){
			$scope.buckets = bucketArray;
			$location.url('/items/'+$sessionStorage.login_user);
		})      
	} 



}) 