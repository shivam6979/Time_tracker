import React, { useEffect, useState, useRef } from 'react'


function Timer() {
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour,setHour] = useState(0);
  const [now, setNow] =useState(0)

  useEffect(()=>{
    return ()=> clearInterval(id.current)
  },[])

  // useRef hook used to store the reference or some value that is
  // not going to change or whenever this componenet get re-render
  // so
  let id = useRef();

function handleTime(){

  id.current=setInterval(()=>{// id.current holds the set interval function so we need to pass this id in the clearInterval
    setTime((seconds)=> seconds+1);
  },1000)
}
  return (
    <div>
      <h1>time : = {time}</h1>
      <h1>{seconds}</h1>
      <h2>{minutes}</h2>
      <button onClick={()=>handleTime()}>Start</button>
      <button onClick={()=>clearInterval(id.current)}>Pause</button>
      <button>Stop</button>
    </div>
  )
}
export default Timer