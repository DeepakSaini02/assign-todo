import { useContext, useState } from "react"
import "./style.css"
import { AppContext } from "../../Context";

export const AddTodoPopUp = ({ handleClose,updateTaskDetail }) => {
  const [task,setTask]=useState(updateTaskDetail ? updateTaskDetail.task : "");
  const {submitTask,updateTask}=useContext(AppContext);

  const handleSubmit = () => {
    if (!task) {
      return;
    }
    console.log(task);
    submitTask(task)
  }

  const handleChange = (val) => {
    setTask(val)
  }

  const updateTaskData=()=>{
    console.log(updateTaskDetail,"updateTaskDetail%%");
    updateTask(updateTaskDetail,task)
  }

  return <div className="popup-box">
    <div className="box">
      <span className="close-icon" onClick={handleClose}>x</span>
      <input onChange={(event) => handleChange(event.target.value)} type="text" value={task} />
      <button onClick={updateTaskDetail ? updateTaskData : handleSubmit}>Submit</button>
    </div>
  </div>
}