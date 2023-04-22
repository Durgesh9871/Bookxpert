import { Box  , Heading, Image , Modal, Text} from '@chakra-ui/react'
import React from 'react'
import { ReadMore } from './Modal'
import "./blog.css"


const BlogBox = ({item}) => {

    const date = new Date()
    // console.log(date.toJSON().slice(0,10))

  return (
    <Box m="25px auto" >
       <Image src={item.image} alt={item.heading} m="auto" width="1000px"  height={{base:"100%",md:"500px" ,lg:"600px",xl:"600px", "2xl":"600px"}} />
       
       {/* text box ----------- */}
       <Box  p="20px"  height="auto" m="auto"  width={{base:"100%" ,xl:"1000px", "2xl":"1000px"}} backgroundColor="#f6f6f6" >
         <Heading fontWeight="500" color="#32292f" fontFamily="Arial" >{item.heading} </Heading>
         <Text m="10px 0px" color="orange.300">{date.toJSON().slice(0,10)}</Text>
         <Text className='control' m="10px 0px" color="#32292f" fontWeight="400" fontSize="15px" >{item.description}</Text>
       <ReadMore item={item}/>
       </Box>

    </Box>
  )
}

export  {BlogBox}
