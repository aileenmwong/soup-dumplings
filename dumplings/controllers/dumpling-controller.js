const Dumpling = require('../models/dumplings');

const dumplingController = {};

//find all of the dumplings in the database
dumplingController.index = (req, res) => {
  Dumpling.findAll()
    .then(dumplings => {
      res.json({
        message: 'ok',
        data: dumplings,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = dumplingController;
