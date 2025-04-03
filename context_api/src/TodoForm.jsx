import { useContext, useState, useRef} from "react"
import TodoContext from "./TodoContext"

const TodoForm=()=>{

    const inputRef=useRef(null)
    const [task, setTask]=useState("")
    const {addTodo}=useContext(TodoContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (task.trim()=="") return 
        addTodo(task)
        setTask("")

        inputRef.current.focus()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" name="todo" id="todoInp" placeholder="Enter Todo" onChange={(e)=>setTask(e.target. value)} value={task}/>
            <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default TodoForm