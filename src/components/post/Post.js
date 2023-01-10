import React from 'react';
import './Post.scss';
import Avatar from '../avatar/Avatar';
import postpic1 from '../../assets/postpic1.jpg'
import {AiOutlineHeart} from 'react-icons/ai';

const Post = () => {
  return (
    <div className="Post">
        <div className="heading">
            <Avatar/>
            <h4>Satyam Arya</h4>
        </div>

        <div className="content">
          <img src={postpic1} alt="" />
        </div>

        <div className="postReact">
            <div className="like">
              <AiOutlineHeart className='icon'/>
              <h4>4 likes</h4>
            </div>
            <p className="caption">This is a caption</p>
            <h6 className="time-ago">4 hours ago</h6>
        </div> 
    </div>
  )
}

export default Post; 