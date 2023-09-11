const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-but-it-is-not-given-yet'});

mg.messages.create('sandbox123.mailgun.org', {
	from: "Excited User <mailgun@sandbox123.mailgun.org>",
	to: ["semka572@gmail.com"],
	subject: "Hello",
	text: "Test",
	html: "<h1>Test</h1>"
})
.then(msg => console.log(msg)) 
.catch(err => console.log(err)); 