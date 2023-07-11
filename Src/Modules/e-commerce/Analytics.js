const axios = require('axios');

class Analytics {
  constructor(api, analyticsUrl) {
    this.api = api;
    this.analyticsUrl = analyticsUrl;
  }

  async trackEvent(eventName, data) {
    const payload = {
      eventName,
      data,
      timestamp: Date.now(),
    };

    const response = await axios.post(this.analyticsUrl, payload);
    return response.data;
  }
}

module.exports = Analytics;
