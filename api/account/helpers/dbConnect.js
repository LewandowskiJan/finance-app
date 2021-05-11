const mongoose = require('mongoose');

const databases = {
  production: process.env.DATABASE_URL_PROD,
  development: process.env.DATABASE_URL_DEV,
  test: process.env.DATABASE_URL_TEST,
};

/**
 * Open database connection.
 * @param { string } env the environment.
 * @return { mongoose.Connection }.
 */
function dbConnect(env) {
  const dbUri = databases[env];

  mongoose.connect(dbUri, {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  return mongoose.connection;
}

/**
 * Close database connection.
 * @return { Promise<void> } .
 */
function dbClose() {
  return mongoose.disconnect();
}

module.exports = {dbConnect, dbClose};
