var app = angular.module("modelApp", []);

app.controller("ModelCtrl", function ($scope) {
  $scope.student1 = {
    name: "Om Pawar",
    age: 19,
    department: "Computer Engineering",
  };
});
