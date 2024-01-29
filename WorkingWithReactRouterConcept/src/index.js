import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import GetstartedBtn from './components/GetstartedBtn/GetstartedBtn';
import Registration from './components/Registration/Registration';
import LoginRegPage from './components/LoginRegPage/LoginRegPage';



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/testimonials' element={<Testimonials/>}/>
    <Route path='/login-reg' element={<LoginRegPage/>} />
    <Route path='/getstarted' element={<GetstartedBtn/>} />
    <Route path='/registration' element={<Registration/>} />     
  </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

