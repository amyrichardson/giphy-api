app.controller('RandomController', ['$http', function($http){
    console.log('RandomController loaded');
    const self = this;

    self.getRandom = function(){
        let url = 'http://api.giphy.com/v1/gifs/random?api_key=e5EoJjbBgo5kIWE1H4dgFHuzeXr52REd';
        $http.get(url).then(function (response) {
            console.log('response;', response);
            self.randomResult = response.data.data;
        })
    }

}]);