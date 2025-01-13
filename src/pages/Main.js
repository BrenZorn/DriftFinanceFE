import React, { useEffect } from 'react'
import Nav from '../components/nav'
import { useSelector } from 'react-redux'



function Main() {
    const {user} = useSelector(state=>state.user)

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