const express = require('express');
const dumplingRoutes = express.Router();

const dumplingController = require('../controllers/dumpling-controller');

dumplingRoutes.get('/', dumplingController.index);


// need to export the files
module.exports = dumplingRoutes;
