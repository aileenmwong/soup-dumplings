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

//renders the data from a single item in the database
dumplingController.show = (req, res) => {
  Dumpling.findById(req.params.id)
  .then(dumpling => {
    res.render('./#', {
      data: dumpling,
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

//deletes an item from the database
dumplingController.delete = (req, res) => {
  Dumpling.delete(req.params.id)
  .then(() => {
    res.redirect('/#');
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

module.exports = dumplingController;
