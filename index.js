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


app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });


  const port = process.env.PORT || 1993; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
})