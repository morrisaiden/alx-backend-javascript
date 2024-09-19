import { Utils } from './utils.js';

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
};

export default sendPaymentRequestToApi;
