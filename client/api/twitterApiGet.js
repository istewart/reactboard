const Twitter = require('twitter');
const promise = require('promise');
const SECRETS = require('../../secrets');
// const actionCreators = require('../reducers/actioncreators.js')

const client = new Twitter({
  consumer_key: SECRETS.TWITTER_CONSUMER_KEY,
  consumer_secret: SECRETS.TWITTER_CONSUMER_SECRET,
  access_token_key: SECRETS.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: SECRETS.TWITTER_ACCESS_TOKEN_SECRET,
});

const twitterApiGet = function twitterApiGetKappa(searchTarget) {
  const searchTargetQuery = searchTarget || 'node.js';
  return client.get('search/tweets', { q: searchTargetQuery, lang: 'en', count: 5 });
};

// twitterApiGet();

module.exports = twitterApiGet;
