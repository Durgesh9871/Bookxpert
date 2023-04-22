import { Box  , Heading, Image , Modal, Text} from '@chakra-ui/react'
import React from 'react'
import { ReadMore } from './Modal'


const BlogBox = () => {

    const date = new Date()
    // console.log(date.toJSON().slice(0,10))

  return (
    <Box m="auto" border="1px solid red">
       <Image src='https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506__340.jpg' alt='Dan Abramov' m="auto" width="1000px"  height="600px" />
       
       {/* text box ----------- */}
       <Box  p="20px" border="1px solid red" height="auto" m="auto"  width="1000px" backgroundColor="#f6f6f6" >
         <Heading fontWeight="500" color="#32292f" fontFamily="Arial" >Accounting </Heading>
         <Text m="10px 0px" color="orange.300">{date.toJSON().slice(0,10)}</Text>
         <Text color="#32292f" fontWeight="400" fontSize="15px" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quod dolorem error ad consectetur ex. Facilis voluptates ipsa consequuntur porro voluptatibus labore iure molestias vel minus sed, iusto harum illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa recusandae minus, harum error dicta architecto reiciendis suscipit. Impedit, sequi doloremque.</Text>
       <ReadMore />
       </Box>

    </Box>
  )
}

export  {BlogBox}
