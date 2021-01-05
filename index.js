// const public = require('./public')
const express = require('express');
const app = express();
const path = require('path')

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use('/api', require('../DIGITALGIFTCARD/server/apiRoutes'));