console.log('js');

const app = angular.module('giphyApp', ['ngRoute']);

app.config(function($routeProvider) {
    console.log('config loaded');
    $routeProvider
        .when('/search', {
            templateUrl: '/views/search.html',
            controller: 'SearchController as vm'
        })
        .when('/random', {
            templateUrl: '/views/random.html',
            controller: 'RandomController as vm'
        })
        .otherwise(
            { redirectTo: '/random' }
        );

});