app.controller('SearchController', ['GiphyService', function(GiphyService){
    console.log('SearchController loaded');
    const self = this;

    //connect to Giphy service search result
    self.searchResult = GiphyService.searchResult;

    //call search giphy function on click
    self.searchGiphy = function(searchText) {
        GiphyService.searchGiphy(searchText);
    } //end searchGiphy

    //call prev gif on click
    self.prevGif = function() {
        GiphyService.prevGif();
    } //end prevGif

    //call next gif on click
    self.nextGif = function() {
        GiphyService.nextGif();
    } //end nextGif

    self.favoriteGif = function(gif) {
        GiphyService.favoriteGif(gif);
    }
}]);