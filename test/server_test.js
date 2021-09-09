/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

const { expect } = require('chai');
const request = require('request');

const _config = require('../config');

const apiURL = `http://localhost:3030${_config.apiURL}/convert`;

describe('Test route', () => {
  it('should return 200 status code', (done) => {
    request(
      `http://localhost:3030${_config.apiURL}/test`,
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);

        done();
      }
    );
  });

  it('should return Up and running!', (done) => {
    request(
      `http://localhost:3030${_config.apiURL}/test`,
      (error, response, body) => {
        expect(body).to.equal('Up and running!');

        done();
      }
    );
  });

  after(() => {
    console.log('API Test route responding');
  });
});

describe('/decimal', () => {
  const decimalURL = `${apiURL}/decimal`;

  it('/to-octal, /to-binary and /to-hex routes should not return 404 code', (done) => {
    request(`${decimalURL}/to-binary/45`, (error, response, body) => {
      expect(response.statusCode).to.not.equal(404);
    });

    request(`${decimalURL}/to-octal/80`, (error, response, body) => {
      expect(response.statusCode).to.not.equal(404);
    });

    request(`${decimalURL}/to-hex/44`, (error, response, body) => {
      expect(response.statusCode).to.not.equal(404);

      done();
    });
  });

  it('should return 400 if number is not a valid decimal', (done) => {
    request(`${decimalURL}/to-binary/4s5`, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.equal('Enter a valid decimal number');
    });

    request(`${decimalURL}/to-octal/12-12`, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.equal('Enter a valid decimal number');
    });

    request(`${decimalURL}/to-hex/4sd`, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.equal('Enter a valid decimal number');

      done();
    });
  });

  it('/binary/:number should return 200 and conversion object', (done) => {
    request(`${decimalURL}/to-binary/45`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.include('conversion');

      done();
    });
  });

  it('/octal/:number should return 200 and conversion object', (done) => {
    request(`${decimalURL}/to-octal/88`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.include('conversion');

      done();
    });
  });

  it('/hex/:number should return 200 and conversion object', (done) => {
    request(`${decimalURL}/to-hex/88`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.include('conversion');

      done();
    });
  });

  after(() => {
    console.log('Decimal conversion route tests completed');
  });
});

describe('/binary', () => {
  const binaryURL = `${apiURL}/binary`;

  it('/to-decimal routes should not return 404 code', (done) => {
    request(`${binaryURL}/to-decimal/1101`, (error, response, body) => {
      expect(response.statusCode).to.not.equal(404);
      done();
    });

    request(`${binaryURL}/to-octal/80`, (error, response, body) => {
      expect(response.statusCode).to.not.equal(404);
    });

    // request(`${binaryURL}/to-hex/44`, (error, response, body) => {
    //   expect(response.statusCode).to.not.equal(404);
    // });
  });

  it('should return 400 if number is not a valid binary number', (done) => {
    request(`${binaryURL}/to-decimal/110210`, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.equal('Enter a valid binary number');
      done();
    });

    request(`${binaryURL}/to-octal/12-12`, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(response.body).to.equal('Enter a valid binary number');
    });

    // request(`${binaryURL}/to-hex/4sd`, (error, response, body) => {
    //   expect(response.statusCode).to.equal(400);
    //   expect(response.body).to.equal('Enter a valid decimal number');

    // });
  });

  it('/to-decimal/:number should return 200 and conversion object', (done) => {
    request(`${binaryURL}/to-decimal/101011`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.include('conversion');

      done();
    });
  });

  it('/octal/:number should return 200 and conversion object', (done) => {
    request(`${binaryURL}/to-octal/10010`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.include('conversion');

      done();
    });
  });

  // it('/hex/:number should return 200 and conversion object', (done) => {
  //   request(`${binaryURL}/to-hex/88`, (error, response, body) => {
  //     expect(response.statusCode).to.equal(200);
  //     expect(response.body).to.deep.include('conversion');

  //     done();
  //   });
  // });

  after(() => {
    console.log('Binary conversion route tests completed');
  });
});
