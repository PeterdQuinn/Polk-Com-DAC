const PolkadotSDK = require('./PolkadotSDK');

module.exports = PolkadotSDK;
 
const PolkadotSDK = require('your-package-name');
const sdk = new PolkadotSDK('wss://polkadot.api.onfinality.io/public-ws');

const keyPair = sdk.keyManagement.createPair('//Alice');

const orderData = { /* ... */ };
const orderHash = await sdk.orderManagement.createOrder(orderData, keyPair);

const paymentData = { /* ... */ };
const paymentHash = await sdk.paymentProcessing.processPayment(paymentData, keyPair);
