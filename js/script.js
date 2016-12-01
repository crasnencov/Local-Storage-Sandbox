var app = angular.module("root", []);
app.controller("myCtrl", function ($scope) {
        $scope.users = [];
        $scope.addUser = function () {
            //$scope.json = angular.toJson($scope.user);
            $scope.users.push({
                title: $scope.user.title,
                body: $scope.user.body
            });
            console.log($scope);
        }
    }
);
