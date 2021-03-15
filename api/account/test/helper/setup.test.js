const mongoose = require('mongoose');
const mongooseConnect = require('./../../helpers/dbConnect');

let basicSetup = () => {
  before(function () {
    return mongooseConnect.testDbConnect().then(() => mongoose.connection.db.dropDatabase());
  });

  afterEach(function () {
    return mongoose.connection.db.dropDatabase();
  });

  after(function () {
    return mongooseConnect.dbClose();
  });
};

module.exports = basicSetup;
