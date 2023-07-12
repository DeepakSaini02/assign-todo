import { useContext, useState } from "react"
import { AddTodoPopUp } from "./AddTodoPopUp"
import { TodoList } from "./TodoList"
import { AppContext } from "../Context"

export const AddTodo = () => {

    const [popup, setPopup] = useState(false)
    const { allTask } = useContext(AppContext);
    const togglePopup = () => {
        setPopup(prev => !prev)
    }

    return <div>
        <button onClick={togglePopup}>Add Todo</button>
        {popup && <AddTodoPopUp handleClose={togglePopup} />}
        <TodoList data={allTask}/>
    </div>
}