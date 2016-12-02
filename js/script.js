var app = angular.module("root", []);
app.controller("myCtrl", function ($scope) {
        $scope.users = [];
        $scope.addUser = function () {
            var date = new Date();
            $scope.user.date = date.getTime();
            $scope.users.push({
                id: $scope.user.date,
                title: $scope.user.title,
                body: $scope.user.body
            });

            console.log($scope);
        }
        $scope.clearInput = function () {
            $scope.user.title = null;
            $scope.user.body = null;
        }

    }
);
