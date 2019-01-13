import React, { Component } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import FriendContainer from './components/FriendContainer/FriendContainer';
import 'normalize.css';
import './App.css';

class App extends Component {
  // Set initial state
  state = {
    count: 0,
    highScore: 0
  };

  // Update current score
  updateCurrentScore = newScore => {
    this.setState({ count: newScore });
  };

  // Update high score
  updateHighScore = newHighScore => {
    if (newHighScore > this.state.highScore) {
      this.setState({ highScore: newHighScore - 1 });
    }
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.count} highScore={this.state.highScore} />
        <Header />
        <FriendContainer
          updateCurrentScore={this.updateCurrentScore}
          updateHighScore={this.updateHighScore}
        />
      </Wrapper>
    );
  }
}

export default App;
