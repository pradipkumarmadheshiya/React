import { TodoProvider } from "./TodoContext"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const App=()=>{

    return (
        <TodoProvider>
            <div>
                <h1>Todo List</h1>
                <TodoForm />
                <TodoList />
            </div>
        </TodoProvider>
    )
}
export default App