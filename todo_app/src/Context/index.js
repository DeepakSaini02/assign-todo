import { createContext, useEffect, useState } from "react"
import { v4 as uuid } from 'uuid';
import { addItemToLocalStorage, addLocalStorage, getItemFromLocalStorage, localStorageKey } from "../Service/localStorage";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [allTask, setAllTask] = useState([]);

    const submitTask = (task) => {
        if (!task) {
            return;
        }
        const payload = {
            id: uuid(),
            task: task,
            completed: false
        }
        addItemToLocalStorage(localStorageKey.addTodo, payload);
        getAllTask();
    }

    useEffect(()=>{
        getAllTask()
    },[])

    const getAllTask=()=>{
        let res=getItemFromLocalStorage(localStorageKey.addTodo);
        res && setAllTask(res);
    }

    return <AppContext.Provider value={{ allTask,submitTask}}>
        {children}
    </AppContext.Provider>
}