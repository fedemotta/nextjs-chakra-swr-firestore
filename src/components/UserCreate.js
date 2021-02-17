import { FormErrorMessage, FormControl, FormLabel, Input, Button, ButtonGroup } from '@chakra-ui/react';
import { useCollection } from '@nandorojo/swr-firestore';
import { useState } from 'react';

const UserCreate = () => {
  const { data, add } = useCollection('users', {
    orderBy: ['name', 'asc'],
  });
  const [userName, setUserName] = useState('');
  const [isInvalidUserName, setIsInvalidUserName] = useState(false);
  const [errorUserName, setErrorUserName] = useState('');

  const [userAvatar, setUserAvatar] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    //user form data
    let currentUserName = event.target.name.value;
    let currentUserAvatar = event.target.avatar.value;

    //manage error
    let error = false;

    //set use state default values
    setUserName(currentUserName);
    setUserAvatar(currentUserAvatar);
    setIsInvalidUserName(false);
    setErrorUserName('');

    //show loading
    setIsLoading(true);

    //validate data
    if (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].name === currentUserName) {
          //Only one user with the same name
          setErrorUserName('User ' + currentUserName + ' already exists');
          setIsInvalidUserName(true);
          error = true;
          break;
        }
      }
    }

    // calling this will automatically update your global cache & Firestore
    if (!error) {
      //add the new user
      add({
        name: currentUserName,
        avatar: currentUserAvatar,
      });
      //hide errors
      setIsInvalidUserName(false);
      setErrorUserName('');
    }
    //disable loader
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="name" isRequired isInvalid={isInvalidUserName}>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Name" onChange={(event) => setUserName(event.currentTarget.value)} />
        <FormErrorMessage>{errorUserName}</FormErrorMessage>
      </FormControl>
      <FormControl id="avatar">
        <FormLabel>Avatar</FormLabel>
        <Input placeholder="Avatar" onChange={(event) => setUserAvatar(event.currentTarget.value)} />
      </FormControl>
      <ButtonGroup variant="outline" spacing="6">
        <Button isLoading={isLoading} type="submit" colorScheme="blue">
          Save
        </Button>
        <Button type="reset">Cancel</Button>
      </ButtonGroup>
    </form>
  );
};

export default UserCreate;
