import { FormControl, FormLabel, Input, VStack,InputGroup,InputRightElement ,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';
function SignUp() {
    const [show,setshow]=useState(false);
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [pic,setpic]=useState("kuch bhi");
    const [password,setpassword]=useState();
    const handleClick=()=> setshow(!show);
    console.log(pic);
    const submitHandler=async (e)=>{
         e.preventDefault();
         
         const res=await axios.post('http://localhost:8081/api/user/',{name,email,password,pic});
         console.log(res);
    }
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
             onChange={(e)=>setpic(e.target.value)}
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
          Sign Up
       </Button>
    </VStack>

  )
}

export default SignUp