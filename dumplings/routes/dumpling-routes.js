const express = require('express');
const dumplingRoutes = express.Router();

const dumplingController = require('../controllers/dumpling-controller');

dumplingRoutes.get('/:id', dumplingController.show);
dumplingRoutes.get('/:id', dumplingController.delete);
dumplingRoutes.get('/', dumplingController.index);


// need to export the files
module.exports = dumplingRoutes;
