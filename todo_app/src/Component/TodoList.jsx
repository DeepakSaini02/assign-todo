import { useContext } from "react";
import { AppContext } from "../Context";

export const TodoList = ({ data,setUpdateTaskDetail,showPop}) => {
    console.log(data, 'data');
    const {handleTaskCompletion,deleteTask}=useContext(AppContext);

    const handleUpdateTask=(data)=>{
        setUpdateTaskDetail(data);
        showPop(true)
    }

    return <div>
        {
            data.map((item, index) => <div key={item.id}>
                <input type="checkbox" onClick={()=>handleTaskCompletion(item)} defaultChecked={item.completed} />
                <span style={item.completed ? {textDecoration:'line-through'} : {}}>{`${index + 1} ${item.task}`}</span>
                <span>
                <button onClick={()=>handleUpdateTask(item)}>Update</button>
                    <button onClick={()=>deleteTask(item)}>Delete</button>
                </span>
            </div>)
        }
    </div>
}