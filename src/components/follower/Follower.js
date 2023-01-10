import React from 'react';
import Avatar from '../avatar/Avatar';
import './Follower.scss';

const Follower = () => {
  return (
    <div className="Follower">
      <div className="user-info">
        <Avatar/>
        <h5 className="name">Aman kumar shama</h5>
      </div>
      <h5 className="hover-link button">Follow</h5>
    </div>
  )
}

export default Follower;