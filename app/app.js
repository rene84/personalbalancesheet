'use strict';

angular.module('app', [ 'ngRoute', 'ui.bootstrap']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'})
}]).

controller('AssetController', function() {
		this.asset = {
			name : 'House',
			value : 200000,
			revenue : 3,
			cost : 1,
			growth : 4
		};
});
