import React from 'react'

function Nav() {
  return (
    <div>
        <div>
            <img src='#'></img>
        </div>
        <nav>
            <a href='/accounts?section=create'>Create Account</a>
            <a href='/accounts?section=signin'>Signin</a>
        </nav>
    </div>
    
  )
}

export default Nav