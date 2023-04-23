import React from 'react'
import { Box  , Button, Heading, Text , Img} from '@chakra-ui/react'

const Innovative = ({innovativeDetails}) => {
  // console.log(innovativeDetails ,"js")
  return (
    <Box  height="auto" width="80%" m="20px auto"  p="10px">
    <Heading fontWeight="400" color="#46484A" fontFamily="Raleway">{innovativeDetails?.heading}</Heading>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="12px" >{innovativeDetails?.textFirst}</Text>
  
  {/* main section ---------------------------------------------------------Image box */}
  <Box width="100%" border="2px  black"  display="flex" p="10px" mt="10px"  flexDirection={{base:"column-reverse", sm: "column-reverse", md: "row", lg: "row",xl: "row",'2xl': "row"}}  >
{/*  description box -------------------------------- */}
  <Box width={{base:"100%" ,md:"50%" ,lg:"50%" ,xl:"50%" ,"2xl":"50%"}} border="2px  black" p="10px">
    <Text color="#7d7b7b" fontWeight="400" fontSize="15px" >{innovativeDetails?.mainText1}</Text>
   <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >{innovativeDetails?.mainText2}</Text>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px">{innovativeDetails?.mainText3}</Text>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >{innovativeDetails?.mainText4}</Text>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >{innovativeDetails?.lastText}</Text>
  </Box>

      {/* image box */}
      <Box width={{base:"100%",sm:"50%",md:"50%" ,lg:"50%" ,xl:"50%" ,"2xl":"50%"}} pb="5px" border="2px  black" m={{base:"auto" ,md:"0px" ,lg:"0px" ,xl:"0px" ,"2xl":"0px"}}>
 <Img src={innovativeDetails?.image} width="100%" alt="innovative" />
  </Box>

  </Box>
  
  </Box>
  )
}

export  {Innovative}
