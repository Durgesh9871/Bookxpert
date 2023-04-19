import { Box } from '@chakra-ui/react'
import React from 'react'
import Carousel from 'better-react-carousel'




const HomePage = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const myDot = ({isActive})=>{
    return ( <span
     style={{
       display: 'inline-block',
 
       height : isActive ? "7.5px" :"6px" , 
       width: isActive ? "7px" :"6px " ,
       borderRadius:"50%" , 
       background: isActive ? "#266de8" :"#ccc" , 
     }}
   ></span> )
    }


  return (
    <Box border="2px solid red"  >
     
     <Carousel cols={1} rows={1} gap={10} hideArrow={true} loop={true} showDots={true} dot = {myDot}   autoplay={3000} dotColorActive="#266de8">
      <Carousel.Item>
        <img width="40%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="40%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="40%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
  
      {/* ... */}
    </Carousel>
   

    </Box>
  )
}

export  {HomePage}
