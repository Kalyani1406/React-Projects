import React,{ useState } from 'react'
import '../../common.css'
import'./Registration.css'
import { Link } from 'react-router-dom'

const Registration = ({showLogin}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleReg = () => {
        if(password.length < 6){
            setPasswordError('Password should be at least 6 characters long');
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        console.log(name);
        console.log(email);
        console.log(password);
    }


    return (
        <div className="reg-container d-flex flex-column justify-content-center align-items-center">
            <div className="upper-image my-2">
                <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/1b6a4fcf677259d4a7621fb5/3408455.png" alt=""/>
            </div>
            
            <div className="form-content text-purple">   
                <h2 className="upper-text my-1">Registration</h2>
                <form>
                    <div className="username my-4">
                        <input 
                            type="text" 
                            className="form-control p-3 my-2 text" 
                            placeholder="Enter your name" 
                            id="usename" 
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="useremail my-4">
                        <input 
                            type="email" 
                            className="form-control p-3 my-2 text" 
                            placeholder="Enter your email" 
                            id="usename" 
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password my-4">
                        <input 
                            type="text" 
                            className="form-control p-3 my-2 text" 
                            placeholder="Create a password" 
                            id="password" 
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="confirm-password my-4">
                        <input 
                            type="text" 
                            className="form-control p-3 my-2 text" 
                            placeholder="Confirm a password" 
                            id="password" 
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {
                        passwordError && 
                        <div className="password-error-text text-danger my-2">{passwordError}</div>
                    }
                    <div className="terms-conditions my-2">
                    <input 
                        type="checkbox" 
                        id="checkbox" />
                    <label 
                        htmlFor="checkbox"
                        className="text">
                        I accept all terms and conditions
                    </label>
                    </div>
                    <div className="button my-4">
                        <button 
                            className="btn btn-color form-control text-white" 
                            onClick = {handleReg}
                        >
                            Register Now
                        </button>
                    </div>
                    <span className="bottom-text d-flex justify-content-center align-items-center text">
                        Already have an account ? <Link to="/login-reg" onClick={showLogin}>Login now</Link>
                    </span>
                </form>
            </div>
        </div>    
  )
}

export default Registration
