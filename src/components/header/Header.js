import React from 'react'
import './Header.css'
import logo from '../../logo.svg'

export default function Header() {
   return (
      <div className='header' >
         <img src={logo} id='header-logo' />
         <h2> Welcome </h2>
      </div>
   )
}
