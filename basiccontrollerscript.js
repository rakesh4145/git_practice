/*
  1) create a module
  2) create a controller
  3) register controller with module.
*/

// creation of module
var myFirstModule = angular.module("moduleOne",[]);

// creation of controller
var myfirstController = function($scope)
{
  $scope.firstName = "hamid";
  $scope.uidPin = 123;
}

// register controller with module
myFirstModule.controller("controllerOne",myfirstController);

// ------------   2nd maths Controller ------------

myFirstModule.controller("mathsController",function($scope)
{
  $scope.a = 10;
  $scope.b = 100;
}
);




// ------ Complex Object controller --------

myFirstModule.controller("accountsController",function($scope)
 {
  var account =
       {
        accountNumber : 101,
        accountHolderName : "hamid",
        banalce : 2000
       };

  $scope.account = account;


  var account1 = {accountNumber:101,accountHolderName:"user-1",balance:2000};
  var account2 = {accountNumber:102,accountHolderName:"user-2",balance:3000};
  var account3 = {accountNumber:103,accountHolderName:"user-3",balance:4000};
  var account4 = {accountNumber:104,accountHolderName:"user-4",balance:5000};

  var arr = [account1,account2,account3,account4];
  $scope.accounts = arr;
  $scope.acc1 = account1;

 });
