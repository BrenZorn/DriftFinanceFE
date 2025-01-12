import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slice/userInfo';





function Login() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = async (Email, Password)=>{ 
    try{
      let request = await axios.post('http://localhost:3001/Authentication/signin',{
        data:{
          email: Email,
          password: Password
        },
      })
      let jwt = request.data.token 
      document.cookie = jwt
      console.log(document.cookie)
      //add request.data.userInfo to global state
      console.log(request.data.userInfo)
      dispatch(addUser(request.data.userInfo))
      navigate('/main')
    }catch(err){
      //set error message
      console.log(err.response.data.errorMessage)
    }
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