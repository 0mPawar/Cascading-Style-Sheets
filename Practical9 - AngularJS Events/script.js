var app = angular.module("eventApp", []);
app.controller("EventCtrl", function ($scope) {
  $scope.count = 0;
  $scope.keyPressCount = 0;
  $scope.mouseLog = "";
  $scope.keyLog = "";
  $scope.dblMsg = "";
  $scope.changeLog = "";
  $scope.inputVal = "";
  $scope.x = 0;
  $scope.y = 0;
});
