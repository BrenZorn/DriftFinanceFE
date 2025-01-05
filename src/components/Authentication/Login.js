import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";





function Login() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const navigate = useNavigate()

  const userLogin = async (Email, Password)=>{ 
    console.log(Email, Password)
    let request = await axios.post('http://localhost:3001/Authentication/signin',{
      data:{
        email: Email,
        password: Password
      },
    })
    console.log(request)
    //set jwt in cookies so we can use the jwt later as a api access token

    navigate('/home')
  }

  return (
    <div>
      <div>
        <form>
          <label>Email</label>
          <input type='text' onChange={(e)=>setEmail(e.target.value)} placeholder='Email'></input>
          <label>Password</label>
          <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
          <button onClick={(e)=>{e.preventDefault(); userLogin(Email, Password)}}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login