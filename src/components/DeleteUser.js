import { FormErrorMessage, FormControl, FormLabel, Select, Button, ButtonGroup } from '@chakra-ui/react';
import { useCollection, deleteDocument } from '@nandorojo/swr-firestore';
import { useState } from 'react';

const DeleteUser = () => {
  const { data, update, error } = useCollection('users', {
    orderBy: ['name', 'asc'],
  });
  const [user, setUser] = useState('');
  const [isInvalidUser, setIsInvalidUser] = useState(false);
  const [errorUser, setErrorUser] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    //user form data
    let currentUser = event.target.user.value;
    //set use state default value
    setUser(currentUser);

    //manage error (default error until we found the user)
    let error = true;

    //show loading
    setIsLoading(true);

    //validate data
    if (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === currentUser) {
          //Only delete if user exists
          error = false;
          setErrorUser('');
          setIsInvalidUser(false);
          break;
        }
      }
    }

    // calling this will automatically update your global cache & Firestore
    if (!error) {
      //delete the user
      deleteDocument(`users/${currentUser}`);

      //hide errors
      setIsInvalidUser(false);
      setErrorUser('');
    } else {
      setErrorUser('User ' + currentUser + ' not exists');
      setIsInvalidUser(true);
    }
    //disable loader
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="user" isRequired isInvalid={isInvalidUser}>
        <FormLabel>User</FormLabel>
        <Select placeholder="Select user" onChange={(event) => setUser(event.currentTarget.value)}>
          {error ? (
            <option>Error!</option>
          ) : !data ? (
            <option>Loading ...</option>
          ) : (
            data.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))
          )}
        </Select>

        <FormErrorMessage>{errorUser}</FormErrorMessage>
      </FormControl>
      <ButtonGroup variant="outline" spacing="6">
        <Button isLoading={isLoading} type="submit" colorScheme="red">
          Delete
        </Button>
        <Button type="reset">Cancel</Button>
      </ButtonGroup>
    </form>
  );
};

export default DeleteUser;
