'use strict';
function MainCtrl() {
	this.do = function() {
		alert("works");
	};

	this.test = "data";
}


angular.module('munch')
.controller('MainCtrl', MainCtrl);
