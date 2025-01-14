import React, { useEffect } from 'react'
import Nav from '../components/nav'
import { useSelector } from 'react-redux'
import isCookieExpired from '../helpers/isCookieExpired'
import { useNavigate } from 'react-router-dom'


//check if  jwt is expired
//get user info 
    //check if we have current user info
    //if not use jwt to get current user cred from BE


function Main() {
    const {user} = useSelector(state=>state.user)
    const navigate = useNavigate()
    useEffect(()=>{
        const isTokenExpired = isCookieExpired("JWT")
        if(!isTokenExpired){
            try{
                if(user.email){
                    return
                }else{
                    //get users data and add to redux
                    console.log('add user to redux')  
                }
                
            }catch(err){
                console.log(err)
            }
            
        }else{
            navigate('/accounts?section=signin')
        }
    },[])
    
  return (
    <div>
        <Nav />
        <div>
            <h1>Welcome Back {user.username}</h1>
        </div>
        <div>
            accounts
        </div>
        <div>
            pie chart
        </div>
        <div>
            trackers
        </div>
    </div>
  )
}

export default Main