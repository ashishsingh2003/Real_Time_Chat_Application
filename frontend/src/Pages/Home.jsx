import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {Container,Box,Text} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
function Home() {
  
  return (
    <Container maxW='xl' centerContent marginBottom="">
      <Box d='flex'
       justifyContent="center"
       p={3}
       bg={'white'}
       m="15 px 0px 15px 0px"
       w="100%"
       borderRadius="1g"
       borderWidth="1px"

       >
        <Text fontSize="4xl"textAlign="center"fontFamily="cursive">Talk-A-Tive</Text>
      </Box>
    <Box bg="white"p={4} borderRadius="lg" borderWidth="1px" w="100%" marginBottom="15">
    <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>{<Login/>} </TabPanel>
    <TabPanel>{<SignUp/>}</TabPanel>
  </TabPanels>
</Tabs>
    </Box>
    </Container>
  )
}

export default Home