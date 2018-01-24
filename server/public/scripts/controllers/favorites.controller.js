app.controller('FavoritesController', ['GiphyService', function(GiphyService){
    console.log('FavoritesController loaded');
    let self = this;

    self.favorites = GiphyService.favorites;
    console.log('favorite controller: ', self.favorites);
    
}]);