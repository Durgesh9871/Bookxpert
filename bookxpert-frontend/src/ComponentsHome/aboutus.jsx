import { Box, Heading, Img , Text } from '@chakra-ui/react'
import React from 'react'
import about from "../Images/aboutus.jpg"

const Aboutus = () => {
  return (
    <Box border="1px  black" background="#f1f0f0" display="flex" flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} >
        {/* image box---- */}
        <Box border="1px  red" m={{base:"auto", md:"0px",lg:"0px" ,xl:"0px" ,"2xl":"0px"}} width={{base:"100%", sm: "80%", md: "50%", lg: "50%",xl: "50%",'2xl': "50%"}} p="25px" display="flex" justifyContent={{base:"center", sm: "center", md: "flex-end", lg: "flex-end",xl: "flex-end",'2xl': "flex-end"}}>
        <Img src={about} alt="about" width="auto" height={{base:"300px", sm: "350px", md: "400px", lg: "400px",xl: "400px",'2xl': "400px"}} />
        </Box>

        {/* detail box */}
        <Box border="1px  red" width={{base:"100%", sm: "100%", md: "50%", lg: "40%",xl: "40%",'2xl': "40%"}} p="15px" >
      <Heading color="#05a0e8" fontWeight="400" textAlign="center" borderBottom="1px solid #05a0e8" width="170px" m="auto"  p="5px" >About us</Heading>

      <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px">The business is led by a group of professionals from different fields and backgrounds who have the functional and technological experience. We're here to help MSMEs overcome their accounting and enforcement issues under different laws of the country.</Text>
     
       <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px">As per our Research, we found out that Large Number of MSMEs are incurring Huge Losses and are struggling daily to fulfill their accounting and enforcements needs due to Constraints with respect to their Location, Lack of Fully Trained People to execute their Accounting Works, Cost Overruns to Fulfill all enforcement needs, and Poor Quality of Services provided by existing lot. To solve these Problems, our team is committed to develop creative and cost-effective real-time customized solutions catering to your needs.</Text>
 
 <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px" >MBA from a world-famous B-School for Entrepreneurship, Chartered accountants with two and a half decades of experience in practice, Information Technology Specialist with ten years of experience in growth and solution design, Cost Accountant and foreign faculty for SAP ERP, make up the Board of Directors.</Text>
        </Box>

    </Box>
  )
}

export  {Aboutus}
