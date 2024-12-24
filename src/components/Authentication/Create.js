import React from 'react'
import { useState } from 'react'

function Create() {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [Email, setEmail] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  return (
    <div className='CreatePage'>
      <div className='FormCard'>
        <h1>Create Account</h1>
        <form className='CreateNewUserForm'>
          <label>Email</label>
          <input type='text' onChange={(e)=>setEmail(e.target.value)} placeholder='Email'></input>
          <label>Username</label>
          <input type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='Username'></input>
          <label>Password</label>
          <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
          <label>Confirm Password</label>
          <input type='password' onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password'></input>
          <div className='ButtonCard'>
            <button>Create Account</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create