const express = require('express');
const apiGet = require('./twitterApiGet');

const app = express()

app.get('/search', function (req, res) {
  const tweetsDistilled = apiGet(req.query.q);
  console.log(tweetsDistilled);
  tweetsDistilled.then(
    (tweets) => {
      const tweetsDistilled = tweets.statuses
        .map(statusObj => ({ id: statusObj.id, src: statusObj.user.profile_image_url }));
      console.log('VICTYORY ISH', tweetsDistilled);
      // callback(tweetsDistilled);
      res.send(tweetsDistilled); // rather, ship tweetsDistalled -> store
    }).catch(error => console.log('ERROR', error));
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})