const express = require('express');
const bodyParser = require('body-parser');
//const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');


// Connecting to the database
mongoose.connect("mongodb+srv://felipeeu:fevi2406@clusterfelipe-kdk6j.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//mongoose.connect("mongodb+srv://felipeeu:fevi2406@clusterfelipe-kdk6j.mongodb.net/test?retryWrites=true")
// create express app
const app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',()=>{console.log('connect to database')});



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;




// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Elements application."});
});


require('./app/routes/element.routes.js')(app);

let port =  4000
// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


