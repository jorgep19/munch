'use strict';

function MainCtrl(MainService) {
	var ctrl = this;

	ctrl.newsletterMessage;
	ctrl.showNewsletterMessage = false;
	ctrl.showNewsletterMessageError = false;

	ctrl.restSuggestionMessage;
	ctrl.showRestSuggestionMessage = false;
	ctrl.showRestSuggestionMessageError = false;

	MainService.getRestaurants(function(restaurantsData) {
		ctrl.restaurants = restaurantsData;
	})

	ctrl.addRestaurant = function() {
		var restName = document.getElementById('restSuggestionBox_value').value;
		MainService.postRestaurant({name: restName}, function(data, status){
			MainService.getRestaurants(function(restaurantsData) {
				ctrl.restaurants = restaurantsData;
			});

			if(status == 200) {
				ctrl.restSuggestionMessage = data;
			} else {
				ctrl.restSuggestionMessage = 'There was a problem with your submission... Please, try again';
				showNewsletterMessageError = true;
			}

			ctrl.showRestSuggestionMessage = true;
		});
	};

	ctrl.addUser = function() {
		MainService.postUser({ email: ctrl.newUser}, function(data, status){
			if(status == 200) {
				ctrl.newsletterMessage = data;
			} else {
				ctrl.newsletterMessage = 'There was a problem with your submission... Please, try again';
				showRestSuggestionMessageError = true;
			}

			ctrl.showNewsletterMessage = true;
		});	
	};

	ctrl.newUser = '';
}


angular.module('munch')
.controller('MainCtrl', [ 'MainService', MainCtrl]);
