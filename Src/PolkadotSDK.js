const { ApiPromise, WsProvider } = require('@polkadot/api');
const KeyManagement = require('./KeyManagement');
const OrderManagement = require('./OrderManagement');
const Analytics = require('./Analytics');

class PolkadotSDK {
  constructor(nodeUrl, contractAddress) {
    const wsProvider = new WsProvider(nodeUrl);
    this.api = new ApiPromise({ provider: wsProvider });

    // Wait until the API is connected and ready
    await this.api.isReady;

    this.keyManagement = new KeyManagement();
    this.orderManagement = new OrderManagement(this.api, contractAddress);
    // Initialize the rest of your modules...
  }
}

module.exports = PolkadotSDK;
