'use strict';

angular.module('munch', ['ui.router', 'angucomplete'])
.config( 
	['$stateProvider', '$urlRouterProvider',
	function ($stateProvider,   $urlRouterProvider) {
		// For any unmatched url, redirect to /
		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "homePage/home.html"
		})
		.state('investors', {
			url: "/investors",
			templateUrl: "investorsPage/investors.html"
		});

}]);