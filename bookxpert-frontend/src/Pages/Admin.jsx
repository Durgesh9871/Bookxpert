import {
    Box,
    Heading,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Image,
  } from "@chakra-ui/react";
  import React, { useEffect } from "react";
  import { shallowEqual, useDispatch, useSelector } from "react-redux";
  import {getUserData} from "../Redux/Authentication/action"
  
  const Admin = () => {
    const dispatch = useDispatch();
  
    const { userData } = useSelector((state) => {
      return {
        userData: state.ReducerAuth.userData,
        
      };
    }, shallowEqual);
  
    useEffect(() => {
      dispatch(getUserData);
    }, []);
  
    const userImage = {
      female: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
      male: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnyqrxK4zSTIzWLbCQSBMxYgT2B4U0jv6JMJ-Aezj-kkKqSl7GShdy8jPY0HowqY6KibmsWomG6k&usqp=CAU&ec=48600112",
    };
  
    console.log(userData)
  
    return (
     
        
        <Box background="#171923" height="100vh" >
          {/*  Main box of user  */}
          <Box 
            width={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "81%",
              "2xl": "100%",
            }}
            border="1px  red"
            height="auto"
            marginLeft="auto"
            p="2%"
          >
            <Heading color="#fff" fontWeight="500">
             Users
            </Heading>
  
            {/*  TABLE IS STARTED FROM HERE -------------------------- */}
            <TableContainer color="#fff">
              <Table variant="simple">
                <TableCaption placement="top">Users Data </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Photo</Th>
                    <Th>First Name</Th>
                    <Th>Email</Th>
                    <Th>Decrypted Password</Th>
                    <Th>Gender</Th>
                    <Th>Active User</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/*  Loop starts from here ------------------- */}
  
                  {userData?.length > 0 && 
                    userData?.map((item, i) => {
                      // console.log(item.signUpTime.slice(0,16));
                      return (
                        <Tr key={i}>
                          <Td>
                            <Image
                              src={
                                item.gender == "male"
                                  ? userImage.male
                                  : userImage.female
                              }
                              width="35px"
                              borderRadius="100%"
                              border="2px solid white"
                            />
                          </Td>
                          <Td>{item.name}</Td>
                          <Td>{item.email}</Td>
                          <Td>{item.password}</Td>
                          <Td>{item.gender}</Td>
                          <Td color={item.isActive == true ? "#31ae33" : "red"}>
                            {item.isActive == true
                              ? "Active"
                              : `Last seen ${item.signUpTime.slice(0,16)}`}
                          </Td>
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
     
    );
  };
  
  export { Admin };
  