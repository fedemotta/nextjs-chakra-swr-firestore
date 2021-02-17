import { useState } from 'react';
import { Code, Editable, EditablePreview, EditableInput } from '@chakra-ui/react';
import { useDocument, useCollection } from '@nandorojo/swr-firestore';

const UserUpdate = ({ index }) => {
  const user = { id: index };
  const { data, update, error } = useDocument(`users/${user.id}`, {
    listen: true,
  });
  const users = useCollection('users', {
    orderBy: ['name', 'asc'],
  });

  const [userName, setUserName] = useState('');

  const [isInvalidUserName, setIsInvalidUserName] = useState(false);
  const [errorUserName, setErrorUserName] = useState('');

  const handleSubmit = (nextValue) => {
    let currentUserName = nextValue;
    //error handling
    let errorHandling = false;

    //validate data
    if (currentUserName === '') {
      setErrorUserName('Not valid user name');
      setIsInvalidUserName(true);
      errorHandling = true;
    } else if (users.data) {
      for (var i = 0; i < users.data.length; i++) {
        if (users.data[i].name === currentUserName) {
          //Only one user with the same name
          setErrorUserName('User ' + currentUserName + ' already exists');
          setIsInvalidUserName(true);
          errorHandling = true;
          break;
        }
      }
    } else {
      setErrorUserName('No users available');
      setIsInvalidUserName(true);
      errorHandling = true;
    }
    if (!errorHandling) {
      update({ name: currentUserName });
      setUserName(currentUserName);
      setErrorUserName('');
      setIsInvalidUserName(false);
    }
  };
  if (error) return <Code colorScheme="red">Error!</Code>;
  if (!data) return <Code colorScheme="yellow">Loading...</Code>;

  return (
    <Code colorScheme={isInvalidUserName ? 'red' : 'green'}>
      <Editable colorScheme="green" defaultValue={data.name} onSubmit={handleSubmit}>
        <EditablePreview />
        <EditableInput />
      </Editable>
      {errorUserName}
    </Code>
  );
};
export default UserUpdate;
