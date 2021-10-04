const mongoose = require('mongoose');
const mongooseConnect = require('./../../helpers/dbConnect');

const basicSetup = () => {
  before(function() {
    return mongooseConnect.dbConnect('test').then(() => mongoose.connection.db.dropDatabase());
  });

  afterEach(function() {
    return mongoose.connection.db.dropDatabase();
  });

  after(function() {
    return mongooseConnect.dbClose();
  });
};

module.exports = basicSetup;
