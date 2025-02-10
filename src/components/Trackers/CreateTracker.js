import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToTracker, resetTrackerState, updateAddTrackerItemsToggle, updateCreateTracker, updateTrackerName } from '../../redux/slice/trackers'
import axios from 'axios'
import Cookies from 'js-cookie';

function CreateTracker() {

  const [expenseName, setExpenseName] = useState()
  const [amount, setAmount] = useState()

    const dispatch = useDispatch()
    const {addTrackerItemsToggle} = useSelector(state => state.trackers)
    const {tracker} = useSelector(state =>state.trackers)
    
    console.log(tracker.trackerItems.length)

  const closePopUp = () =>{
    dispatch(updateCreateTracker(false))
    dispatch(updateAddTrackerItemsToggle(false))
    dispatch(resetTrackerState())
  }
 
  const addExpense = () =>{
    if(isNaN(amount)){
      console.log('please enter a number***')
      return
    }
    let expense = {
      Name: expenseName,
      Amount: amount
    }
    dispatch(addItemToTracker(expense))
    document.getElementById("expense").value = ""
    document.getElementById("amount").value = ""

  }

  const createTracker = async () => {
    //make sure tracker has all its data, post it to the BE 
    if(tracker.name == ""){
      console.log('please enter a name***')
      return
    }
    const cookieValue = Cookies.get("JWT");
    let cookie = JSON.parse(cookieValue)
    let request = await axios.post("http://localhost:3001/main/createTracker", {Tracker: tracker}, {headers : {"Authorization" : `Bearer ${cookie.data}`}})
    console.log(request)
  }

    return(
    <div className='CreateTrackerContainer'>
      <div className='TrackerContainer'>
        <input value='x' type='button' className='ClosePopUpButton' onClick={()=>closePopUp()}></input>
        <div className='TrackerContentContainer'>
                <label>Create New Tracker</label>
                <input type='text' placeholder='Tracker Name' onChange={(e)=>{dispatch(updateTrackerName(e.target.value))}}></ input>
                {
                  addTrackerItemsToggle ?
                  <div className='tracker-items-form-container'>
                  <div>
                      <label>Name</label>
                      <input type='text' placeholder='Expense' id='expense' onChange={(e)=>{setExpenseName(e.target.value)}} ></input>
                      <label>Amount</label>
                      <input type='text' placeholder='Amount' id='amount' onChange={(e)=>{setAmount(e.target.value)}} ></input>
                      <input type='button' value='Add' className='Add' onClick={()=>{addExpense()}}></  input>
                  </div>
                  <input type='button' value='close' className='Close' onClick={()=>{dispatch (updateAddTrackerItemsToggle(false))}}></input>
                </div> :<input type='button' value='Add Item' className='AddItemButton' onClick={()=>dispatch (updateAddTrackerItemsToggle(true))}></input> 
                }
                {
                  tracker.trackerItems.length > 0 &&
                  <div className='TrackerItemsContainer'>
                    {
                      tracker.trackerItems.map((data, key)=>{
                        console.log(data, key)
                        return(
                        <li key={key}>
                           <p>{data.Name} {data.Amount}</p>
                        </li>
                        )
                      })
                    }
                  </div>
                }
                <input type='button' value='Create Tracker' className='CreateButton' onClick={()=>{createTracker()}}></ input>
        </div>
      </div>
    </div>)
}

export default CreateTracker