const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');

//request to giphy api for random gif
router.get('/random', (req, res) => {
    //define url to request to
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API}`;
    
    axios.get(url).then((response) => {
        console.log('response: ', response.data);
        res.send(response.data); //send data back to client
    })
    .catch((error) => {
        res.sendStatus(500); //send error
    })

});

//request to giphy api w/ search
router.get('/search/:searchText', (req, res) => {    
    let url = 'http://api.giphy.com/v1/gifs/search';
    let config = {
        params: {
            api_key: process.env.GIPHY_API,
            q: req.params.searchText
        }
    } //end config

    //call to api
    axios.get(url, config).then((response) => {
        res.send(response.data); //send data back to client
    })
    .catch((error) => {
        res.sendStatus(500); //send error
    })
});




module.exports = router; 