import { Box, Button, Center, Heading, Input, Flex } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, toggleStatus } from './todoSlice'
import { useRef, useState } from 'react'

const TodoList = () => {

    const [task, setTask]=useState([])
    const todos=useSelector(state=>state.todo.value)
    const dispatch=useDispatch()
    const inpRef=useRef(null)

    const handleAdd=()=>{
        dispatch(addTodo(task))
        setTask("")
        inpRef.current.focus()
    }
    
  return (
    <Center h="100vh">
      <Box>
        <Heading>Todo List</Heading>
        <Flex gap={1} mb={4}>
            <Input ref={inpRef} placeholder='Enter your task' onChange={(e)=>setTask(e.target.value)} value={task}/>
            <Button onClick={handleAdd}>Add</Button>
        </Flex>
        <Box>
            <ol>
                {
                    todos.map((todo, idx)=>(
                        <Flex key={idx} justify={'space-between'} mt={1}>
                          <li >{todo.title} <Button onClick={()=>dispatch(toggleStatus(idx))}>{todo.status?"Completed":"Pending"}</Button></li>
                          <Button onClick={()=>(dispatch(removeTodo(idx)))}>Delete</Button>
                        </Flex>
                    ))
                }
            </ol>          
        </Box>
      </Box>
    </Center>
  )
}

export default TodoList
