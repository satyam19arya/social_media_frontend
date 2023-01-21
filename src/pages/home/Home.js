import React, { useEffect } from "react";
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import {Outlet} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMyInfo } from "../../redux/slices/appConfigSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyInfo());
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="outlet" style={{marginTop: "60px"}}>
        <Outlet />
      </div>
    </>
  )
}

export default Home;