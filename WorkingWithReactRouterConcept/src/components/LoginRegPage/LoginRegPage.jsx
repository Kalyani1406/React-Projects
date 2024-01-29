import React, {useState } from 'react'
import '../../common.css'
import './LoginRegPage.css'

import LoginContent from '../LoginContent/LoginContent'
import Registration from '../Registration/Registration';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

const LoginRegPage = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [forgotPassword, setForgotPassword] = useState(false);

    const showReg = () => {
        setIsLogin(false);
        setForgotPassword(false);
    }

    const showLogin = () => {
        setIsLogin(true);
        setForgotPassword(false);
    }

    const showForgotpasswordLinkHandler = () => {
        setIsLogin(false);
        setForgotPassword(true);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img src="https://st3.depositphotos.com/3898909/14476/v/600/depositphotos_144769583-stock-illustration-business-man-working-on-computer.jpg" alt="" />    
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    {
                        isLogin && !forgotPassword && <LoginContent showReg={showReg} showForgotPwd={showForgotpasswordLinkHandler}/>
                    }
                    {
                        !isLogin && !forgotPassword &&  <Registration showLogin={showLogin}/>
                    }
                    {
                        !isLogin && forgotPassword && <ForgotPassword showReg={showReg}/>
                    }
                </div>
            </div>
        </div>
        )
    }

export default LoginRegPage
