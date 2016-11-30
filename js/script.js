function MyCtrl($scope) {
    /*
     $scope.user = {
     firstName: "Frank",
     lastName: "Williams"
     };
     */
    $scope.showJson = function () {
        $scope.json = angular.toJson($scope.user);
    }
}