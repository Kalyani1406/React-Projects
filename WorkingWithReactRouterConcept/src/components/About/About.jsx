import React from 'react'
import './About.css'

import aboutImg from '../../images/about.jpg'

const About = () => {
  return (
   <div className="container-fluid">
    <div className="row justify-content-between align-items-center m-3 p-3">
      <div className="col-md-6 d-flex flex-column align-items-center">
        <h1 className="text-purple">What We Do</h1>
        <hr />
        <h2 className="text home-text"> We bring your Idea to Reality </h2>
        <p className="text home-text p-4">
          At NK Groups, we specialize in crafting dynamic and responsive websites 
          that not only meet but exceed the expectations of our clients. 
          As a leading web development company, our team is dedicated to delivering 
          cutting-edge solutions tailored to your unique needs. Our services are :
        </p>
        <ul className="text p-4 list-unstyled customBox home-text">
          <li>Custom Website Development</li>
          <li>Responsive Design</li>
          <li>E-commerce Solutions</li>
          <li>Content Management Systems (CMS)</li>
          <li>Web Application Development</li>
          <li>SEO Optimization</li>
          <li>Maintenance and Support</li>
        </ul>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <img src={aboutImg} alt="about" className="img-fluid"/>
      </div>
    </div>
   </div>
  )
}

export default About
