import React, { useState } from 'react'
import CreateTracker from '../Trackers/CreateTracker'
import { useDispatch, useSelector } from 'react-redux'
import { updateCreateTracker } from '../../redux/slice/trackers'

function Trackers() {
  const [addItem, setAddItem] = useState(false)
  const [trackerName, setTrackerName] = useState('')
  const [amount, setAmount] = useState()
  const [trackerItems, setTrackerItems] = useState([])

  const dispatch = useDispatch()

  const {createTrackerToggle} = useSelector(state => state.trackers)
  console.log(createTrackerToggle)
  //create tracker pop up 
  //add items to trackers new tracker
  //post tracker data to db
  //retrive all tracker data realted to the user and display it
 
  

  const CreateTracker = () => {
    // function to create new trackers
    return(<div className='CreateTrackerContainer'>
      <input value='x' type='button' onClick={()=>dispatch(updateCreateTracker(false))}></input>
      <div className=''>
          <div className='TrackerContainer'>
              <label>Tracker Name</label>
              <input type='text' placeholder='Tracker Name' onChange={(e)=>setTrackerName(e.target.value)}></input>
              <input type='text' placeholder='Add Item'></input>
              {
                  addItem &&
                  <div>
                      <label>Amount</label>
                      <input type='text' placeholder='Amount' onChange={(e)=>setAmount(e.target.value)} ></input>
                      <input type='button' value='Add' onClick={()=>{}}></input>
                  </div>
              }
              <input type='button' value='Create Tracker' onClick={()=>{}}></input>
          </div>
      </div>
  </div>)
  }
  

  return (
    <div>
      {
        createTrackerToggle && <CreateTracker />
      }
      <div>
        <input type='button' value='Add Tracker' onClick={()=>dispatch(updateCreateTracker(true))}></input>
      </div>
      <div className='TrackersContainer'>
        <div className='TrackerContainer'>
          <h1>Tracker Name</h1>
          <input type='button' value='X'></input>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>02/12/24</td>
                <td>34.56</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Trackers