app.controller('RandomController', ['GiphyService', function(GiphyService){
    console.log('RandomController loaded');
    const self = this;

    //connect to giphy service
    self.randomResult = GiphyService.randomResult;
    
    //get a random gif from giphy service
    self.getRandom = function () {
        GiphyService.getRandom();
    } //end getRandom
    
    self.favoriteGif = function(gif) {
        GiphyService.favoriteGif(gif);
    }
}]);

