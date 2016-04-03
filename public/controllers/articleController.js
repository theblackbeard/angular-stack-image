var addCtrl = angular.module('newArticleCtrl', []);
addCtrl.controller('articleController', function($scope, $http, filepickerService){
	$scope.article = {};
	$scope.createArticle = function(){
		$http.post('/api', $scope.article)
			.success(function(data){
				console.log(JSON.stringify(data));
				$scope.article = {};
			})
			.error(function(data){
				console.log('Erorr: ' + data)
			})
	};

	  $scope.upload = function(){
        filepickerService.pick(
            {
                mimetype: 'image/*',
                language: 'en',
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
            function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.article.picture = Blob;
                $scope.$apply();
            }
        );
    };

	$scope.uploadMultiple = function(){
		filepickerService.pickMultiple(
            {
                mimetype: 'image/*',
                language: 'en',
                maxFiles: 3, //pickMultiple has one more option
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
             function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.article.morePictures = Blob;
                $scope.$apply();
            }
		);
	};


});