'use strict';
function MainCtrl() {
	this.do = function() {
		alert("works");
	};

	this.test = "data";

	this.restaurants = [
	'The Coop',
	'Relish',
	'Mochi',
	'Dragonfly'
	];
}


angular.module('munch')
.controller('MainCtrl', MainCtrl);
