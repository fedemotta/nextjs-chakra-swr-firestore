import { Link as ChakraLink, Text, Avatar, Wrap, WrapItem, Code, List, ListIcon, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { useCollection } from '@nandorojo/swr-firestore';

function getUsers() {
  const { data, update, error } = useCollection(`users`);

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
    <WrapItem>
      <Avatar key={user.id} name={user.name} src={user.avatar} />
    </WrapItem>
  ));
  return <Wrap>{users}</Wrap>;
}
const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>Users collection created in Firestore:</Text>
      {getUsers()}

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
