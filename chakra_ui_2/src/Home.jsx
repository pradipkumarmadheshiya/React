import React from "react";
import { Box, Button, Card, Center, Heading, Input, Text  } from "@chakra-ui/react";

function Home() {
  return (
    <Box p="40px">
        <Heading textAlign="center">My Chakra UI App</Heading>
        <Center spaceX={5} justifyItems="center" mt={8}>
            <Input w={400} placeholder="Write something here..."/>
            <Button>Submit</Button>
        </Center>
        <Card.Root mt={8} p={8} w="fit-content">
            <Card.Body>
                <Card.Title mt="2">About</Card.Title>
                <Card.Description>
                    This is the card body. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                    Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
            </Card.Body>
        </Card.Root>
    </Box>
  );
}

export default Home;
