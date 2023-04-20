import React from 'react'
import { Box  , Button, Heading, Text , Img} from '@chakra-ui/react'
import innovative from "../Images/innovative.jpg"

const Innovative = () => {
  return (
    <Box border='2px  red' height="auto" width="80%" m="20px auto"  p="10px">
    <Heading fontWeight="400" color="#46484A" fontFamily="Raleway">Innovative Solutions For Account Problems</Heading>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="12px" >Our model is flexible enough to support individual needs and circumstances that you can outsource totally or partially:</Text>
  
  {/* main section ---------------------------------------------------------Image box */}
  <Box width="100%" border="2px  black"  display="flex" p="10px" mt="10px"  flexDirection={{base:"column-reverse", sm: "column-reverse", md: "row", lg: "row",xl: "row",'2xl': "row"}}  >
{/*  description box -------------------------------- */}
  <Box width={{base:"100%" ,md:"50%" ,lg:"50%" ,xl:"50%" ,"2xl":"50%"}} border="2px  black" p="10px">
    <Text color="#7d7b7b" fontWeight="400" fontSize="15px" >In the current situation, a person will not able to justify the work because it needs a broad range of skills, including accounting, technology, law, patience in addition to sincerity and costs. People like this are hard to find and much harder to afford. MSMEs are unable to afford or retain talent.</Text>
   <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >All of the above features are included in our solution at a low cost and with ease of use. Our online site, applications, new technology, and techniques combine to eliminate the movement of people and physical data, allowing for day-to-day operations at no expense. With our technologies and techniques, data capture is flawless and fast.</Text>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px">A number of tests will be carried out, and deliveries will be made in a precisely planned shape and with precision. This would make life simpler for professionals, agencies, and business owners.</Text>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >We assign experts in your company domain compliances who operate from various locations and at various times.</Text>
  <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >Owners eventually forget about keeping track, asking, worrying, perplexing, and losing. You will never have to bring bags containing files and directories, coupons, bills, or records since source documents can be checked instantly online.</Text>
  </Box>

      {/* image box */}
      <Box width={{base:"100%",sm:"50%",md:"50%" ,lg:"50%" ,xl:"50%" ,"2xl":"50%"}} pb="5px" border="2px  black" m={{base:"auto" ,md:"0px" ,lg:"0px" ,xl:"0px" ,"2xl":"0px"}}>
 <Img src={innovative} width="100%" alt="innovative" />
  </Box>

  </Box>
  
  </Box>
  )
}

export  {Innovative}
