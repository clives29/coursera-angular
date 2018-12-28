(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController ($scope) {
  $scope.lunch = "";
  $scope.message="";
  $scope.count= function(){
  	var tmp = $scope.lunch.split(',').length;
  	console.log(tmp)
  	if (!$scope.lunch) {
  		$scope.message="Please enter data first";
  	}else{
  	if (tmp>0 && tmp <=3){
  		$scope.message="Enjoy!";
  	} if (tmp>3){
  		$scope.message="To much!";
  	}}
  };


  

};




})();
