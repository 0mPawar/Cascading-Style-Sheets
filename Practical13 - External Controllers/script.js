// This would normally be in an external 'controller.js' file
var app = angular.module("extApp", []);
app.controller("ExternalCtrl", function ($scope) {
  $scope.message = "Hello from External Controller! 🎉";
  $scope.students = [
    { name: "Student 1", marks: 79.0 },
    { name: "Student 2", marks: 86.0 },
    { name: "Student 3", marks: 40.0 },
    { name: "Student 4", marks: 98.0 },
  ];
});
