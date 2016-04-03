var detailCtrl = angular.module('detailCtrl', []);
detailCtrl.controller('detailController', function($scope, $http, $routeParams){
	$scope.article = {};
	var id = $routeParams.id;
	$http.get('/api/' + id)
		.success(function(data){
			  console.log(JSON.stringify(data));
			  $scope.article = data;
		})
		.error(function(data){
			onsole.log('Error: ' + data);
		})
})