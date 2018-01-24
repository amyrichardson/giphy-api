app.service('GiphyService', ['$http', function($http){
    console.log('giphy service loaded');
    
    let self = this;
    self.randomResult = {};
    self.searchResult = { list: [] };

    self.getRandom = function(){
        let url = 'http://api.giphy.com/v1/gifs/random?api_key=e5EoJjbBgo5kIWE1H4dgFHuzeXr52REd';
        $http.get(url).then(function (response) {
            self.randomResult.url = response.data.data.image_url;
        })
    }

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
            self.searchResult.list = response.data.data;
        })
    } //end searchGiphy


}]);