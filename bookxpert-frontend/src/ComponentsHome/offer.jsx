import React from 'react'
import about from "../Images/aboutus.jpg"
import { Box  , Button, Heading, Text , Img} from '@chakra-ui/react'
import offer from "../Images/offer.jpg"


const Offer = () => {
  return (
    <Box border="2px  red" height="auto" width="90%" m="20px auto"  p="10px" backgroundImage={offer} color="#ffffff" >

    <Heading fontWeight="400"  fontFamily="Raleway" textAlign="center">What We Offer</Heading>
<Text  fontWeight="400" fontSize="15px" mt="12px" textAlign="center">Our model is flexible enough to support individual needs and circumstances that you can outsource totally or partially.

{/* main section */}
<Box width="100%" border="2px  black"  display="flex" p="10px" mt="10px"  flexDirection={{base:"column-reverse", sm: "column-reverse", md: "row", lg: "row",xl: "row",'2xl': "row"}}  >
{/* image */}
<Box border="1px  red" m={{base:"auto", md:"0px",lg:"0px" ,xl:"0px" ,"2xl":"0px"}} width={{base:"100%", sm: "80%", md: "50%", lg: "50%",xl: "50%",'2xl': "50%"}} p="25px" display="flex" justifyContent={{base:"center", sm: "center", md: "flex-end", lg: "flex-end",xl: "flex-end",'2xl': "flex-end"}} >
      <Img src={about} alt="about" width="auto" height={{base:"200px", sm: "350px", md: "300px", lg: "400px",xl: "400px",'2xl': "400px"}} />
 </Box>
{/* details */}
<Box border="1px  red" width={{base:"100%", sm: "100%", md: "50%", lg: "40%",xl: "40%",'2xl': "40%"}} p="15px" textAlign="left">
  <ul>
    <li><Text  fontWeight="400" fontSize="15px" >For example you can generate sales in our application at your location and the rest can be outsourced;</Text></li>
    <li>   <Text  fontWeight="400" fontSize="15px" mt="15px" >You can demand the deliveries required and their frequency.</Text></li>
  <li>  <Text  fontWeight="400" fontSize="15px" mt="15px">You can get the reports you need in your mobile at your fingertips; and more.</Text></li>
 <li><Text  fontWeight="400" fontSize="15px" mt="15px">All of this without asking or waiting.</Text></li>
  </ul>
</Box>

</Box>

</Text>

    </Box>
  )
}

export  {Offer}
