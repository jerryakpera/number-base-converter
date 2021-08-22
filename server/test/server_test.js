/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

const { expect } = require('chai');
const request = require('request');

const _config = require('../config');

const apiBaseURL = `http://localhost:3030${_config.baseURL}`;

describe('Test route', () => {
  it('should return 200 status code', (done) => {
    request(`${apiBaseURL}/test`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);

      done();
    });
  });

  it('should return Up and running!', (done) => {
    request(`${apiBaseURL}/test`, (error, response, body) => {
      expect(body).to.equal('Up and running!');

      done();
    });
  });

  after(() => {
    console.log('API Test route responding');
  });
});

describe('/decimal', () => {
  const decimalURL = `${apiBaseURL}/decimal`;

  it('/octal, /binary and /hex routes should not return 404 code', (done) => {
    request(`${decimalURL}/binary/45`, (error, response, body) => {
      expect(response.statusCode).to.not.equal(404);
    });

    request(`${decimalURL}/octal/80`, (error, response, body) => {
      expect(response.statusCode).to.not.equal(404);
    });

    request(`${decimalURL}/hex/44`, (error, response, body) => {
      expect(response.statusCode).to.not.equal(404);

      done();
    });
  });

  it('should return 400 if number is not a valid decimal', (done) => {
    request(`${decimalURL}/binary/4s5`, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.equal('Enter a valid decimal number');
    });

    request(`${decimalURL}/octal/12-12`, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.equal('Enter a valid decimal number');
    });

    request(`${decimalURL}/hex/4sd`, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.equal('Enter a valid decimal number');

      done();
    });
  });

  it('/binary/:number should return 200 and conversion object', (done) => {
    request(`${decimalURL}/binary/45`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.include('conversion');

      done();
    });
  });

  it('/octal/:number should return 200 and conversion object', (done) => {
    request(`${decimalURL}/octal/88`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.include('conversion');

      done();
    });
  });

  it('/hex/:number should return 200 and conversion object', (done) => {
    request(`${decimalURL}/hex/88`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.include('conversion');

      done();
    });
  });

  after(() => {
    console.log('Decimal conversion route tests completed');
  });
});
