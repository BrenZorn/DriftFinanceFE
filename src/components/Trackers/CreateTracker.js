import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAddTrackerItemsToggle, updateCreateTracker } from '../../redux/slice/trackers'

function CreateTracker() {
    const dispatch = useDispatch()
    const {addTrackerItemsToggle} = useSelector(state => state.trackers)
    
    return(
    <div className='CreateTrackerContainer'>
      <div className='TrackerContainer'>
        <input value='x' type='button' className='ClosePopUpButton' onClick={()=>dispatch(updateCreateTracker  (false))}></input>
        <div className='TrackerContentContainer'>
                <label>Create New Tracker</label>
                <input type='text' placeholder='Tracker Name' onChange={(e)=>{}}></ input>
                <input type='button' value='Add Item' className='AddItemButton' onClick={()=>dispatch (updateAddTrackerItemsToggle(true))}></input>
                {
                    addTrackerItemsToggle &&
                    <div className='tracker-items-container'>
                      <div>
                          <label>Expense</label>
                          <input type='text' placeholder='Expense' onChange={(e)=>  {}} ></input>
                          <label>Amount</label>
                          <input type='text' placeholder='Amount' onChange={(e)=> {}} ></input>
                          <input type='button' value='Add' className='Add' onClick={()=>{}}></  input>
                      </div>
                      <input type='button' value='close' className='Close' onClick={()=>{dispatch (updateAddTrackerItemsToggle(false))}}></input>
                    </div>
                }
                <input type='button' value='Create Tracker' className='CreateButton' onClick={()=>{}}></ input>
        </div>
      </div>
    </div>)
}

export default CreateTracker