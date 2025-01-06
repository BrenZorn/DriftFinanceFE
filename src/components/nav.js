import React from 'react'
import logo from '../images/DriftLogo.png'

const AuthUserDisplay = ()=>{
  return <div><a href='/accounts/account'>Account</a></div>
}

const UnAuthUserDisplay = ()=>{
  return <div className='LinkCard'>
            <a href='/accounts?section=create'>Create Account</a>
            <a href='/accounts?section=signin'>Signin</a>
          </div>
}

function Nav() {
  //if user is signed in display account and logout 
  let cookie = document.cookie
  return (
    <div className='NavBar'>
      <div className='ImageCard'>
      {
        cookie.length > 1 ? 
        <a href='/main'>
          <img src={logo}></img>
        </a> 
        : 
        <a href='/'>
          <img src={logo}></img>
        </a>
      }
      </div>
        {
          cookie.length > 1 ? <AuthUserDisplay /> : <UnAuthUserDisplay />
        }
    </div>
    
  )
}

export default Nav