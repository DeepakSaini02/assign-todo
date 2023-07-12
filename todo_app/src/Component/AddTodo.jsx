import { useContext, useState } from "react"
import { AddTodoPopUp } from "./AddTodoPopUp"
import { TodoList } from "./TodoList"
import { AppContext } from "../Context"

export const AddTodo = () => {

    const [popup, setPopup] = useState(false)
    const { allTask } = useContext(AppContext);
    const [updateTaskDetail, setUpdateTaskDetail] = useState(null)
    const togglePopup = () => {
        setPopup(prev => !prev)
        setUpdateTaskDetail(null)
    }

    return <div>
        <button onClick={togglePopup}>Add Todo</button>
        {popup && <AddTodoPopUp handleClose={togglePopup} updateTaskDetail={updateTaskDetail}/>}
        <TodoList data={allTask} setUpdateTaskDetail={setUpdateTaskDetail} showPop={setPopup}/>
    </div>
}