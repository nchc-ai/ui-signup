import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import AuthPage from './containers/AuthPage';
import { metaObj } from './constants/models';
import bindActionCreatorHoc from './libraries/bindActionCreatorHoc';

class App extends Component {
  render = () => (
    <div id="outer-container" style={{ height: '100%' }}>
      <DocumentMeta {...metaObj} />
      <AuthPage />
    </div>
  )
}

export default App;
