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
        };
        $scope.deleteUser = function (thisThis) {
            var index = $scope.users.indexOf(thisThis);
            $scope.users.splice(index, 1);
        };

        $scope.clearInput = function () {
            $scope.user.title = null;
            $scope.user.body = null;
        }

    }
);
