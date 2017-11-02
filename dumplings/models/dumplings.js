const db = require('../db/config');
const Dumpling = {};

Dumpling.findAll = () => {
  return db.query(
    `
    SELECT * FROM dumplings
    `
  );
};

//this is the function that selects one restaurant
Dumpling.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM dumplings
    WHERE id = $1
    `, [id]);
};

//this is the function that selects one restaurant
Dumpling.create = dumplings => {
  console.log('inside of create function')
  // return db.one(
  //   `
  //   INSERT INTO dumplings
  //   (park_name, address, city, state, coordinates, lat, lng, image, website, description, weather, directions, hours)
  //   VALUES ($/park_name/, $/address/, $/city/, $/state/, $/coordinates/, $/lat/, $/lng/, $/image/, $/website/, $/description/, $/weather/, $/directions/, $/hours/)
  //   RETURNING *
  //   `, parks
  //   );
};

//this is the function deletes a single item in the database
Dumpling.delete = (id) => {
  return db.none(`
    DELETE FROM dumplings
    WHERE id = $1
    `, [id]);
};

module.exports = Dumpling;
