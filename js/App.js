import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


const App = props => {
  const [activity, setActivity] = useState([])


  const getActivity = () => {
    axios({
      url: "https://www.boredapi.com/api/activity/",
      method: 'GET'
    })
      .then(res => {
        setActivity(res.data.activity)
        console.log(res.data.activity)
      })
      .catch()
  }


  return (
    <div className="box">
      <h1 className="logo">Bored API</h1>
      <h2 className="activity">{activity}</h2>
      <Button variant="light" className="btn" onClick={() => getActivity()}>
        Bored? Click to see what you can do!
      </Button>
    </div>
  )
}

export default App
