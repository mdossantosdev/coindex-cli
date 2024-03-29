const axios = require('axios');
const colors = require('colors');
const { handleAPIError } = require('../utils/handleError');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceData(coinOption, curOption) {
    try {
      // Formatter for currency
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOption
      });

      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
      );

      let output = '';

      res.data.forEach(coin => {
        output += `Coin: ${coin.symbol.cyan.bold} | Price: ${formatter.format(coin.price).green} | ATH: ${formatter.format(coin.high).yellow}\n`;
      })

      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
};

module.exports = CryptoAPI;
