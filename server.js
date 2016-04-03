'use strict';
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


const routes = require('./config/routes')();

const options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } }; 

mongoose.connect('mongodb://127.0.0.1:27017', options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// Log with Morgan
app.use(morgan('dev'));

// parse application/json and look for raw text                                   
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.use(express.static(__dirname + '/public')); 

app.route('/api')
    .post(routes.post)
    .get(routes.getAll);
app.route('/api/:id')
    .get(routes.getOne);

app.listen(port);
console.log('listening on port ' + port);