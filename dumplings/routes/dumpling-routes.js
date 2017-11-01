const express = require('express');
const dumplingRoutes = express.Router();


// // still have to import the quote data
// const quoteInfo = require('../db/quotes-data');

// // the root route, `/quotes`
// quoteRoutes.get('/', (req, res) => {
//   res.json({
//     message: 'ok',
//     data: quotes,
//   });
// });

// need to export the files
module.exports = dumplingRoutes;
