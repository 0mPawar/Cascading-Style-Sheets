var app = angular.module("filterApp", []);
app.controller("FilterCtrl", function ($scope) {
  $scope.text = "AngularJS Filters";
  $scope.amount = 5000;
  $scope.search = "";
  $scope.orderProp = "name";
  $scope.limit = 3;
  $scope.students = [
    { name: "Student1", marks: 56 },
    { name: "Student2", marks: 39 },
    { name: "Student3", marks: 100 },
    { name: "Student4", marks: 74 },
  ];
});
