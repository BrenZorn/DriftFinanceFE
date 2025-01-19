import React, { useEffect } from 'react'
import Nav from '../components/nav'
import { useDispatch, useSelector } from 'react-redux'
import isCookieExpired from '../helpers/isCookieExpired'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';
import { addUser } from '../redux/slice/userInfo'


//check if  jwt is expired ~
//get user info 
    //check if we have current user info ~
    //if not use jwt to get current user cred from BE


function Main() {
    const {user} = useSelector(state=>state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        const isTokenExpired = isCookieExpired("JWT")
        if(!isTokenExpired){
            try{
                if(user.email){
                    return
                }else{
                    const cookieValue = Cookies.get("JWT");
                    let cookie = JSON.parse(cookieValue)
                    axios.get("http://localhost:3001/main/currentUser",{headers : {"Authorization" : `Bearer ${cookie.data}`}})
                    .then(res => {
                        dispatch(addUser(res.data))
                    })
                    .catch(error => {console.log(error)})
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
            <h1>Welcome Back {user.UserName}</h1>
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