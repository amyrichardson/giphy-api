const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');


router.get('/random', (req, res) => {
    console.log('in giphy router /random');
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API}`;
    console.log('url: ', url);
    
    axios.get(url).then((response) => {
        console.log('response: ', response.data);
        res.send(response.data);
    })
    .catch((error) => {
        res.sendStatus(500);
    })

});




module.exports = router; 