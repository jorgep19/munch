'use strict'

function MainService($http) {
	this.getRestaurants = function(callback) {
		$http.get('/api/get/restaurants')
		.success(function(data) {
			callback(data);
		}).error(function(err){
			console.log(err);
		});
	}
}


angular.module('munch')
.service('MainService', ['$http', MainService]);
