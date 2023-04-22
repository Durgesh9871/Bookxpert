import { Box  , Button, Heading, Text , Img} from '@chakra-ui/react'
import React from 'react'
import Carousel from 'better-react-carousel'
import slide1 from "../Images/slide1.jpg"
import slide2 from "../Images/slide2.jpg"
import slide3 from "../Images/slide3.jpg"
import "./home.css"
import "../Header/navbar.css"
import { Link } from 'react-router-dom'
import { Aboutus } from '../ComponentsHome/aboutus'
import { Innovative } from '../ComponentsHome/Innovative'
import {Offer} from "../ComponentsHome/offer"
import innovative from "../Images/innovative.jpg"



const HomePage = () => {


  const myDot = ({isActive})=>{
    return ( <span
     style={{
       display: 'inline-block',
 
       height : isActive ? "8px" :"6px" , 
       width: isActive ? "8px" :"6px " ,
       borderRadius:"50%" , 
       background: isActive ? "#266de8" :"#ccc" , 
     }}
   ></span> )
    }

   const innovativeDetails = {
    image:innovative , 
    heading :"Innovative Solutions For Account Problems" ,
    textFirst :"Our model is flexible enough to support individual needs and circumstances that you can outsource totally or partially:" ,
    mainText1 :"In the current situation, a person will not able to justify the work because it needs a broad range of skills, including accounting, technology, law, patience in addition to sincerity and costs. People like this are hard to find and much harder to afford. MSMEs are unable to afford or retain talent." ,
    mainText2 :"All of the above features are included in our solution at a low cost and with ease of use. Our online site, applications, new technology, and techniques combine to eliminate the movement of people and physical data, allowing for day-to-day operations at no expense. With our technologies and techniques, data capture is flawless and fast." ,
    mainText3 :"A number of tests will be carried out, and deliveries will be made in a precisely planned shape and with precision. This would make life simpler for professionals, agencies, and business owners." ,
   mainText4 :"We assign experts in your company domain compliances who operate from various locations and at various times." ,
    lastText :"Owners eventually forget about keeping track, asking, worrying, perplexing, and losing. You will never have to bring bags containing files and directories, coupons, bills, or records since source documents can be checked instantly online." ,
  }

  const Details = {
    image:"https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=600" , 
    heading :"How It Works" ,
    textFirst :"To make you free and comfortable to do your business and help you to maximize your returns" ,
    mainText1 :"Our solution deploys the services of team comprising of accounting, law, and technology experts( instead of a conventional single individual who is neither trained nor updated.)",
    mainText2 :"Our specially designed app can receive all your data from your business locations eliminating the need for Physical Movement of People and Documents.(original source documents can be viewed always)" ,
    mainText3 :"Trained operators in a dedicated call centre can enter all data into an specially designed online platform ( can provide Owners up to date MIS and Alerts helping them to take Rational and Data Driven Decisions instead of depending solely on Intuition)" ,
   mainText4 :"Experts of accounting and compliances located in various geographical locations with special domain expertise in the Company’s Sector will validate data on a regular basis. ( a single person cannot expert in all domains)" ,
    lastText :"Our Team ensures that data is perfect and complete before sending it for compliances & your/our professionals’ use. (Professionals’ time is reduced and reliability improves)" ,
  }

  return (
    <Box border="2px  red"  >

     {/* carousel is here ---------- */}
     <Carousel cols={1} rows={1} gap={10} hideArrow={true} loop={true} showDots={true} dot = {myDot}   autoplay={2500} dotColorActive="#266de8">
      <Carousel.Item>
        <img height="40%" src={slide1} />
      </Carousel.Item>
      <Carousel.Item>
        <img height="40%" src={slide2} />
      </Carousel.Item>
      <Carousel.Item>
        <img hright="40%" src={slide3} />
      </Carousel.Item>
  
      {/* ... */}
    </Carousel>
   
   {/*  Text inside carousel --------- */}
     <Box position='absolute' shadow="base" zIndex="1"  top={{base:"68px", sm: "100px", md: "180px", lg: "200px",xl: "8%",'2xl': "10%"}} width="" right="6%" border="2px  red"  height="auto" p="15px">
      <Box width={{base:"155px", sm: "240px", md: "280px", lg: "300px",xl: "320px",'2xl': "320px"}} border="2px  red">
      <Text color="#0b589e" fontSize={{base:"8px", sm: "16px", md: "18px", lg: "24px",xl: "28px",'2xl': "28px"}} fontWeight="500"  mb="-2px">Now</Text>
      <Text color="#022d54" fontSize={{base:"10px", sm: "16px", md: "24px", lg: "32px",xl: "34px",'2xl': "36px"}} fontWeight="500" mb="4px" lineHeight={{base:"16px", sm: "16px", md: "21px", lg: "35px",xl: "35px",'2xl': "35px"}}>"Fulfillment of Your dreams"</Text>
      {/* <Text color="#022d54" fontSize={{base:"36px", sm: "20px", md: "24px", lg: "32px",xl: "36px",'2xl': "36px"}} fontWeight="500" mt={{base:"36px", sm: "-13px", md: "-21px", lg: "-21px",xl: "-21px",'2xl': "-21px"}}>Your dreams"</Text> */}
      <Text color="#0b589e" fontSize={{base:"8px", sm: "16px", md: "18px", lg: "24px",xl: "28px",'2xl': "28px"}} fontWeight="500" mt="-8px">has a new address!</Text>
      </Box>

      <Box border="1px  red" width={{base:"155px", sm: "240px", md: "280px", lg: "400px",xl: "400px",'2xl': "400px"}} lineHeight={{base:"13px", sm: "13px", md: "21px", lg: "21px",xl: "21px",'2xl': "21px"}}>
      <Text color="#000" fontSize={{base:"4px", sm: "12px", md: "14px", lg: "16px",xl: "18px",'2xl': "18px"}} fontWeight="500">We're here to help MSMEs overcome Accounting and Enforcement Issues.  </Text>

      <a target={"_blank"} href="https://bookxpert.co.in/index.html#services"><Button colorScheme='facebook'  size={{base:"sm", sm: "sm", md: "md", lg: "md",xl: "md",'2xl': "md"}}  fontWeight="400" borderRadius="4px" mt={{base:"0px",xl: "40px",'2xl': "40px" }} >Get More Info</Button> </a>
      </Box>
     </Box>

 
 {/*  zig - zag format started from here according to problem statement --------------------- */}
     {/*  About us section ------------------ */}

     < Aboutus />
      
      {/* third section  */}

     <Innovative innovativeDetails={innovativeDetails} />

      {/* Third section end here ---------- */}

      {/* fourth section  */}
    < Offer />

   {/* fifth ----------innovative component reuse -- section  */}
   <Innovative innovativeDetails={Details} />


    </Box>
  )
}

export  {HomePage}
