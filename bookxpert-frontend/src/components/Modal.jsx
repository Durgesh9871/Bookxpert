import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Button , Text
  } from '@chakra-ui/react'


const ReadMore = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Text color="red" fontWeight="400" mt='5px' cursor="pointer" display="inline"  _hover={{textDecoration: "underline" , color:'blue' }} onClick={onOpen}>Read More...</Text>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum unde sequi quis sunt soluta. Similique, minima qui dolorum omnis alias delectus? Sequi molestiae mollitia pariatur nemo. Sed, delectus deserunt.
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export  {ReadMore}
