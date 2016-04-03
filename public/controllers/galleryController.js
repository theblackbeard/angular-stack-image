var galleryCtrl = angular.module('galleryCtrl', []);
galleryCtrl.controller('galleryController', function($scope, $http){
	$scope.articles = [];

	$http.get('/api')
		.success(function(data){
			console.log(JSON.stringify(data));
			$scope.articles = data;
		})
		.error(function(data){
			console.log("Error:  " + data);
		})
})