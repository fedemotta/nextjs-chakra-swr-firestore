import { Text, Avatar, Wrap, WrapItem } from '@chakra-ui/react';
import { useCollection } from '@nandorojo/swr-firestore';

const Users = ({ collection }) => {
  const { data, update, error } = useCollection(collection, {
    listen: true,
  });

  if (error)
    return (
      <Wrap>
        <Text>Error!</Text>
      </Wrap>
    );
  if (!data)
    return (
      <Wrap>
        <Text>Loading...</Text>
      </Wrap>
    );

  const users = data.map((user) => (
    <WrapItem key={user.id}>
      <Avatar name={user.name} src={user.avatar} />
    </WrapItem>
  ));
  return <Wrap>{users}</Wrap>;
};
export default Users;
