import { Box , Image , Heading , Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

const ServiceBox = ({item}) => {
  return (
    // height="50px" p="5px"
    
     <Box border="1px  blue"  width="250px" shadow="md" p="10px">
        <Box display="flex" alignItems="center">
     <AiOutlineArrowRight  style={{fontSize:"20px"}}/>
     <Heading ml="25px" p="10px" color="#556273" _hover={{color:"#05a0e8" , cursor:"pointer"}} fontWeight="700" fontSize="20px">{item.heading}</Heading>
     </Box>
       <Text ml="55px" textAlign="left" color="grey" fontSize="14px">{item.text}</Text>
     </Box>
       
    
  )
}

export  {ServiceBox}
