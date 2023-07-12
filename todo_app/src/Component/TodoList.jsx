
export const TodoList = ({ data }) => {
    console.log(data, 'data');
    return <div>
        {
            data.map((item, index) => <div key={item.id}>
                <input type="checkbox" defaultChecked={item.completed} />
                <span>{`${index + 1} ${item.task}`}</span>
            </div>)
        }
    </div>
}