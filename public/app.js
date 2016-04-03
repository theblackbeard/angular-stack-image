var app = angular.module('articleApp', ['newArticleCtrl', 'galleryCtrl' , 'detailCtrl', 'ngRoute', 'angular-filepicker'])
	.config(function($routeProvider, filepickerProvider){
		$routeProvider.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'articleController'
		})

		.when('/gallery', {
			templateUrl: 'partials/gallery.html',
			controller: 'galleryController'
		})

		.when('/detail/:id', {
			templateUrl: 'partials/detail.html',
			controller: 'detailController'
		})

		.otherwise({redirectTo: '/new'});

		filepickerProvider.setKey('')
	})
