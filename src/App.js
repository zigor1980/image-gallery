import React, { Component } from 'react';
import imageList from './images'
import CellList from './components/CellList/CellList'
import './App.css';

class App extends Component {
  render() {
    return (
        <CellList imageList = {imageList} />
    );
  }
}

export default App;
