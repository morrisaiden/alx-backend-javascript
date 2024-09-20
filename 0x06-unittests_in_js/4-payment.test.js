const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('', () => {
  it('checking if numbers round with spies', () => {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);

    sendPaymentRequestToApi(100, 20);
    stub.withArgs('SUM', 100, 20).returns(120);
    expect(spy.calledOnce).to.be.true;
    expect(console.log('The total is: 120')).to.be.all;

    spy.restore();
    stub.restore();
  });
});