app.controller('SearchController', ['$http', 'GiphyService', function($http, GiphyService){
    console.log('SearchController loaded');
    const self = this;

    self.searchGiphy = function(searchText) {
        let url = 'http://api.giphy.com/v1/gifs/search';
        let config = {
            params: {
                api_key: 'How6kWJxlyxCXbf8x3BUEPpfkfOiYEqK',
                q: searchText
            }
        }
        $http.get(url, config).then(function(response){
            console.log('response', response);
            
            self.searchResult = response.data.data;
        })
    } //end searchGiphy


}]);