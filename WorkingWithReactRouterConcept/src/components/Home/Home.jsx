import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-purple">Better Solutions For Your Business</h1>
          <p className="text home-text">We are team of talented designers making websites with Bootstrap</p>
        </div>
        <div class="col-lg-6">
          <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" className="img-fluid" alt="home"/>
        </div>
      </div>
    </div>
  )
}

export default Home
