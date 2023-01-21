import React from 'react';
import {useNavigate} from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import './Navbar.scss';
import {AiOutlineHome} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {BsChatLeftDots} from 'react-icons/bs';

const Navbar = () => {
  const navigate = useNavigate();
  const myProfile = useSelector(state => state.appConfigReducer.myProfile);

  return (
    <div className="Navbar">
      <div className="container">
          <h2 className= "banner hover-link" onClick={() => navigate('/')}>WeSwipe</h2>
          <div className="right-side">
            <div className="profile hover-link" onClick={() => navigate('/')}>
              <AiOutlineHome style={{fontSize: "28px"}}/>
            </div>
            <div className="profile hover-link" onClick={() => navigate('/chat')}>
              <BsChatLeftDots style={{fontSize: "23px"}}/>
            </div>
            <div className="profile hover-link" onClick={() => navigate(`/profile/${myProfile?._id}`)}>
              <Avatar src={myProfile?.avatar?.url}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar;

//shuruat mai myProfile ise milega nhi kyuki myProfile appConfigReducer sai aa rhi hai jo time lai sakti hai 
//aur yeah ek asynchronous function bhi hai tho shrurat mai ise ek empty object milega tho islie ? lagaya hai to handle null