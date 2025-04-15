import { Box, Text, Image, Heading, Grid, } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoffee } from './coffeeSlice'

const CoffeeList = () => {

    const {coffees, status}=useSelector(state=>state.coffee)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchCoffee())
    },[dispatch])
    
    if (status=="loading"){
        return <h3>Loading...</h3>
    }
    else if (status=="failed"){
        return <h3>Something went wrong.</h3>
    }
    console.log(coffees)

  return (
    <Box p={4}>
        <Heading textAlign={'center'} mt={8} mb={4}>Coffee App</Heading>
        {/* <Box mb={4}>
            <h2>Sort By Price</h2>
            <button onClick={() => dispatch(fetchCoffee('asc'))}>Low to High</button> <br />
            <button onClick={() => dispatch(fetchCoffee('desc'))}>High to Low</button>
        </Box> */}
        <Grid templateColumns={"repeat(4, 1fr)"} gap={4}>
            {
                coffees.map((coffee)=>(
                    <Box key={coffee.id} border="1px solid black" p={4} lineHeight={2}>
                        <Text>Title : {coffee.title}</Text>
                        <Text>Ingredients : {coffee.ingredients}</Text>
                        <Box>
                            <Image src={coffee.image} w="100%" h="300px"/>
                        </Box>
                        <Text>Price : {coffee.price}</Text>
                    </Box>
                ))
            }
        </Grid>
    </Box>
  )
}

export default CoffeeList