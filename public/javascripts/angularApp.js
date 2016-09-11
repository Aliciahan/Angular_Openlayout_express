/**
 * Created by xicunhan on 11/09/2016.
 */
var app = angular.module("demoapp",["openlayers-directive"]);

app.controller('DemoController', [ '$scope', function($scope) {
    angular.extend($scope,{
        caen: {
            lat: 49.1816996182326,
            lon: -0.346899186325073,
            zoom:17
        }
    });
}]);

