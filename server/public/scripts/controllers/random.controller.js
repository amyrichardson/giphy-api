app.controller('RandomController', ['$http', 'GiphyService', function($http, GiphyService){
    console.log('RandomController loaded');
    const self = this;

    self.randomResult = GiphyService.randomResult;
    
    self.getRandom = function () {
        GiphyService.getRandom();
    }

}]);