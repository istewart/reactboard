// @flow
const Twitter = require('twitter');
const SECRETS = require('../../secrets.js');

const client = new Twitter({
  consumer_key: SECRETS.TWITTER_CONSUMER_KEY,
  consumer_secret: SECRETS.TWITTER_CONSUMER_SECRET,
  access_token_key: SECRETS.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: SECRETS.TWITTER_ACCESS_TOKEN_SECRET,
});

console.log('SECRET', SECRETS.TWITTER_CONSUMER_KEY);

const stream = client.stream('statuses/filter', { track: 'javascript' });
stream.on('data', (event) => {
  console.log(event && event.text);
});

stream.on('error', error => console.log(error));
