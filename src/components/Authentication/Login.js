import React, { useState } from 'react'
import Nav from '../nav'

function Login() {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  return (
    <div>
      <div>
        <form>
          <label>Username</label>
          <input type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='Username'></input>
          <label>Password</label>
          <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login