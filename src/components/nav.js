import React from 'react'
import logo from '../images/DriftLogo.png'

function Nav() {
  //if user is signed in display account and logout 

  return (
    <div className='NavBar'>
        <div className='ImageCard'>
          <a href='/'>
            <img src={logo}></img>
          </a>
        </div>
        <div className='LinkCard'>
            <a href='/accounts?section=create'>Create Account</a>
            <a href='/accounts?section=signin'>Signin</a>
        </div>
    </div>
    
  )
}

export default Nav