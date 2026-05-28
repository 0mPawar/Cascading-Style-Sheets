// AngularJS Module and Controller
var app = angular.module('morningApp', []);
app.controller('MorningCtrl', function($scope) {
    $scope.greeting = "Good Morning!";
    $scope.message  = "Welcome to AngularJS — Practical No. 4";
    $scope.name     = "";
});
