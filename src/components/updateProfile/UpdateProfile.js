import React, { useEffect, useState } from 'react';
import './UpdateProfile.scss';
import img from '../avatar/user.png';
import { useSelector, useDispatch } from 'react-redux';
import { updateMyProfile } from '../../redux/slices/appConfigSlice';
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import {useNavigate} from 'react-router-dom';
import { axiosClient } from "../../utils/axiosClient";

const UpdateProfile = () => {
    const myProfile = useSelector(state => state.appConfigReducer.myProfile);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [userImg, setUserImg] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setName(myProfile?.name || '');
        setBio(myProfile?.bio || '');
        setUserImg(myProfile?.avatar?.url);
    }, [myProfile]);

    function handleImageChange(e){
        const file = e.target.files[0];  //to select only one file
        const fileReader = new FileReader(); // now we have to base64 encode that file so that we can send that file to backend
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if(fileReader.readyState === fileReader.DONE){
                setUserImg(fileReader.result)
            }
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(updateMyProfile({
            name,
            bio,
            userImg
        }))
    };

    const handleDelete = async() => {
        try {
            await axiosClient.delete('/user/delete', {
                userId: myProfile?._id
            });
        } catch (error) {
            console.log('error', error);
        } finally {
            removeItem(KEY_ACCESS_TOKEN);
            navigate('/login')
        }
    }

  return (
    <div className="UpdateProfile">
        <div className="container">
            <div className="left-part">
                <div className="input-user-img">
                    <label htmlFor="inputImg" className="labelImg">
                        <img src={userImg ? userImg : img} alt={name} />
                    </label>
                    <input className='inputImg' id="inputImg" type="file" accept="image/*" onChange={handleImageChange}/>
                </div>
            </div>
            <div className="right-part">
                <form onSubmit={handleSubmit}>
                    <input value={name} type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
                    <input value={bio} type="text" placeholder="Your Bio" onChange={(e) => setBio(e.target.value)}/>
                    <input type="submit" className="white_button" onClick={handleSubmit}/>
                </form>

                <div className="delete">
                    <button className="red_button" onClick={handleDelete}>Delete Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateProfile;