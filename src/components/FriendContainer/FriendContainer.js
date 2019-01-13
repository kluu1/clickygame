import React, { Component } from 'react';
import FriendCard from '../FriendCard/FriendCard';
import friends from '../../friends.json';
import shuffle from 'shuffle-array';

class FriendContainer extends Component {
  // Set initial state
  state = {
    friends,
    score: 1,
    selected: []
  };

  // Handle for when friend is clicked
  handleClick = event => {
    const name = event.target.name;

    // Check if friend is already in 'selected' array
    if (this.state.selected.indexOf(name) === -1) {
      // If not, push friend into 'selected' array and update score
      this.setState({ selected: [...this.state.selected, name] });
      this.updateScore();
      this.shuffleFriends();
      document.getElementById('guess').innerHTML = 'You guessed correctly!';
    } else if (this.state.selected.length === 12) {
      this.winGame();
    } else {
      this.endGame();
    }
  };

  // Function to update score
  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
    this.props.updateCurrentScore(this.state.score);
  };

  // Function to shuffle friends
  shuffleFriends = () => {
    this.setState({ friends: shuffle(this.state.friends) });
  };

  // Function to end the game
  endGame = () => {
    document.getElementById('guess').innerHTML = 'GAME OVER';
    this.resetGame();
  };

  // Function for when player wins
  winGame = () => {
    document.getElementById('guess').innerHTML = 'YOU WIN!';
    this.resetGame();
  };

  // Function to reset the game
  resetGame = () => {
    this.props.updateHighScore(this.state.score);
    this.setState({ score: 1, selected: [] });
    this.props.updateCurrentScore(0);
  };

  render() {
    return (
      <div className="main-container">
        {friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            endGame={this.endGame}
            handleClick={this.handleClick}
            score={this.state.score}
          />
        ))}
      </div>
    );
  }
}

export default FriendContainer;
