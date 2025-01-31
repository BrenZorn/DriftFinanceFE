import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isCookieExpired from '../helpers/isCookieExpired'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';


import { addUser } from '../redux/slice/userInfo'

import Nav from '../components/nav'
import IncomeTracker from '../components/MainPage/IncomeTracker'
import PieChart from '../components/MainPage/PieChart'
import Trackers from '../components/MainPage/Trackers'
import { updateUserIncome } from '../redux/slice/income'

function Main() {
    const {user} = useSelector(state=>state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        
        const isTokenExpired = isCookieExpired("JWT")
        if(!isTokenExpired){
            try{
                const cookieValue = Cookies.get("JWT");
                let cookie = JSON.parse(cookieValue)
                console.log(cookie.data)
                console.log('first')
                axios.get("http://localhost:3001/main/currentUser",{headers : {"Authorization" : `Bearer ${cookie.data}`}})
                .then(res => {
                    const user = {
                        _id: res.data._id,
                        Email: res.data.Email,
                        FireBaseID: res.data.FireBaseID,
                        UserName: res.data.UserName
                    }
                    dispatch(addUser(user))
                    dispatch(updateUserIncome(res.data.income[0].Income))
                    console.log('first') 
                })
                .catch(error => {console.log(error)})
            }catch(err){
                console.log(err)
            }
        }else{
            navigate('/accounts/signin')
        }
    },[])
    
  return (
    <div>
        <Nav />
        <div>
            <h1>Welcome Back {user.UserName}</h1>
        </div>
        <IncomeTracker />
        <PieChart />
        <Trackers />
    </div>
  )
}

export default Main