import React from 'react'
import '../../common.css'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom'

const fontawsomeIcons = [faFacebook, faTwitter, faInstagram, faLinkedinIn];

const Footer = ({footerItems}) => {

  return (
    <footer>
      <div className="container-fluid bg-light-purple p-2">
        <div className="footer-container row align-items-center">
          <div className="col-md-6 d-flex justify-content-evenly text-purple">
            {
              footerItems.map((category, index) => (
                <div key={index} className="d-flex flex-column justify-content-center align-items-center">
                  <h2 className="justify-content-start mb-3">{category.title}</h2>
                  <ul className="list-unstyled">
                    {
                      category.links.map((link, subIndex) => (
                        <li key={subIndex} className="mb-2">
                          <NavLink
                            to={link.to}
                            className="text-white subIndexLinks"
                            onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                          >
                            {link.text}
                          </NavLink>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>

          <div className="col-md-6 mb-2 d-flex flex-column align-items-center">
            <h2 className="text-purple mb-2">Lets Stay Connected</h2>
            <p className=" text-white">Enter your email to unlock 10% OFF</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email"/>
              <button className="btn btn-color text-white" type="button">Submit</button>
            </div>
           
            <hr/>
            
            <h2 className="text-purple mb-4 text-bold">Follow us</h2>
            <div className="social-icons d-flex">
              {
                fontawsomeIcons.map((fontawsomeIcon, index) => (
                  <FontAwesomeIcon key={index} icon={fontawsomeIcon} style={{ color: "white" }} className="mx-4 icons" />
                ))
              }
            </div>   
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
