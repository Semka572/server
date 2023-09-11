const keys = require("../config/keys");

var domain = keys.mailgunDomain;
var mailgun = require("mailgun-js")({
  apiKey: keys.mailgunKey,
  domain: domain
});

class MailgunMailer {
  constructor({ subject, recipients }, content) {
    this.data = {
      from: "no-reply@semen.kurta@gmail.com",
      to: this.formatAddresses(recipients),
      subject: subject,
      html: content
    };
  }
  
  formatAdresses(recipients) {
    return recipients.map(({ email }) => email).join(",");
  }

  async send() {
    const resp = await mailgun.messages().send(this.data);
    return resp;
  }
}

module.exports = MailgunMailer;