const request = require('request');
const { expect } = require('chai');
const sinon = require('sinon');

/* eslint-disable */
describe('apiTesting /', () => {
  it('Testing correct statusCode...', (done) => {
    request('http://localhost:7865/', (error, response) => {
      expect(response.status, 200);
      done();
    });
  });
  it('Testing correct result...', (done) => {
    request('http://localhost:7865/', (error, response) => {
      expect(response.body).to.deep.equal('Welcome to the payment system');
      done();
    });
  });
  it('Testing correct log...', (done) => {
    request('http://localhost:7865/', (error, response) => {
      const consoleLog = sinon.spy(console, 'log');
      expect(consoleLog.calledWith('API available on localhost port 7865'));
      consoleLog.restore();
      done();
    });
  });
});

describe('apiTesting /cart/:ip', () => {
  it('Testing correct id type...', (done) => {
    request('http://localhost:7865/cart/1', (error, response) => {
      expect(response.status, 200);
      done();
    });
  });
  it('Testing wrong id type...', (done) => {
    request('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.status, 404);
      done();
    });
  });
  it('Testing correct result...', (done) => {
    request('http://localhost:7865/cart/1', (error, response) => {
      expect(response.body).to.deep.equal('Payment methods for cart :1');
      done();
    });
  });
});
