app.service('GiphyService', ['$http', function($http){
    console.log('giphy service loaded');
    
    let self = this;
    self.randomResult = {};

    self.getRandom = function(){
        let url = 'http://api.giphy.com/v1/gifs/random?api_key=e5EoJjbBgo5kIWE1H4dgFHuzeXr52REd';
        $http.get(url).then(function (response) {
            console.log('response;', response);
            self.randomResult.url = response.data.data.image_url;
        })
    }


}]);