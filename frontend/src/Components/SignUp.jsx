import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function SignUp() {
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [pic,setpic]=useState();
    const [password,setpassword]=useState();
  return (
    <VStack spacing='5px'>
      <FormControl >
        <FormLabel>Name</FormLabel>
           <Input 
             placeholder='Enter Your Name'
             onChange={(e)=>setname(e.target.value)}
           />
       </FormControl>
       <FormControl >
        <FormLabel>Email</FormLabel>
           <Input 
             placeholder='Enter Your Email'
             onChange={(e)=>setemail(e.target.value)}
           />
       </FormControl>
       <FormControl >
        <FormLabel>Pic</FormLabel>
           <Input 
             placeholder='image'
             onChange={(e)=>setimage(e.target.value)}
           />
       </FormControl>
       <FormControl >
        <FormLabel>Password</FormLabel>
           <Input 
             placeholder='Password'
             onChange={(e)=>setpassword(e.target.value)}
           />
       </FormControl>
    </VStack>
  )
}

export default SignUp