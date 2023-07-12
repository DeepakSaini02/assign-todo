import { useState } from "react"
import "./style.css"
export const AddTodoPopUp=({handleClose})=>{
  const [task,setTask]=useState('')

  const handleSubmit=()=>{
    if(!task){
      return;
    }
 console.log(task);
  }

  const handleChange=(val)=>{
    setTask(val)
  }

    return <div className="popup-box">
    <div className="box">
      <span className="close-icon" onClick={handleClose}>x</span>
      <input onChange={(event)=>handleChange(event.target.value)} type="text" value={task}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  </div>
}