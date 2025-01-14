import React from 'react'
import logo from '../images/DriftLogo.png'
import { Link } from 'react-router-dom'
import isCookieExpired from '../helpers/isCookieExpired'

const AuthUserDisplay = ()=>{
  return <div><Link to='/accounts/account'>Account</Link></div>
}

const UnAuthUserDisplay = ()=>{
  return <div className='LinkCard'>
            <Link to='/accounts/create'>Create Account</Link>
            <Link to='/accounts/signin'>Signin</Link>
          </div>
}

function Nav() {
  let isCookieExpiredValue = isCookieExpired("JWT")
  return (
    <div className='NavBar'>
      <div className='ImageCard'>
      {
        !isCookieExpiredValue ? 
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
          !isCookieExpiredValue ? <AuthUserDisplay /> : <UnAuthUserDisplay />
        }
    </div>
    
  )
}

export default Nav