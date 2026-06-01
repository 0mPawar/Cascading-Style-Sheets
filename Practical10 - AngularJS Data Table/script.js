var app = angular.module("tableApp", []);
app.controller("TableCtrl", function ($scope) {
  $scope.search = "";
  $scope.students = [
    { name: "Student1", rollno: "101", course: "CO", marks: 78 },
    { name: "Student2", rollno: "102", course: "IF", marks: 92 },
    { name: "Student3", rollno: "103", course: "CO", marks: 28 },
    { name: "Student4", rollno: "104", course: "SE", marks: 88 },
    { name: "Student5", rollno: "105", course: "IF", marks: 74 },
    { name: "Student6", rollno: "106", course: "CO", marks: 65 },
    { name: "Student7", rollno: "107", course: "SE", marks: 55 },
    { name: "Student8", rollno: "108", course: "IF", marks: 31 },
    { name: "Student9", rollno: "109", course: "CO", marks: 52 },
    { name: "Student10", rollno: "110", course: "SE", marks: 47 },
  ];
});
