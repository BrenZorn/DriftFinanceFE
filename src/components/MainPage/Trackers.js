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
  //create tracker pop up *
  //add items to trackers new tracker
  //post tracker data to db
  //retrive all tracker data realted to the user and display it
 
  return (
    <div>
      {
        createTrackerToggle ? <CreateTracker /> :
      <div>
        <input type='button' value='Add Tracker' onClick={()=>dispatch(updateCreateTracker(true))}></input>
      </div>
      }
      
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