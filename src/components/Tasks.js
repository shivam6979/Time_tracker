import React, { useState, useEffect,useRef } from 'react'
import "./style.css"
function Tasks(props) {
    let id = useRef();
    const [seconds, setSeconds] = useState(0);
    const [inputTask, setInputTask] = useState("")
    const [ minutesT, setMinutesT] = useState(0)
    const [hour,setHour] = useState(0)
    const [TaskTime, setTaskTime] = useState(0)
    // enter into the input display as sa list so creating a List
    const [tasks, setTasks] = useState([])
    const [time,setSpendTime] = useState([])
    let addTask =(inputTask)=>{
        if(inputTask!=="")
// if you want to edit an array you habve to copy the previous array and add the updated one
        setTasks([...tasks,inputTask]);
        localStorage.setItem("first",seconds )
        let spendTime = localStorage.getItem("first", "this is your item")
        setSpendTime(spendTime)
    }
//---------------------------- timer counter
useEffect(()=>{
    handleTime()
    return ()=> clearInterval(id.current)
},[])

function taskTime(){

}

// ====================timer counter
function handleTime(){
    id.current=setInterval(()=>{// id.current holds the set interval function so we need to pass this id in the clearInterval
        setSeconds((prev)=> prev+1);
    },1000)
  }
  if(seconds>=59){
    setMinutesT(minutesT+1)
    setSeconds(0)
    if(minutesT>=59){
        setHour(hour+1)
        setMinutesT(0)
    }
  }


  return (
  <>
    <div className='maint'>
    <h1>{props.namew}</h1>
    <div className='mainp'>
        <div className='inputt'>
            <div>
            <input type='text' className='inputt' placeholder='Enter your task' value={inputTask} onChange={e=>{ setInputTask(e.target.value) }}/>
            <button className='btnp' onClick={()=>{addTask(inputTask); setInputTask(""); taskTime()}}  >Submit</button>
            <div><h3>{(hour<10)?"0"+hour:hour}:{minutesT<10?"0"+minutesT:minutesT}:{seconds<10?"0"+seconds:seconds}</h3></div>
            </div>
            <div >
        {tasks.map((item,i)=>{
            return(
                <div key={i} className='container1t'>
                    <div className='container2t'>
                        <div><h2>Task  {i+1}:- {item}</h2></div>
                        <div><h3>{(hour<10)?"0"+hour:hour}:{minutesT<10?"0"+minutesT:minutesT}:{seconds<10?"0"+seconds:seconds}</h3></div>
                    </div>
{/* Enter for tasks */}
                </div>
            )
        })}
    </div>
        </div>

    </div>
    </div>
    {/* {tasks.length>0?<button><link to="/last"></link> finish</button>:""} */}

  </>
  )
}
export default Tasks