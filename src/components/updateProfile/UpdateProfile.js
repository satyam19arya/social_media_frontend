import React from 'react';
import './UpdateProfile.scss'
import userImg from '../../components/avatar/user.png'

const UpdateProfile = () => {
  return (
    <div className="UpdateProfile">
        <div className="container">
            <div className="left-part">
                <img className="user-img" src={userImg} alt="" />
            </div>
            <div className="right-part">
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Your Bio" />
                    <input type="submit" className="update"/>
                </form>

                <div className="delete">
                    <button className="delete-account">Delete Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateProfile;