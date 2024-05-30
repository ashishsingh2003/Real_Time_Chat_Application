import { FormControl, FormLabel, Input, VStack,InputGroup,InputRightElement ,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';
function Login() {
  const [show,setshow]=useState(false);
  
  const [email,setemail]=useState();
 
  const [password,setpassword]=useState();
  const handleClick=()=> setshow(!show);
  const submitHandler=async (e)=>{
      e.preventDefault();
      const res=await axios.post('http://localhost:8081/api/user/login',{email,password});
      console.log(res);

  }
  return (
    <VStack spacing='5px'
  
    >
     
       <FormControl >
        <FormLabel>Email</FormLabel>
           <Input 
             placeholder='Enter Your Email'
             onChange={(e)=>setemail(e.target.value)}
           />
       </FormControl>
      
       <FormControl >
        <FormLabel>Password</FormLabel>
        <InputGroup>
           <Input 
           type={show ? "text":"password"}
             placeholder='Password'
             onChange={(e)=>setpassword(e.target.value)}
           />
           <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show? "Hide" :"Show"}

                </Button>
           </InputRightElement>
           
           </InputGroup>
       </FormControl>
       <Button
        colorScheme="blue"
        width="100%"
        style={{marginTop:15}}
        onClick={submitHandler}
        
       >
        
          Login
       </Button>
       <Button
        width="100%"
        colorScheme='red'
        marginTop="15"
        >
          Get Guest User Credentials
       </Button>
    </VStack>

  )
}

export default Login