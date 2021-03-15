const chai = require('chai');
const chaiHttp = require('chai-http');
const basicSetup = require('./../../helper/setup.test');

const app = require('../../../app');

const Product = require('../../../app/models/product');

const expect = chai.expect;
chai.use(chaiHttp);

describe('POST: /api/dictionary/product/add route to insert data', function () {
  basicSetup();
  it('should create and return a new product item', function () {
    let res;
    // 1) First, call the API
    return (
      chai
        .request(app)
        .post('/api/dictionary/product/add')
        .send({ name: 'test2'})
        .then((_res) => {
          res = _res;
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.keys('_id', 'dateOfCreate', 'isActive', 'name', '__v');
          // 2) then call the database
          return Product.findById(res.body._id);
        })
        // 3) then compare the API response to the database results
        .then((data) => {
          expect(res.body._id).to.equal(data.id);
          expect(res.body.__v).to.equal(data.__v);
          expect(res.body.name).to.equal(data.name);
          expect(new Date(res.body.dateOfCreate)).to.eql(data.dateOfCreate);
        })
    );
  });
});
