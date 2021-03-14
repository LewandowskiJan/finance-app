const chai = require('chai');
const chaiHttp = require('chai-http');

const basicSetup = require('./../../helper/setup.test');
const app = require('../../../app');

const Category = require('../../../app/models/category');

const expect = chai.expect;
chai.use(chaiHttp);

describe('POST: /api/dictionary/category/add route to insert data', function () {
  basicSetup();
  it('should create and return a new category item', function () {
    let res;
    // 1) First, call the API
    return (
      chai
        .request(app)
        .post('/api/dictionary/category/add')
        .send({ name: 'test2', utfIcon: '&#128126;' })
        .then((_res) => {
          res = _res;
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.keys('_id', 'dateOfCreate', 'isActive', 'name', 'utfIcon', '__v');
          // 2) then call the database
          return Category.findById(res.body._id);
        })
        // 3) then compare the API response to the database results
        .then((data) => {
          expect(res.body._id).to.equal(data.id);
          expect(res.body.__v).to.equal(data.__v);
          expect(res.body.name).to.equal(data.name);
          expect(res.body.utfIcon).to.equal(data.utfIcon);
          expect(new Date(res.body.dateOfCreate)).to.eql(data.dateOfCreate);
        })
    );
  });
});
