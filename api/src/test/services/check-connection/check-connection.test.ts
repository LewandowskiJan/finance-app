import chai from 'chai';
import chaiHttp from 'chai-http';
import { Response } from 'express';

import { CheckConnection } from './../../check-connection/check-connection';
import { basicSetup } from '../../helper/setup.test';
import { myApp } from '../../../app';

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /api/checkConnection', () => {
  basicSetup();

  it('should create and return a new checkConnection item', () => {
    let response: Response | any;
    // 1) First, call the API
    return (
      chai
        .request(myApp)
        .get('/api/checkConnection')
        .then((_res) => {
          response = _res;
          expect(response).to.have.status(200);

          expect(response.body).to.be.a('object');
          expect(response.body).to.have.keys('_id', 'connectionDate', 'connectionStatus', '__v');
          // 2) then call the database
          return CheckConnection.findById(response.body._id);
        })
        // 3) then compare the API response to the database results
        .then((data) => {
          expect(response.body._id).to.equal(data.id);
          expect(response.body.__v).to.equal(data.__v);
          expect(response.body.connectionStatus).to.equal(data.connectionStatus);
          expect(new Date(response.body.connectionDate)).to.eql(data.connectionDate);
        })
    );
  });
});
