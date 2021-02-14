import { Code } from '@chakra-ui/react';
import { useDocument } from '@nandorojo/swr-firestore';

const UserName = ({ index }) => {
  const user = { id: index };
  const { data, update, error } = useDocument(`users/${user.id}`, {
    listen: true,
  });

  if (error) return <Code colorScheme="red">Error!</Code>;
  if (!data) return <Code colorScheme="yellow">Loading...</Code>;

  return <Code colorScheme="green">Name: {data.name}</Code>;
};
export default UserName;
