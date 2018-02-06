app.service('GiphyService', ['$http', function($http){
    console.log('giphy service loaded');
    
    let self = this;
    self.randomResult = {};
    self.searchResult = { list: [], pagination: 0, count: 25 };
    self.favorites = { list: [] };

    //giphy api - get random gif
    self.getRandom = function(){
        $http.get('/giphy/random').then(function (response) {
            console.log('response: ', response);
            self.randomResult.url = response.data.data.image_url;
        })
    }

    //giphy api - search gifs
    self.searchGiphy = function(searchText) {

        $http.get(`/giphy/search/${searchText}`).then(function(response){
            self.searchResult.pagination = response.data.pagination.offset;
            self.searchResult.count = response.data.pagination.count;
            self.searchResult.list = response.data.data;
        });

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

    self.favoriteGif = function(gif){
        console.log('gif to favorite: ', gif);
        let favoriteGif = {url: gif};
        $http.post('/favorites', favoriteGif)
            .then(function(response){
                self.getFavorites();
            })
            .catch(function(error){
                console.log('boo', error);
            })
    } //end favoriteGif

    self.getFavorites = function () {
        $http.get('/favorites')
            .then(function(response){
                self.favorites.list = response.data;
                console.log('favorites: ', self.favorites.list);
            })
            .catch(function(error){
                console.log('boo', error);
            })
    }

    self.getFavorites();

}]);