app.controller('RandomController', ['$http', 'GiphyService', function($http, GiphyService){
    console.log('RandomController loaded');
    const self = this;

    self.randomResult = GiphyService.randomResult;
    console.log('self.randomResult', self.randomResult);
    

    self.getRandom = function () {
        GiphyService.getRandom();
    }

}]);