// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import * as actionCreators from '../reducers/actioncreators';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import TweetContainer from '../containers/TweetContainer';

class MainContainer extends React.Component {
  componentWillMount() {
    // console.log('mounted main container');
    this.props.fetchFromApiAfterRequest();
  }
  render() {
    return (
      <div className="center-block" style={{ maxWidth: '1200px' }}>
        <div className="row col-sm-12">
          <Navbar />
        </div>
        <div className="row col-sm-12">
          <TweetContainer {...this.props} />
          <Main />
        </div>
      </div>
    );
  }
}
MainContainer.propTypes = {
  // notifyOfApiRequest: React.PropTypes.func.isRequired,
  fetchFromApiAfterRequest: React.PropTypes.func.isRequired,
};

const mapStateToProps = null;
const mapDispatchToProps: Function = function mapDispatchToPropsKappa(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
