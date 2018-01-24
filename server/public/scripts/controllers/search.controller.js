app.controller('SearchController', ['$http', 'GiphyService', function($http, GiphyService){
    console.log('SearchController loaded');
    const self = this;

    self.searchResult = GiphyService.searchResult;

    self.searchGiphy = function(searchText) {
        GiphyService.searchGiphy(searchText);
    }

}]);