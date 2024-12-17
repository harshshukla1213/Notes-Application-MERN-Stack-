import {
    Button,
    Flex,
    HStack,
    Heading,
    Image,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';

  
  export default function Homepage() {
    const nav = useNavigate();
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} alignItems={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'#5b9cf2'} as={'span'}>
                Your Notes
              </Text>{' '}
            </Heading>
           
            <Stack direction={'row'} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: '#01d8fb',
                }}
                onClick={()=>{
                    nav("/login")
                }}>
                Log In
              </Button>
              <Button rounded={'full'} onClick={()=>{nav("/register")}}>Sign Up</Button>
            </Stack>
            <Spacer />
          
          </Stack>
        </Flex>
   
      </Stack>
    );
  }