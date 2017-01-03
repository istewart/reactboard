// @ flow
import React from 'react';
import WordCloudGenerator from 'wordcloud';
import { countBy } from 'lodash';

class Wordcloud extends React.Component {
  componentDidUpdate() {
    if (!this.props.state[0]) {
      return;
    }
    console.log('STATE IN PROPS', this.props.state[0]);
    const tweetsArr = this.props.state[0];
    const tweetsConcat = tweetsArr.reduce((accum, tweetObj) => accum + ' ' + tweetObj.text);
    const tweetMap = countBy(tweetsConcat.split(' '));
    const tweetPairs = Object.entries(tweetMap).sort((a, b) => b[1] - a[1]).slice(0, 80);

    console.log(tweetPairs);

    const options = {
      list: tweetPairs,
      // drawOutOfBound: true,
      gridSize: Math.round(16 * document.getElementById('wordcloud').width / 1024),
      weightFactor: function (size) {
        return 5 * Math.pow(size, 1.3) * document.getElementById('wordcloud').width / 1024;
      },
      fontFamily: 'Times, serif',
      // color: function (word, weight) {
      //   return (weight === 12) ? '#f02222' : '#c09292';
      // },
      rotateRatio: 0.5,
      rotationSteps: 2,
      minSize: 8,
      // backgroundColor: '#ffe0e0',
    }

    WordCloudGenerator(document.getElementById('wordcloud'), options);
    // WordCloudGenerator(document.getElementById('wordcloud'), { list: [['foo', 12], ['bar', 6]] });
  }
  render() {
    return (
      <div className="row well">
        <canvas id="wordcloud" style={{ width: '100%', height: 'auto' }} />
      </div>
    );
  }
}
Wordcloud.propTypes = {
  state: React.PropTypes.array,
};
// {
//   WordCloudGenerator(document.getElementById('wordcloud'), { list: [['foo', 12], ['bar', 6]] })
// }

export default Wordcloud;
