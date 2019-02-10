import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Auth from '../actions/Auth';

export default function bindActionCreatorHoc(WrappedComponent) {
  class Wrapper extends React.Component {
    render = () => (<WrappedComponent {...this.props} />);
  }

  const mapDispatchToProps = dispatch => ({
    authAction: bindActionCreators(Auth, dispatch)
  });
  return connect(null, mapDispatchToProps)(Wrapper);
}
