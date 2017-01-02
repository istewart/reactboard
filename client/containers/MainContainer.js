// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import * as actionCreators from '../reducers/actioncreators';
import MetricsContainer from '../containers/MetricsContainer';
import Navbar from '../components/Navbar';
import TweetContainer from '../containers/TweetContainer';

class MainContainer extends React.Component {
  constructor() {
    super();
    this.handleNavSubmit = this.handleNavSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchFromApiAfterRequest();
  }

  handleNavSubmit(event, input) {
    event.preventDefault();
    this.props.fetchFromApiAfterRequest(input);
  }

  render() {
    return (
      <div className="center-block" style={{ maxWidth: '1200px' }}>
        <div className="row col-sm-12">
          <Navbar handleNavSubmit={this.handleNavSubmit} />
        </div>
        <div className="row col-sm-12">
          <TweetContainer {...this.props} />
          <MetricsContainer {...this.props} />
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
