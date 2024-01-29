import React from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import './common.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const headerMenuItems = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Contact', to: '/contact' },
  { text: 'Testimonials', to: '/testimonials' }
];

const headerButtons = [
  { text: 'Login', className: 'btn btn-light text-purple mx-5', to: '/login-reg' },
  { text: 'Get Started', className: 'btn btn-color text-white', to: '/getstarted' }
];

const footerItems = [{
  title: 'Resource',
  links: [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
  ]
},
{
  title: 'Follow Us',
  links: [
    { text: 'Testimonials', to: '/testimonials' },
    { text: 'Discord', to: '/discord' },
  ]
},
{
  title: 'Legal Information',
  links: [
    { text: 'Privacy Policy', to: '/privacy' },
    { text: 'Terms & Conditions', to: '/terms' },
  ]
}];

const pagesWithoutHeaderFooter = ['/login-reg', '/getstarted', '/registration'];

const shouldDisplayHeaderFooter = (pathname) => !pagesWithoutHeaderFooter.includes(pathname);

const Layout = () => {
  const location = useLocation();
  const shouldDisplay = shouldDisplayHeaderFooter(location.pathname);

 
  return (
    <>
      {shouldDisplay && <Header headerItems={headerMenuItems} buttons={headerButtons} />}
      <Outlet/>
      {shouldDisplay && <Footer footerItems={footerItems} />}
    </>
  )
}

export default Layout
