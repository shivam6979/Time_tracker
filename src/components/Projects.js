import React, { useState, useEffect, useRef } from 'react'

import "./style.css"
import Tasks from './Tasks'

// import Timer from './Timer'
function Projects() {
    // const navigate = useNavigate();
    let id = useRef();
    const [inputText, setinputText] = useState("")
    // enter into the input display as sa list so creating a List
    const [project, setProject] = useState([])
    const [time, setTime] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [hour,setHour] = useState(0)
    let addTask =(inputText)=>{
        if(inputText!=="")
        // handleTime()
        clearInterval(id.current)
        setProject([...project,inputText]);// if you want to edit an array you habve to copy the previous array and add the updated one
        localStorage.setItem("first",time )
        let spendTime = localStorage.getItem("first", "this is your item")
    }
//---------------------------- timer counter
useEffect(()=>{
    handleTime();
    return ()=> clearInterval(id.current)
  },[])
// ==========================
function handleTime(){
    id.current=setInterval(()=>{// id.current holds the set interval function so we need to pass this id in the clearInterval
      setTime((prev)=> prev+1);
    },1000)
  }
  if(time>=59){
    setMinutes(minutes+1)
    setTime(0)
    if(minutes>=59){
        setHour(hour+1)
        setMinutes(0)
    }
  }


// ====================timer counter
  return (
  <>
    <div className='mainp'>

        <div className='inputp'>
        <input type='text' placeholder='Enter your project' value={inputText} onChange={e=>{ setinputText(e.target.value) }}/>
        <button className='btnp' onClick={()=>{addTask(inputText); setinputText("")}}>Submit</button>
        </div>
        <div><h3>{hour<10?"0"+hour:hour}:{minutes<10?"0"+minutes:minutes}:{time<10?"0"+time:time}</h3></div>
    </div>
    {project.length>0?<Tasks namew={project.map((items,i)=>{return(<div key={i}>{items}</div>)})} fortime={time}/>:""}
  </>
  )
}
export default Projects