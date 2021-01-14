require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./api/routes/candidateRoutes');
const Candidate = require('./api/models/candidateModel'); //created model loading here
const bodyParser = require('body-parser');

const app = express();
port = process.env.PORT || 3000;

//mongoose instance url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Candidatedb', {useUnifiedTopology: true, useNewUrlParser: true});

// Middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route

app.listen(port);

console.log('Candidate RESTful API server started on: ' + port);
