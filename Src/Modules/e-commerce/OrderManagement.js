class OrderManagement {
    constructor(api) {
      this.api = api;
    }
  
    async createOrder(orderData, keyPair) {
      // Create a transaction to call the createOrder function of your smart contract
      const tx = this.api.tx.contracts.call(contractAddress, value, gasLimit, data);
  
      // Sign and send the transaction
      const hash = await tx.signAndSend(keyPair);
  
      return hash.toHex();
    }
  
    // Implement the rest of the methods in a similar way...
  }
  
  module.exports = OrderManagement;
  