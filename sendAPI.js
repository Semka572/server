
 var api_key = '5be24dc0be4e37103f8f900702022af0-413e373c-6428adf8';
 var domain = 'kiritych.cloudns.ph';
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