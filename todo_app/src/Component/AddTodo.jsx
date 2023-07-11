import { useState } from "react"
import { AddTodoPopUp } from "./AddTodoPopUp"

export const AddTodo = () => {

    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
        setPopup(prev => !prev)
    }

    return <div>
        <button onClick={togglePopup}>Add Todo</button>
        {popup && <AddTodoPopUp handleClose={togglePopup} />}
    </div>
}