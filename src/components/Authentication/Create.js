import React, { use } from 'react'
import { useState } from 'react'

function Create() {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [Email, setEmail] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [Error, setError] = useState()

  const checkUserInput = () => {
    if(Username == ""){
      setError("Must enter a Username")
      return false
    }
    if(Password === ConfirmPassword){
      setError("Password must match")
      return false
    }
    if(Email == ""){
      setError("Must enter a email address")
      return false
    }
    return true
  }

  const addUser = () =>{
    if(checkUserInput == false){
      return
    }
    console.log('passed check')
    //get api rout and send the data to api so back end can deal with it
  } 



  //Display Error if hit 
  return (
    <div className='CreateCard'>
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
            <button className='CreatAccount' onClick={(e)=>{e.preventDefault()}}>Create Account</button>
            <a className='Login' href='/accounts?section=signin'>Login</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create