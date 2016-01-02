'use strict';

angular.module('myApp.view1', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl : 'view1/view1.html',
		controller : 'View1Ctrl'
	});
} ])

.controller('View1Ctrl', [ function() {

} ])

.controller('AssetController', function() {
	this.asset = {
		name : 'House',
		value : 200000,
		revenue : 3,
		cost : 1,
		growth : 4
	};
});
