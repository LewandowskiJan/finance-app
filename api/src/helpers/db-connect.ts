import { connect, connection, Connection, disconnect } from 'mongoose';

const databases: any = {
  production: 'mongodb://database:27017/finance-app-db',
  development: 'mongodb://localhost:27017/finance-app-db-dev',
  test: 'mongodb://localhost:27017/finance-app-db-test',
};

/**
 * Open database connection.
 * @param { string } env the environment.
 * @return { Connection }.
 */
export function dbConnect(env: string): Connection {
  const dbUri: any = databases[env];

  connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any);

  return connection;
}

/**
 * Close database connection.
 * @return { Promise<void> } .
 */
export function dbClose(): Promise<void> {
  return disconnect();
}

// module.exports = { dbConnect, dbClose };
