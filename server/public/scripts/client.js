console.log('js');

const app = angular.module('giphyApp', ['ngRoute', 'ngMaterial']);

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
        .when('/favorites', {
            templateUrl: '/views/favorites.html',
            controller: 'FavoritesController as vm'
        })
        .otherwise(
            { redirectTo: '/random' }
        );

});

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('pink');
  });