const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

app.use(logger('dev'));
app.use(cors());

// REQUIRE THE ROUTER
const dumplingRoutes = require('./routes/dumpling-routes');
app.use('/dumplings', dumplingRoutes);

// MIDDLEWARE
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// USE MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// INDEX ROUTE
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// ERROR HANDLER
app.use('*', (req, res) => {
  res.status(404).send(err);
})

// LOCAL HOST PORT FOR DEVELOPMENT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log( `Listening on port ${port}`);
})
