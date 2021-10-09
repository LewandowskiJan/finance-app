import chai from 'chai';
import chaiHttp from 'chai-http';
import { Response } from 'express';

import { basicSetup } from '../../helper/setup.test';
import { myApp } from '../../../app';
import { Category } from './../../../app/dictionary/models/category';

const expect = chai.expect;
chai.use(chaiHttp);

describe('POST: /api/dictionary/category/add route to insert data', () => {
  basicSetup();
  it('should create and return a new category item', () => {
    let response: Response | any;
    // 1) First, call the API
    return (
      chai
        .request(myApp)
        .post('/api/dictionary/category/add')
        .send({ name: 'test2', utfIcon: '&#128126;' })
        .then((_res) => {
          response = _res;
          expect(response).to.have.status(200);
          expect(response.body).to.be.a('object');
          expect(response.body).to.have.keys('_id', 'dateOfCreate', 'isActive', 'name', 'utfIcon', '__v');
          // 2) then call the database
          return Category.findById(response.body._id);
        })
        // 3) then compare the API response to the database results
        .then((data) => {
          expect(response.body._id).to.equal(data.id);
          expect(response.body.__v).to.equal(data.__v);
          expect(response.body.name).to.equal(data.name);
          expect(response.body.utfIcon).to.equal(data.utfIcon);
          expect(new Date(response.body.dateOfCreate)).to.eql(data.dateOfCreate);
        })
    );
  });

  it('should create and return a new category item', () => {
    let response: Response | any;
    // 1) First, call the API
    return chai
      .request(myApp)
      .post('/api/dictionary/category/add')
      .send({})
      .then((_res) => {
        response = _res;
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.keys('messages', 'fields');
      });
  });
});
