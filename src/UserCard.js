import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function UserCard(props) {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        minH={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        m={['0.5rem', '2rem']}
      >
        <Avatar
          size={'xl'}
          src={props.profilePicture}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {props.name}
        </Heading>
        <Text fontWeight={400} color={'gray.500'} mb={4} maxW='12rem'>
          {props.email}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          Recent test Result
          <Box color={'blue.400'}>
            Score -{' '}
            {props.userScore >= 0 ? props.userScore + '/ 15' : 'No test given'}
          </Box>{' '}
        </Text>
      </Box>
    </Center>
  );
}
