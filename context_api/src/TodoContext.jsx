import { createContext, useState} from "react";

const TodoContext=createContext()

export const TodoProvider=({children})=>{

    const [todos, setTodos]=useState([])

    const addTodo=(todo)=>{
        setTodos([...todos, todo])
    }

    const removeTodo=(index)=>{
        setTodos(todos.filter((_, i)=>i!==index))
    }

    return (
        <TodoContext.Provider value={{todos, addTodo, removeTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContext