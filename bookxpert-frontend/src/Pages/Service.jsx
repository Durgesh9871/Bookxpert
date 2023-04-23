import { Box, Heading , SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import {ServiceBox} from '../components/ServiceBox'

const Service = () => {

    const serviceDetail = [
        {
        id:1 , 
        text:"Book Experts ensures that there will not be any risk to your financial data as the data is automatically saved and protected" ,
        heading:"No Security Risk"
    },
    {
        id:2 , 
        text:"Your Account Manager takes care of your Books updating & validation on daily basis and provides you the required info to you and your people within minutes" ,
        heading:"Account Management"
    },
    {
        id:3 , 
        text:"Your chosen Experts will be provided the required data in full and in required format for statutory and other compliances in advance for filings/submissions." ,
        heading:"Statuory Compliance"
    },
    {
        id:4 , 
        text:"Your CA will be provided with all the required data like books, Statements, schedules, reconciliations, info required for reporting etc., well in advance and in reusable shape" ,
        heading:"Audit & Filling Of Returns"
    },
    {
        id:5 , 
        text:"In MSMEs capturing and organizing of data is a big task, we will handle the same with our advanced technologies and techniques by a least or no disturbance to the Business owners" ,
        heading:"Data Management"
    },
    {
        id:6, 
        text:"You are always connected to a single person for all your queries and required data" ,
        heading:"Awesome Support"
    },
    {
        id:7, 
        text:"Your necessities can be fulfilled on any day and any time through our online platform or through our special mobile app in your hand" ,
        heading:"Always Available"
    },
    {
        id:8 , 
        text:"Since the recording and verifications is done on day to day basis you are able to plan your taxes and commitments" ,
        heading:"Tax Planning"
    },
    {
        id:9, 
        text:"Cost and availability of funds will be directly proportional to quality and timeliness of our statements. With proper data and timeliness you can demand more funds at less cost now." ,
        heading:"Bank Compliances"
    },
    ]

  return (
    <Box  fontFamily="Poppins"  height="auto" width="80%" m="20px auto"  p="10px">
     <Heading fontWeight="400" color="#46484A" >Our Services</Heading>
    <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="12px" >To make you stress free and comfortable to do your business and help you to maximize your returns</Text>
       
       {/*  services start from here ----------------- */}
      
       <SimpleGrid  columns={3} spacing={10} mt="25px" >

            {
                serviceDetail.map((item , i)=>{
                    return  <ServiceBox  item={item} key={i} />
                })

             }
             
       </SimpleGrid>
      

    </Box>
  )
}

export  {Service}
