import { Box  , Image} from '@chakra-ui/react'
import React from 'react'

const BlogBox = () => {
  return (
    <Box m="auto" border="1px solid red">
       <Image src='https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506__340.jpg' alt='Dan Abramov' m="auto" width="1000px"  height="600px" />
      
    </Box>
  )
}

export  {BlogBox}
