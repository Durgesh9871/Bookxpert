import { Container, Heading, SimpleGrid, Stack  , Box , Text, Button} from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


const Footer = () => {

  const location = useLocation()

  return (
    <Box
    bg={(location.pathname == "/admin") ? "#171923" :'gray.50'}
    color={(location.pathname == "/admin") ? "grey" :'gray.700'}>
    <Container as={Stack} maxW={'6xl'} py={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
        <Stack align={'flex-start'}>
          <Heading>Company</Heading>
          <Link href={'#'}>About Us</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Careers</Link>
          <Link href={'#'}>Contact Us</Link>
        </Stack>

        <Stack align={'flex-start'}>
          <Heading>Support</Heading>
          <Link href={'#'}>Help Center</Link>
          <Link href={'#'}>Safety Center</Link>
          <Link href={'#'}>Community Guidelines</Link>
        </Stack>

        <Stack align={'flex-start'}>
          <Heading>Legal</Heading>
          <Link href={'#'}>Cookies Policy</Link>
          <Link href={'#'}>Privacy Policy</Link>
          <Link href={'#'}>Terms of Service</Link>
          <Link href={'#'}>Law Enforcement</Link>
        </Stack>
      </SimpleGrid>
    </Container>

    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={('gray.200', 'gray.700')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ md: 'space-between' }}
        align={{ md: 'center' }}>
        <Text>© Copyright Book Xpert. All Rights Reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <Button label={'Twitter'} href={'https://bookxpert.co.in/'}>
            <FaTwitter />
          </Button>
          <Button label={'YouTube'} href={'https://bookxpert.co.in/'}>
            <FaYoutube />
          </Button>
          <Button label={'Instagram'} href={'https://bookxpert.co.in/'}>
            <FaInstagram />
          </Button>
        </Stack>
      </Container>
    </Box>
  </Box>
  )
}

export  {Footer}
