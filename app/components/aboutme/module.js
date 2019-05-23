angular.module("myApp").controller("myFirstController",function($scope){
    let Student={
        FirstName: "Leela Krishna",
        LastName: "Kosaraju",
        StudentId: "S534629@nwmissouri.edu"
    }
    $scope.Student=Student;
})
let mycontroller=function($scope){
    $scope.message="Hello World";
}