import { dbConnect, dbClose } from '../../helpers/db-connect';

export const basicSetup = () => {
  before(() => dbConnect('test').dropDatabase());

  afterEach(() => dbConnect('test').dropDatabase());

  after(() => dbClose());
};
