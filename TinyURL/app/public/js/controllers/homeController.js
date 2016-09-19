/**
 * Created by mututu on 8/30/16.
 */
var app= angular.module("tinyurlApp");

app.controller("homeController", ["$scope", "$http", "$location", function($scope, $http, $location){
    $scope.submit = function(){
        $http.post("/api/v1/urls", {
            longUrl: $scope.longUrl
        })
            .success(function (data) {
                $location.path("/urls/" + data.shortUrl);
            });
    }
}]);
