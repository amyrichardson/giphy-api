app.controller('SearchController', ['$http', function($http){
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
            self.count = response.data.pagination.count;
            self.offsetValue = response.data.pagination.offset;
            self.searchResult = response.data.data;
        })
    } //end searchGiphy


}]);