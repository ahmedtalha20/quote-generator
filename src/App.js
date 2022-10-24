import React from 'react'
import axios from 'axios'

import './App.css'

function App(){

  const [advice, setAdvice] = React.useState("");
  

  function fetchAdvice(){
   
    let randomNum = Math.floor(Math.random()*224);
    fetch(`https://api.adviceslip.com/advice/${randomNum}`)
    .then(res => res.json())
    .then(data => {
      setAdvice(data.slip.advice)
    })
  }

  React.useEffect(() => {
    fetchAdvice();
  }, [])

  return(
        <div className="app">
          <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={fetchAdvice}>
              <span>GIVE ME ADVICE!</span>
            </button>
          </div>
       </div>
  )
}

export default App;