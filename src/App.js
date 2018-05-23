import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SnackForm from './components/SnackForm/SnackForm';

const mapReduxStateToProps = reduxState => ({reduxState});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Snack-Shack</h1>
        <SnackForm />
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);