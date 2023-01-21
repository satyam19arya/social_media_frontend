import React, { useState } from 'react';
import './CreatePost.scss';
import Avatar from '../avatar/Avatar';
import {BsCardImage} from 'react-icons/bs';
import {useDispatch, useSelector} from 'react-redux';
import { axiosClient } from "../../utils/axiosClient";
import { getUserProfile } from "../../redux/slices/postsSlice";


const CreatePost = () => {
  const [postImg, setPostImg] = useState('');
  const [caption, setCaption] = useState('')
  const dispatch = useDispatch();
  const myProfile = useSelector(state => state.appConfigReducer.myProfile);


  function handleImageChange(e){
    const file = e.target.files[0];  //to select only one file
    const fileReader = new FileReader(); // now we have to base64 encode that file so that we can send that file to backend
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
        if(fileReader.readyState === fileReader.DONE){
            setPostImg(fileReader.result)
        }
    }
  }

  const hanldePostSubmit = async() => {
    try {
        await axiosClient.post('/posts', {
            caption,
            postImg
        });
        dispatch(getUserProfile({
            userId: myProfile?._id
        }));
    } catch (error) {
        console.log('error', error);
    } finally {
        setCaption('');
        setPostImg('');
    }
}

  return (
    <div className='CreatePost'>
      <div className='left-part'>
        <Avatar src={myProfile?.avatar?.url}/>
      </div>

      <div className='right-part'>
        <input value={caption} type='text' className='captionInput' placeholder='whats on your mind?' onChange = {(e) => setCaption(e.target.value)}/>
        {postImg && <div className='img-container'>
          <img className='post-img' src={postImg} alt="post-img" />
        </div>}

        <div className='bottom-part'>
          <div className='input-post-img'>
            <label htmlFor="inputImg" className="labelImg">
                <BsCardImage/>
            </label>
            <input className='inputImg' id="inputImg" type="file" accept="image/*" onChange={handleImageChange}/>
          </div>
            <button className='blue_button' onClick={hanldePostSubmit}>Post</button>
        </div>
        
      </div>
    </div>
  )
}

export default CreatePost;