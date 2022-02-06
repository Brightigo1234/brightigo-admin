import axios from 'axios';
import { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { Center, Flex, Heading } from '@chakra-ui/react';

function App() {
  const [name, setName] = useState('hello');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('api/allUsers')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        console.log(users);
        setName('irfan');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  return (
    <>
      <Center pt={'4rem'} mb='2rem'>
        <Heading>Brightigo Signups 📂</Heading>
      </Center>
      <Flex
        flexDir={'row-reverse'}
        flexWrap={'wrap'}
        alignItems='center'
        justify={'center'}
      >
        {users?.map((user) => (
          <UserCard
            name={user.name}
            email={user.email}
            profilePicture={user.profilePicture}
            userScore={user.test.score}
          />
        ))}
      </Flex>
    </>
  );
}

export default App;
