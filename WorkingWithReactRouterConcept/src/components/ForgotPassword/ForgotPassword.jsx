import React from 'react'

import { Link } from 'react-router-dom'

const ForgotPassword = ({showReg}) => {
  return (
    <div className="login-container d-flex flex-column justify-content-center align-items-center">
    <div className="upper-image my-2">
      <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/1b6a4fcf677259d4a7621fb5/3408455.png" alt=""/>
    </div>

    <div className="form-content text-purple">   
      <p className="upper-text text my-1">Enter the email address associated with your account and we will send you a link to reset your password</p>

      <form>
        <div className="useremail my-4">
            <input 
                type="email" 
                className="form-control p-3 my-2 text" 
                placeholder="Enter your email" 
                id="usename" 
                required
            />
        </div>
        <div className="button my-4">
            <button 
              className="btn btn-color form-control text-white">
                Continue
            </button>
          </div>

          <span className="bottom-text text justify-content-center align-items-center d-flex">
            Don't have an account?
                <Link 
                    to="/login-reg" 
                    onClick={showReg} 
                    className="have-account text">
                       Sign Up
                </Link>
          </span>
      </form>
    </div>
  </div> 
  )
}

export default ForgotPassword
