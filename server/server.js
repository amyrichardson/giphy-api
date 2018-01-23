//Bring in Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

//Bring in static files/body parser
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//Routes


//Setup Port
app.listen(PORT, ()=> {
    console.log('Server up and running on port: ', PORT); 
});