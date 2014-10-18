'use strict';

function MainCtrl(MainService) {
	var ctrl = this;

	MainService.getRestaurants(function(restaurantsData) {
		ctrl.restaurants = restaurantsData;
	})

	ctrl.addRestaurant = function() {
		var restName = document.getElementById('restSuggestionBox_value').value;
		MainService.postRestaurant({name: restName}, function(data, status){
			MainService.getRestaurants(function(restaurantsData) {
				ctrl.restaurants = restaurantsData;
			});

			console.log(data);
			console.log(status);
		});
	};

	ctrl.addUser = function() {
		MainService.postUser({ email: ctrl.newUser}, function(data, status){
			console.log(data);
			console.log(status);
		});	
	};

	ctrl.newUser = '';
}


angular.module('munch')
.controller('MainCtrl', [ 'MainService', MainCtrl]);
