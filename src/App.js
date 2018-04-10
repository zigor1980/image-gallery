import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CellList } from './components/CellList/CellList'
import './App.css';

const stateToProps = state => ({
    route: state.route,
});

class App extends Component {
  render() {
    return (
        <CellList />
    );
  }
}

export default connect(stateToProps)(App);
