import React from 'react';
import './Feed.scss';
import Post from '../post/Post'
import Follower from '../follower/Follower';

const Feed = () => {
  return (
    <div className="Feed">
      <div className="container">
        <div className="left-part">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div className="right-part">
          <div className="following">
            <div className="title"><p>You are following</p></div>
            <Follower/>
            <Follower/>
            <Follower/>
            <Follower/>
          </div>
          <div className="suggestions">
            <div className="title"><p>Suggested for you</p></div>
            <Follower/>
            <Follower/>
            <Follower/>
            <Follower/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Feed;