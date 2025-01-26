import axios from 'axios'
import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserIncome } from '../../redux/slice/income';


function IncomeTracker() {
  const [income, setIncome] = useState()
  
  const dispatch = useDispatch()
  const {userIncome} = useSelector(state => state.userIncome)


  const updateIncome = async () => {
    function isNumeric(str) {
      if (typeof str != "string") return false 
      return !isNaN(str) && !isNaN(parseFloat(str)) 
    }
    let number = isNumeric(income)
    if(number){
      const cookieValue = Cookies.get("JWT");
      let cookie = JSON.parse(cookieValue)
      try{
        let request = await axios.post('http://localhost:3001/main/updateIncome',{Income: income},{headers : {"Authorization" : `Bearer ${cookie.data}`}})
        if(request.status == 200){
          dispatch(updateUserIncome(income))
        }
      }catch(error){
        console.log(error)
      }
    }else{
      //display error for user so they know they must enter a number
      console.log('error')
    }
  }

  //once income is updated chage the view to show the income with an "update" btn

  return (
    <div className='IncomeTrackerContainer'>
        <div className='MonthlyIncomeContainer'>
            <h1>Monthly Income</h1>
            {
              userIncome > 0 
              ? 
              <div>
                <p>${userIncome}</p>
                <button onClick={(e)=>{e.preventDefault(); dispatch(updateUserIncome(0))}}>Update Income</button>
              </div>
              : 
              <div>
                <input placeholder='income' onChange={(e)=>{setIncome(e.target.value)}}></input>
                <button  onClick={(e)=>{e.preventDefault(); updateIncome()}}>Add</button>
              </div>
            }
            
        </div>
        <div className='RemainingIncomeContainer'>
            <h1>Remaining Monthly Income</h1>
            <p>${}</p>
        </div>
    </div>
  )
}

export default IncomeTracker