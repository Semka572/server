const keys = require('./config/keys.js');
 var api_key = keys.mailgunKey;
 var domain = keys.mailgunDomain;
 var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  
 var data = {
   from: 'Tvaruki <me@samples.mailgun.org>',
   to: ['Semka572@gmail.com', 'semen.kurta@gmail.com'],
   subject: 'Ura',
   text: 'Peremoga bude lude 15 travnya, peremoga bude!'
 };
  
 mailgun.messages().send(data, function (error, body) {
   console.log(body);
 });