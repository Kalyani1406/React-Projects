import React from 'react'

import contactUsImg from '../../images/contactUs.jpg'

const Contact = () => {
  return (
    <div className="container-fluid">
    <div className="row justify-content-between align-items-center m-3 p-3">
      <div className="col-md-6 d-flex flex-column align-items-center">
        <h1 className="text-purple">Drop Us a Line, Yo!</h1>
        <hr />      
        <div className="text home-text mb-4">
          Have something to share or just wanna say "Hi"? Drop a message below, 
          and we promise not to send a unicorn in response! 
        </div>
        <form>
          <div className="d-flex flex-column gap-4">
            <input type="text" placeholder='Name' className='p-2 btn btn-light text-start'/>
            <input type="email" placeholder='Email' className='p-2 btn btn-light text-start'/>
            <textarea  id="message" name="message" rows="4" cols="50" placeholder='Message' className='p-2 btn btn-light text-start'/>
            <button className='btn btn-color text-white'>Send Message</button>
          </div>
         
        </form> 
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <img src={contactUsImg} alt="about" className="img-fluid"/>
      </div>
    </div>
   </div>
  )
}

export default Contact
