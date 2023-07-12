import { useContext } from "react";
import { AppContext } from "../Context";

export const TodoList = ({ data }) => {
    console.log(data, 'data');
    const {deleteTask}=useContext(AppContext);
    return <div>
        {
            data.map((item, index) => <div key={item.id}>
                <input type="checkbox" defaultChecked={item.completed} />
                <span>{`${index + 1} ${item.task}`}</span>
                <span>
                    <button onClick={()=>deleteTask(item)}>Delete</button>
                </span>
            </div>)
        }
    </div>
}