angular.module('app', [ "ui.bootstrap", "xeditable", "LocalStorageModule" ])

.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
})

.config([ 'localStorageServiceProvider', function(localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('personalbalancesheet');
} ])

.controller('BalanceCtrl', function($scope, localStorageService) {
  $scope.balance = getAssets();
  
  function getAssets() {
    balance = localStorageService.get('balance');
    if (balance == null) {
      return [ {} ];
    }
    return balance;
  }
  
  $scope.removeAsset = function(id) {
    if ($scope.balance.length > 1)
      $scope.balance.splice(id, 1);
    localStorageService.set('balance', $scope.balance);
  };
  
  $scope.saveAsset = function(asset, id) {
    console.log(JSON.stringify(asset));
    $scope.balance[id] = asset;
    if ((id + 1) == $scope.balance.length) {
      $scope.balance.push({});
    }
    localStorageService.set('balance', $scope.balance);
  };
  
  $scope.clearBalance = function() {
    localStorageService.remove('balance');
    $scope.balance = getAssets();
  };
  
})

.controller('RevenueCtrl', function($scope, localStorageService) {
  $scope.revenue = getItems();
  
  function getItems() {
    revenue = localStorageService.get('revenue');
    if (revenue == null) {
      return [ {} ];
    }
    return revenue;
  }
  
  $scope.removeItem = function(id) {
    if ($scope.revenue.length > 1)
      $scope.revenue.splice(id, 1);
    localStorageService.set('revenue', $scope.revenue);
  };
  
  $scope.saveItem = function(item, id) {
    console.log(JSON.stringify(item));
    $scope.revenue[id] = item;
    if ((id + 1) == $scope.revenue.length) {
      $scope.revenue.push({});
    }
    localStorageService.set('revenue', $scope.revenue);
  };
  
  $scope.clearRevenue = function() {
    localStorageService.remove('revenue');
    $scope.revenue = getItems();
  };
  
})

.controller('ExpenseCtrl', function($scope, localStorageService) {
 $scope.expense = getItems();
  
  function getItems() {
    expense = localStorageService.get('expense');
    if (expense == null) {
      return [ {} ];
    }
    return expense;
  }
  
  $scope.removeItem = function(id) {
    if ($scope.expense.length > 1)
      $scope.expense.splice(id, 1);
    localStorageService.set('expense', $scope.expense);
  };
  
  $scope.saveItem = function(item, id) {
    $scope.expense[id] = item;
    if ((id + 1) == $scope.expense.length) {
      $scope.expense.push({});
    }
    localStorageService.set('expense', $scope.expense);
  };
  
  $scope.clearExpense = function() {
    localStorageService.remove('expense');
    $scope.expense = getItems();
  };  
})

.controller('AppCtrl', function($scope) {
  $scope.clearAll = function() {
    console.log($scope);
    $scope.revenue.clearRevenue();
    $scope.balance.clearBalance();
    $scope.expense.clearExpense();
  }
  
  $scope.loadExamples = function() {
    $scope.assets = [ {
      name : "House",
      value : 200000,
      growth : 5,
      revenue : 200,
      cost : 100
    }, {} ];
    
    $scope.income = [ {
      id : 1,
      name : "Wage",
      amount : 60000,
    }, {} ];
    
    $scope.expenses = [ {
      id : 1,
      name : "Taxes",
      amount : 20000,
    }, {} ];
  };

});
