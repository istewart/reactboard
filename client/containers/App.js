// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Navbar from '../components/Navbar';
import * as actionCreators from '../reducers/actioncreators';

const { element, shape, object } = React.PropTypes;

const App = function AppKappa(props: Object) {
  return (
    <div>
      {React.cloneElement(props.children, { apiRespData: props.router.location.query })}
    </div>
  );
};
App.propTypes = {
  children: element,
  router: shape({ location: object }),
};

const mapStateToProps = null;
const mapDispatchToProps: Function = function mapDispatchToPropsKappa(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
