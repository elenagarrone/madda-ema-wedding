const express = require('express');
const router = express.Router();

const api_key = process.env.API_KEY;
const domain = process.env.DOMAIN;
const recipients = process.env.RECIPIENTS;
const senderAddress = process.env.SENDER;

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
  console.log('data', data);

  mailgun.messages().send(data, {'content-type': 'text/html'}, function (error, body) {
    res.send(body);
  });
});

module.exports = router;
