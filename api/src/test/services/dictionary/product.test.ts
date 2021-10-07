import chai from 'chai';
import chaiHttp from 'chai-http';
import { Response } from 'express';

import { basicSetup } from '../../helper/setup.test';
import { myApp } from '../../../app';

import { Product } from './../../../app/dictionary/models/product';

const expect = chai.expect;
chai.use(chaiHttp);

describe('POST: /api/dictionary/product/add route to insert data', () => {
  basicSetup();
  it('should create and return a new product item', () => {
    let response: Response | any;
    // 1) First, call the API
    return (
      chai
        .request(myApp)
        .post('/api/dictionary/product/add')
        .send({ name: 'test2' })
        .then((_res) => {
          response = _res;
          expect(response).to.have.status(200);
          expect(response.body).to.be.a('object');
          expect(response.body).to.have.keys('_id', 'dateOfCreate', 'isActive', 'name', '__v');
          // 2) then call the database
          return Product.findById(response.body._id);
        })
        // 3) then compare the API response to the database results
        .then((data) => {
          expect(response.body._id).to.equal(data.id);
          expect(response.body.__v).to.equal(data.__v);
          expect(response.body.name).to.equal(data.name);
          expect(new Date(response.body.dateOfCreate)).to.eql(data.dateOfCreate);
        })
    );
  });
});
