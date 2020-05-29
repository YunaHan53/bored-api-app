import React, { useState } from 'react'
import axios from 'axios'


const App = props => {
  const [activity, setActivity] = useState([])


  const getActivity = () => {
    axios({
      url: "http://www.boredapi.com/api/activity/",
      method: 'GET'
    })
      .then(res => {
        setActivity(res.data.activity)
        console.log(res.data.activity)
      })
      .catch()
  }


  return (
    <div>
      <h2>{activity}</h2>
      <button onClick={() => getActivity()}>
        Bored? Click to see what you can do!
      </button>
    </div>
  )
}

export default App
