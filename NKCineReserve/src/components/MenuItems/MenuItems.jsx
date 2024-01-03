import React from 'react'
import './MenuItems.css'

const MenuItems = ({menuitems}) => {
  return (
    <div className='menuContainer'>
        <ul className='d-flex gap-5 align-items-center justify-content-center list-unstyled text-white fw-bold'>
            {
                menuitems.map((menuitem, index) => (
                    <li  key={index}>
                        {menuitem}
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default MenuItems
