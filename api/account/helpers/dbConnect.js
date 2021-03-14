const mongoose = require('mongoose');
const DB_uri = process.env.DATABASE_URL;
const DB_test_uri = process.env.TEST_MONGODB_URI;

function dbConnect() {
  mongoose.connect(DB_uri, {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  return mongoose.connection;
}

function testDbConnect() {
  mongoose.connect(DB_test_uri, {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  return mongoose.connection;
}

function dbClose() {
  return mongoose.disconnect();
}

module.exports = { dbConnect, testDbConnect, dbClose };
