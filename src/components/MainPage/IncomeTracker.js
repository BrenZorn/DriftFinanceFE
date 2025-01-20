import axios from 'axios'
import React, { useState } from 'react'
import Cookies from 'js-cookie';


function IncomeTracker() {

  const [income, setIncome] = useState()

  const updateIncome = async () => {
    function isNumeric(str) {
      if (typeof str != "string") return false 
      return !isNaN(str) && 
             !isNaN(parseFloat(str)) 
    }
    let number = isNumeric(income)
    if(number){
      //set income in db then in redux
      const cookieValue = Cookies.get("JWT");
      let cookie = JSON.parse(cookieValue)
      console.log(cookie.data)
      console.log(income)
      try{
        let request = await axios.post('http://localhost:3001/main/updateIncome',{Income: income},{headers : {"Authorization" : `Bearer ${cookie.data}`}})
        console.log(request)
      }catch(error){
        console.log(error)
      }
      

    }else{
      console.log('error')
    }
  }

  //once income is updated chage the view to show the income with an "update" btn

  return (
    <div className='IncomeTrackerContainer'>
        <div className='MonthlyIncomeContainer'>
            <h1>Monthly Income</h1>
            <input placeholder='income' onChange={(e)=>{setIncome(e.target.value)}}></input>
            <button  onClick={(e)=>{e.preventDefault(); updateIncome()}}>Add</button>
        </div>
        <div className='RemainingIncomeContainer'>
            <h1>Remaining Monthly Income</h1>
            <p>${}</p>
        </div>
    </div>
  )
}

export default IncomeTracker