let config = {};
try {
  config = require('./secrets');
} catch (ex) {
  handleErr(ex);
}

const express = require('express');
const router = express.Router();

const api_key = process.env.API_KEY || config.API_KEY;
const domain = process.env.DOMAIN || config.DOMAIN;
const recipients = process.env.RECIPIENTS || config.RECIPIENTS;
const senderAddress = process.env.SENDER || config.SENDER;

const mailgun = require('mailgun-js')({
  apiKey: api_key,
  domain: domain,
  host: 'api.eu.mailgun.net'});

const data = {
  from: 'Maddatimo website<' + senderAddress + '>',
  to: recipients,
  subject: 'RSVP matrimonio',
  text: 'Testing some Mailgun awesomness!'
};

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Api works');
});

router.post('/post', (req, res) => {
  req.setTimeout(0);
  data.text = req.body.body;

  mailgun.messages().send(data, {'content-type': 'text/html'}, function (error, body) {
    res.send(body);
  });
});

module.exports = router;
