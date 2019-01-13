import React from 'react';
import './style.css';

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          onClick={props.handleClick}
          alt={props.name}
          src={props.image}
          name={props.name}
        />
      </div>
    </div>
  );
}

export default FriendCard;
