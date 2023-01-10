import React from 'react';
import './Profile.scss';
import Post from '../../components/post/Post'
import user from '../avatar/user.png';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="Profile">
      <div className="container">
        <div className="left-part">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div className="right-part">
          <div className="profile-card">
            <div className="profile">
               <img className='user-img' src={user} alt="" />
               <h3 className="user-name">Satyam Arya</h3>
            </div>
            <div className="follower-info">
              <h4>40 Followers</h4>
              <h4>12 Following</h4>
            </div>
            <div className="update">
              <button className="button">Follow</button>
              <button className="update-button" onClick={() => navigate('/updateprofile')}>Update Profile</button>
              <button className="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Profile;