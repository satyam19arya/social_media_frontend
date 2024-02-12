import React, { useState }  from 'react';
import './Login.scss';
import { Link, useNavigate} from 'react-router-dom';
import {axiosClient} from '../../utils/axiosClient';
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e){
      e.preventDefault();
      try{
        const response = await axiosClient.post('/auth/login', {
          email,
          password
        });
        setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
        navigate('/');
      }catch(error){
        console.log(error);
      }
  }

  return (
    <div className="login">
        <div className="login-box">
            <h2 className="heading">Aman</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" className="email" id="email" required onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" className="password" id="password" required onChange={(e) => setPassword(e.target.value)}/>

                <input type="submit" className="auth_button" value="Log In"/>

                <div className="signup_link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login;