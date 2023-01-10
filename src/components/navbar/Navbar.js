import React from 'react';
import {useNavigate} from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import './Navbar.scss';
import {AiOutlineLogout, AiOutlineMessage} from 'react-icons/ai';
import {AiOutlineHome} from 'react-icons/ai';
import LoadingBar from 'react-top-loading-bar'
import { useRef, useState } from 'react';


const Navbar = () => {
  const navigate = useNavigate();
  const loadingRef = useRef();

  const [loading, setLoading] = useState(false);
  function toggleLoadingBar(){
    if(loading){
      setLoading(false);
      loadingRef.current.complete();
    }else{
      setLoading(true);
      loadingRef.current.continuousStart();
    }
  }

  return (
    <div className="Navbar">
      <LoadingBar color='#5f9fff' ref={loadingRef} />
      <div className="container">
          <h2 className= "banner hover-link" onClick={() => navigate('/')}>WeSwipe</h2>
          <div className="right-side">
            <div className="profile hover-link" onClick={() => navigate('/')}>
              <AiOutlineHome style={{fontSize: "30px" , color: "rgb(14, 14, 14)"}}/>
            </div>
            <div className="profile hover-link" onClick={() => navigate('/chat')}>
              <AiOutlineMessage style={{fontSize: "30px" , color: "rgb(12, 14, 14)"}}/>
            </div>
            <div className="profile hover-link" onClick={() => navigate('/profile/aaa')}>
              <Avatar />
            </div>
            <div className="profile hover-link" onClick={toggleLoadingBar}>
              <AiOutlineLogout style={{fontSize: "30px" , color: "darkred"}}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar;