import React, {useState} from 'react';
import './Signup.scss';
import { axiosClient } from "../../utils/axiosClient";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
      e.preventDefault();
      try {
          await axiosClient.post("/auth/signup", {
              name,
              email,
              password,
          });
          e.target.reset();
          alert("Account created successfully!😊");
      } catch (error) {
          console.log(error);
      }
  }

  return (
      <div className="signup">
        <div className="signup-box">
            <h2 className="heading">Signup</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="name" className="name" id="name" required onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input type="email" className="email" id="email" required onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" className="password" id="password" required  onChange={(e) => setPassword(e.target.value)}/>

                <input type="submit" className="auth_button" value="Sign up"/>

                <div className="login_link">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </form>
        </div>
      </div>
  )
}

export default Signup;