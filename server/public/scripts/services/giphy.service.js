app.service('GiphyService', ['$http', function($http){
    console.log('giphy service loaded');
    
    let self = this;
    self.randomResult = {};
    self.searchResult = { list: [], pagination: 0, count: 25 };

    //giphy api - get random gif
    self.getRandom = function(){
        let url = 'http://api.giphy.com/v1/gifs/random?api_key=e5EoJjbBgo5kIWE1H4dgFHuzeXr52REd';
        $http.get(url).then(function (response) {
            self.randomResult.url = response.data.data.image_url;
        })
    }

    //giphy api - search gifs
    self.searchGiphy = function(searchText) {
        
        let url = 'http://api.giphy.com/v1/gifs/search';
        let config = {
            params: {
                api_key: 'How6kWJxlyxCXbf8x3BUEPpfkfOiYEqK',
                q: searchText
            }
        } //end config
        $http.get(url, config).then(function(response){
            console.log('response', response);
            self.searchResult.pagination = response.data.pagination.offset;
            self.searchResult.count = response.data.pagination.count;
            self.searchResult.list = response.data.data;
            
            console.log('hi', self.searchResult.list[0]);
        })
    } //end searchGiphy

    //get prev gif from search
    self.prevGif = function() {
        self.searchResult.pagination -= 1;
        if(self.searchResult.pagination <= 0){
            self.searchResult.pagination = self.searchResult.count - 1;
        } //end if
    } //end prevGif

    //get next gif from search
    self.nextGif = function() {
        self.searchResult.pagination += 1;
        if(self.searchResult.pagination == self.searchResult.count){
            self.searchResult.pagination = 0;
        } //end if
    } //end nextGif


}]);