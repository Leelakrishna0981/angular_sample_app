angular.module("myApp").controller("myFirstController", function ($scope)
{
    let Student= {
        FirstName: "Leela Krishna",
        LastName : "Kosaraju",
        StudentId : "S534629@nwmisouri.edu"
    }
    $scope.Student=Student;
    
});