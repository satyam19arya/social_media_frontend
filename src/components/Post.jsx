import React from 'react';
import './Post.scss';
import Avatar from './Avatar';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router";

const Post = ({post, onLike}) => {   
  const navigate = useNavigate();

  async function handlePostLiked() {
    onLike(post._id);
  }

  return (
    <div className="Post p-1">
      <div className='bg-white border rounded-sm px-2'>
        <div className="heading" onClick={() => navigate(`/profile/${post.owner._id}`)}>
          <Avatar src={post.owner?.avatar?.url}/>
          <h4>{post.owner?.name}</h4>
        </div>

        <div className="content">
          <img src={post?.image?.url} alt="" />
        </div>

        <div className="postReact">
            <div className="like" onClick={handlePostLiked}>
            {post.isLiked ? <AiFillHeart style={{color: 'red'}} className="icon" /> : <AiOutlineHeart className="icon" />}
            <h4>{`${post.likesCount} likes`}</h4>
            </div>
            <p className="caption">{post.caption}</p>
            <h6 className="time-ago">{post?.timeAgo}</h6>
        </div> 
      </div>
    </div>
  )
}

export default Post;