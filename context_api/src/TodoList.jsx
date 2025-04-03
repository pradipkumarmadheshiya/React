import { useContext } from "react"
import TodoContext from "./TodoContext"

const TodoList=()=>{

    const {todos, removeTodo}=useContext(TodoContext)

    return (
        <div>
            <ul>
                {todos.map((todo, index)=>
                    <li key={index}>{todo} <button onClick={()=>removeTodo(index)}>Delete</button></li>
                )}
            </ul>
        </div>
    )
}
export default TodoList