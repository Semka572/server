const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const MailgunMailer = require('../services/MailgunMailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', (req, res) => {
        const {title, subject, body, recipients} = req.body;
        
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email =>  ({ email:email.trim() })), 
            _user: req.user.id,
            dateSent: Date.now()
        });


        const mailer = new MailgunMailer(survey, surveyTemplate(survey));
        mailer.send();
    });  
};
