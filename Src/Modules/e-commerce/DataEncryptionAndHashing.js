const crypto = require('crypto-js');

class DataEncryptionAndHashing {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  encryptData(data) {
    const ciphertext = crypto.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
    return ciphertext;
  }

  decryptData(ciphertext) {
    const bytes = crypto.AES.decrypt(ciphertext, this.secretKey);
    const decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
    return decryptedData;
  }

  hashData(data) {
    return crypto.SHA256(JSON.stringify(data)).toString();
  }
}

module.exports = DataEncryptionAndHashing;
