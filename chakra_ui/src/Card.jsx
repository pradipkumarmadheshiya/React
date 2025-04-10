import { Box, Avatar, Float, Circle, Center, Heading, Text, Badge, Link, HStack, Button } from '@chakra-ui/react'
import React from 'react'

const Card = () => {

  return (
    <Center bg="gray.200" height="100vh">
        <Box bg="white" p="48px" width="fit-content" borderRadius={12}>
            <Center >
                <Avatar.Root colorPalette="green" variant="subtle" width="100px" height="100px" >
                    <Avatar.Fallback name="Lindsey James" />
                    <Avatar.Image src='https://media.istockphoto.com/id/682517392/photo/lucious-locks-and-happy-laughter.jpg?s=612x612&w=0&k=20&c=Y1qZReW5PIppIg_SRkD6XVo8Q6tGm7zhRgZLcpQkx9Y='/>
                    <Float placement="bottom-end" offsetX={3.5} offsetY={3.5}>
                        <Circle
                        bg="green.500"
                        size="15px"
                        outline="0.2em solid"
                        outlineColor="white"
                        />
                    </Float>
                </Avatar.Root>
            </Center>
            <Center mt={6}><Heading size="4xl">Lindsey James</Heading></Center>
            <Center mt={1}><Heading color="gray" size="2xl">@lindsey_jam3s</Heading></Center>
            <Text mt={6} textAlign="center" fontSize="24px" color="blackAlpha.800">Actress, musician, songwriter <br/>
                and artist. PM for work inquires <br /> or
            </Text>
            <Center><Link href='#' color="blue.500" fontSize="24px" >#tag</Link></Center>
            <Text textAlign="center" fontSize="24px" color="blackAlpha.800">Me in your posts</Text>
            <HStack justify="center" mt={6} mb={6}>
                <Badge fontSize="24px" color="blackAlpha.700" rounded="full" p={2}>#ART</Badge>
                <Badge fontSize="24px" color="blackAlpha.700" rounded="full" p={2}>#PHOTOGRAPHY</Badge>
                <Badge fontSize="24px" color="blackAlpha.700" rounded="full" p={2}>#MUSIC</Badge>
            </HStack>
            <HStack justify="center" gap="30px">
                <Button px="20px" color="black" borderRadius="18px" variant='outline' bg="gray.200">Message</Button>
                <Button px="20px" borderRadius="18px" bg="blue.500">Follow</Button>
            </HStack>
        </Box>
    </Center>
  )
}

export default Card
