const chai = require('chai');
const chaiHttp = require('chai-http');
const basicSetup = require('./../../helper/setup.test');

const app = require('../../../app');

const CheckConnection = require('./../../../app/models/checkConnection');

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /api/account/checkConnection', function () {
basicSetup();

  it('should create and return a new checkConnection item', function () {
    let res;
    // 1) First, call the API
    return (
      chai
        .request(app)
        .get('/api/account/checkConnection')
        .then((_res) => {
          res = _res;
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.keys('_id', 'connectionDate', 'connectionStatus', '__v');
          // 2) then call the database
          return CheckConnection.findById(res.body._id);
        })
        // 3) then compare the API response to the database results
        .then((data) => {
          expect(res.body._id).to.equal(data.id);
          expect(res.body.__v).to.equal(data.__v);
          expect(res.body.connectionStatus).to.equal(data.connectionStatus);
          expect(new Date(res.body.connectionDate)).to.eql(data.connectionDate);
        })
    );
  });
});
