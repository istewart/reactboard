const express = require('express');
const apiGet = require('./twitterApiGet');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/search', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  const promisedData = apiGet(req.query.q);
  console.log(promisedData);

  promisedData.then((tweets) => {
    // console.log('STATUS OBJ EXAMPLE', tweets.statuses[0]);
    const tweetsDistilled = tweets.statuses
      .map(statusObj => ({
        id: statusObj.id,
        text: statusObj.text,
        name: statusObj.user.name,
        handle: statusObj.user.screen_name,
        src: statusObj.user.profile_image_url,
      }));

    res.send(JSON.stringify(tweetsDistilled));
  }).catch(error => console.log('ERROR', error));
});

app.listen(2500, () => console.log('Backend server listening on port 2500...'));
