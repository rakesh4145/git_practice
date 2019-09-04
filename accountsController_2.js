var accountsModule2 = angular.module("accountsModule",[]).
                controller("accountsController",function($scope){
                  var account1 = {accountNumber:101,accountHolderName:"user-1",balance:2000};
                  var account2 = {accountNumber:102,accountHolderName:"user-2",balance:3000};
                  var account3 = {accountNumber:103,accountHolderName:"user-3",balance:4000};
                  var account4 = {accountNumber:104,accountHolderName:"user-4",balance:5000};

                  var arr = [account1,account2,account3,account4];
                  $scope.accounts = arr;
                  $scope.acc1 = account1;

                });
