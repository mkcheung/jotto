import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import { getSecretWord } from './actions';

class App extends Component {
  render() {
    return (
      <div data-test='component-app' className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success}/>
        <GuessedWords guessedWords={this.props.guessedWords}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps, { getSecretWord })(App);
