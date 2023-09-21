const keys = require("../config/keys");
var mailgun = require("mailgun-js")({
  apiKey: keys.mailgunKey ,
  domain: keys.mailgunDomain
});

class MailgunMailer {

  formatAddresses(recipients) {
    return recipients.map(({ email }) => email).join(",");
  }


  constructor({ subject, recipients }, content) {
    this.data = {
      from: 'semen.kurta@gmail.com' ,
      to:  this.formatAddresses(recipients),
      subject: subject,
      html: content
    };
  }
  


  async send() {
    const resp = await mailgun.messages().send(this.data);
    return resp;
  }
}

module.exports = MailgunMailer;