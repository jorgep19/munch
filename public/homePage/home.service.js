'use strict'

function MainService($http) {
	this.getRestaurants = function(callback) {
		$http.get('/api/get/restaurants')
		.success(function(data) {
			callback(data);
		}).error(function(err){
			console.log(err);
		});
	};

	this.postRestaurant = function(restData, callback) {
		$http.post('/api/put/restaurant/', restData).
		success(function(data, status, headers, config) {
			callback(data, status);
		}).
		error(function(data, status, headers, config) {
			callback(data, status);
		});
	};

	this.postUser = function(userData, callback) {
		$http.post('/api/put/user/', userData).
		success(function(data, status, headers, config) {
			callback(data, status);
		}).
		error(function(data, status, headers, config) {
			callback(data, status);
		});
	};
}

angular.module('munch')
.service('MainService', ['$http', MainService]);
