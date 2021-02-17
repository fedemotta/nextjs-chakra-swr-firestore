import { Link as ChakraLink, Text, List, ListIcon, ListItem, UnorderedList, Divider } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import Users from '../components/UserRead';
import UserUpdate from '../components/UserUpdate';
import UserCreate from '../components/UserCreate';
import UserDelete from '../components/UserDelete';

const Index = () => (
  <Container height="180vh">
    <Hero />
    <Main>
      <Divider />
      <UnorderedList>
        <ListItem>
          <Text>Get the Users collection from Firestore</Text>
          <Users collection={'users'} />
        </ListItem>
        <ListItem>
          <Text>Edit a specific user in Firestore</Text>
          <UserUpdate index={'c7skcokGr24yDNwVcpJy'} />
        </ListItem>
        <ListItem>
          <Text>Add a new User into Firestore</Text>
          <UserCreate />
        </ListItem>
        <ListItem>
          <Text>Delete a specific User from Firestore</Text>
          <UserDelete />
        </ListItem>
      </UnorderedList>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://github.com/nandorojo/swr-firestore" flexGrow={1} mr={2}>
            SWR + Firestore <LinkIcon />
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
      <Text>Next ❤️ Chakra ⚡ SWR 🔥 Firestore</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
