const db = require('../db/config');
const Dumpling = {};

Dumpling.findAll = () => {
  return db.query
  (
    'SELECT * FROM dumplings'
  );
}

module.exports = Dumpling;
