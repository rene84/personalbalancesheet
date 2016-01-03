angular.module('app', [ "ui.bootstrap", "xeditable" ])

.run(function(editableOptions) {
	editableOptions.theme = 'bs3';
})

.controller('BalanceCtrl', function($scope) {
	this.assets = [ {
		id : 1,
		name : "House",
		value : 200000,
		growth : 5,
		revenue : 200,
		cost : 100
	}, {} ];
	this.addAsset = function(asset) {
		this.assets.push(asset);
	};
	$scope.saveAsset = function(asset, id) {
		console.log(asset.name + "  " + id);
	};

})

.controller('IncomeCtrl', function($scope) {
	this.income = [ {
		id : 1,
		name : "Wage",
		amount : 60000,
	}, {} ];
	
	$scope.saveIncome = function(element, id) {
		console.log(element.name + "  " + id);
	};

})

.controller('ExpenseCtrl', function($scope) {
	this.expenses = [ {
		id : 1,
		name : "Taxes",
		amount : 20000,
	}, {} ];
	
	

});
