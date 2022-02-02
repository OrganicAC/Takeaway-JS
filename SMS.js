require('dotenv').config()
const client = require('twilio')(process.env.accountSid, process.env.authToken);
process.env.accountSid
process.env.authToken
process.env.from
process.env.to 

class Text {
  constructor(accountSid, authToken, from, to) {
    this.accountSid = accountSid
    this.authToken = authToken
    this.from = from
    this.to = to
  }

  deliveryTime() {
    var minutesToAdd=60;
    var currentDate = new Date();
    var futureDate = new Date(currentDate.getTime() + minutesToAdd*60000);
    return String(futureDate).slice(16, 21)
  }

  sendSMS() {
    client.messages
  .create({
    to: this.to,
    from: this.from,
    body: `Your order will arrive around ${this.deliveryTime()}`
  })
  .then(message => console.log(message.sid));
  }
}

module.exports = Text;
