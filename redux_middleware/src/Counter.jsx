import { Box, Button, Center, Flex, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

const Counter = () => {

    const [data, setData]=useState(0)
    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()

  return (
    <Center>
      <Box mt={12}>
        <Heading>Counter : {count}</Heading>
        <Flex gap={2} mt={4}>
            <Button onClick={()=>dispatch(increment())}>+</Button>
            <Button onClick={()=>dispatch(decrement())}>-</Button>
            <Button onClick={()=>dispatch(reset())}>Reset</Button>
        </Flex>
        <Flex gap={4} mt={4} >
            <Input placeholder='Enter your amount' type='number' name='number' value={data} onChange={(e)=>setData(e.target.value)}/>
            <Button onClick={()=>dispatch(incrementByAmount(data))}>Add</Button>
        </Flex>
      </Box>
    </Center>
  )
}

export default Counter
