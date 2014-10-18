'use strict';

angular.module('munch', ['ui.router'])
.config( 
	['$stateProvider', '$urlRouterProvider',
	function ($stateProvider,   $urlRouterProvider) {
		// For any unmatched url, redirect to /
		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state('home', {
		url: "/",
		templateUrl: "partials/home.html"
		})
		.state('investors', {
		url: "/investors",
		templateUrl: "partials/investors.html"
		});

}]);