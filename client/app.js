var myApp = angular.module('Myapp', ['ngRoute', 'ngStorage']);
// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below. 



// this is our router. You can choose to set your controllers on the partial
// but I prefer to set my controllers here because it's cleaner
(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/', {
				controller: 'indexController',
				templateUrl: "partials/login.html"
			})
			
			.when('/items/:user_name', {
				controller: "indexController", 
				templateUrl: "partials/list_bucket.html"
			})

			.when('/user/:user_name', {
				controller: 'showController', 
				templateUrl: "partials/show.html"
			})
			
			.when('/vote/:id', {
				controller: 'indexController', 
				templateUrl: "partials/show.html"
			})
		
	})
}());     



