const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('', () => {
    it('checking if numbers round with spies', () => {
        const spy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(4, 3);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('SUM', 4, 3)).to.be.true;

        spy.restore();

    })
})
