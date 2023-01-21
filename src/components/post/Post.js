import React from 'react';
import './Post.scss';
import Avatar from '../avatar/Avatar';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { likeAndUnlikePost } from "../../redux/slices/postsSlice";

const Post = ({post}) => {   
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handlePostLiked() {
    dispatch(likeAndUnlikePost({
        postId: post._id
    }))
}

  return (
    <div className="Post">
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
  )
}

export default Post; 