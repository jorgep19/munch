'use strict';

function MainCtrl(MainService) {
	var ctrl = this;

	MainService.getRestaurants(function(restaurantsData) {
		ctrl.restaurants = restaurantsData;
	})

	ctrl.addRestaurant = function() {

	};

	ctrl.addUser = function() {

	};
	
	ctrl.newRestaurant = '';
}


angular.module('munch')
.controller('MainCtrl', [ 'MainService', MainCtrl]);
