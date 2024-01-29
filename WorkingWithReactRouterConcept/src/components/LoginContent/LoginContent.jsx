import React,{ useState } from 'react'

import { Link } from 'react-router-dom';

import '../../common.css'
import './LoginContent.css'

const LoginContent = ({showReg, showForgotPwd}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    console.log('Username:', username);
    console.log('Password:', password);
    e.preventDefault();
  }

  return (
    <div className="login-container d-flex flex-column justify-content-center align-items-center">
      <div className="upper-image my-2">
        <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/1b6a4fcf677259d4a7621fb5/3408455.png" alt=""/>
      </div>
  
      <div className="form-content text-purple">   
        <h2 className="upper-text m-1">Login Now</h2>

        <form>
          <div className="username my-4">
            <input 
              type="text" 
              className="form-control p-3 my-2 text" 
              placeholder="Username" 
              id="usename" 
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password my-4">
            <input 
              type="text" 
              className="form-control p-3 my-2 text" 
              placeholder="Password" 
              id="password" 
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember-me my-2">
            <input 
              type="checkbox" 
              id="checkbox" />
            <label 
              htmlFor="checkbox"
              className="text">
                Remember me
            </label>
          </div>
          <div className="button my-4">
            <button 
              className="btn btn-color form-control text-white" 
              onClick={handleLogin}>
                Sign In
            </button>
          </div>
          <div className="bottom-text d-flex justify-content-between">
            <Link 
              to="/login-reg" 
              onClick={showReg} 
              className="have-account text">
                Don't have an account?
            </Link>
            <Link 
              to="/login-reg" 
              onClick={showForgotPwd} 
              className="forgot-password text">
                Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div> 
    );
  };

export default LoginContent

              