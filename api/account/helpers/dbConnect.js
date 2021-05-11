const mongoose = require('mongoose');
const DB_URI_PROD = process.env.DATABASE_URL_PROD;
const DB_URI_DEV = process.env.DATABASE_URL_DEV;

function dbConnect(env) {
  const dbUri = env === 'production' ? DB_URI_PROD : DB_URI_DEV;
  mongoose.connect(dbUri, {
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

module.exports = { dbConnect, dbClose };
