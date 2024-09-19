import sinon from 'sinon';
import { Utils } from './utils.js';
import sendPaymentRequestToApi from './3-payment.js';

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with SUM', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledWith(spy, 'SUM', 100, 20);

        spy.restore();
    });
});
