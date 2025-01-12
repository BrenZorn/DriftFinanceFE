import React from 'react'
import logo from '../images/DriftLogo.png'
import { Link } from 'react-router-dom'

const AuthUserDisplay = ()=>{
  return <div><Link to='/accounts/account'>Account</Link></div>
}

const UnAuthUserDisplay = ()=>{
  return <div className='LinkCard'>
            <Link to='/accounts?section=create'>Create Account</Link>
            <Link to='/accounts?section=signin'>Signin</Link>
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
        <Link to='/main'>
          <img src={logo}></img>
        </Link> 
        : 
        <Link to='/'>
          <img src={logo}></img>
        </Link>
      }
      </div>
        {
          cookie.length > 1 ? <AuthUserDisplay /> : <UnAuthUserDisplay />
        }
    </div>
    
  )
}

export default Nav