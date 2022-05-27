// require the express npm package
const express = require('express');
// to instantiate the server
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// this is the middleware function
// you need this in order to accept POST data on any server
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// makes the CSS/JS files in our public folder a static resource so we do not 
// have to specify server endpoint for every file
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});