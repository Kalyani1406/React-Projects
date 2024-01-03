import React from 'react'
import './AuthenticationType.css'

const AuthenticationType = () => {
  const authenticationButtons = ['Login', 'Register'];
  
  return (
    <div className='authenticationWayContainer'>
       <div className='d-flex gap-3 align-items-center justify-content-evenly'>
        {
          authenticationButtons.map((selectedAuthenticationType, key) => (
            <div key={key}>
              <button className='btn text-white bg-dark'>{selectedAuthenticationType}</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default AuthenticationType
