export const addItemToLocalStorage=(key,value)=>{
    const data=localStorage.getItem(key)
    
    if(!data) localStorage.setItem(key,JSON.stringify([value]))
    else localStorage.setItem(key,JSON.stringify([...JSON.parse(data),value]))
}

export const addLocalStorage=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}

export const getItemFromLocalStorage=(key)=>{
    const data=localStorage.getItem(key)
    return JSON.parse(data);
}

export const localStorageKey={
    addTodo:"addTodo"
}