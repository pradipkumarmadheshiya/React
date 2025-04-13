import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset, incrementByAmount } from "./counterSlice"
import { Button, Heading, Box, Center, Input, Flex} from "@chakra-ui/react"
import { useState } from "react"

export const Counter=()=>{

    const [inpData, setInpData]=useState(0)
    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()

    const handleAddAmount=()=>{
        dispatch(incrementByAmount(inpData))
    }

    return (
        <Center  h="100vh">
            <Box>
                <Box><Heading>Count : {count}</Heading></Box> <br />
                <Box lineHeight={4} spaceX={4}>
                    <Button onClick={()=>dispatch(increment())}>+ Increment</Button> 
                    <Button onClick={()=>dispatch(decrement())}>- Decrement</Button> 
                    <Button onClick={()=>dispatch(reset())}>Reset</Button> 
                    <Flex gap={4}>
                        <Input type="number" placeholder="Enter the amount" onChange={(e)=>setInpData(e.target.value)} value={inpData}/> 
                        <Button onClick={handleAddAmount}>Add</Button>
                    </Flex>
                </Box>
            </Box>
        </Center>
    )
}