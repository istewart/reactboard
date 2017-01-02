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
    console.log(tweetsArr.map(tweetObj => countBy(tweetObj.text.split(' '))));

    WordCloudGenerator(document.getElementById('wordcloud'), { list: [['foo', 12], ['bar', 6]] });
  }
  render() {
    return (
      <div className="row well">
        <p> THIS IS Wordcloud </p>
        <canvas id="wordcloud" />
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
