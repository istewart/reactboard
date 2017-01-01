// @flow
const Twitter = require('twitter');
const promise = require('promise');
const SECRETS = require('../../secrets.js');
// const actionCreators = require('../reducers/actioncreators.js')

const client = new Twitter({
  consumer_key: SECRETS.TWITTER_CONSUMER_KEY,
  consumer_secret: SECRETS.TWITTER_CONSUMER_SECRET,
  access_token_key: SECRETS.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: SECRETS.TWITTER_ACCESS_TOKEN_SECRET,
});

const apiClientGet = function apiClientGetKappa(callback = console.log) {
  client.get('search/tweets', { q: 'node.js', count: 2 }).then(
    (tweets) => {
      const tweetsDistilled = tweets.statuses
        .map(statusObj => ({ id: statusObj.id, src: statusObj.user.profile_image_url }));
      // console.log('VICTYORY ISH', tweetsDistilled);
      callback(tweetsDistilled);
      return tweetsDistilled; // rather, ship tweetsDistalled -> store
    }).catch(error => console.log('ERROR', error));
};

apiClientGet();
