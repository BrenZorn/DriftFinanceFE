import React from 'react'

function IncomeTracker() {
  return (
    <div>
        <div>
            <h1>Monthly Income</h1>
            <input placeholder='income'></input>
            <button>Add</button>
        </div>
        <div>
            <h1>Remaining Monthly Income</h1>
            <p>$</p>
        </div>
    </div>
  )
}

export default IncomeTracker