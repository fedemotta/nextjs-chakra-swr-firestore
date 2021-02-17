import { Link as ChakraLink, Text, List, ListIcon, ListItem, UnorderedList, Divider } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import Avatars from '../components/Avatars';
import UserName from '../components/UserName';
import NewUser from '../components/NewUser';
import DeleteUser from '../components/DeleteUser';

const Index = () => (
  <Container height="180vh">
    <Hero />
    <Main>
      <Divider />
      <UnorderedList>
        <ListItem>
          <Text>Get the Users collection from Firestore</Text>
          <Avatars collection={'users'} />
        </ListItem>
        <ListItem>
          <Text>Subscribe to a specific User document from Firestore</Text>
          <UserName index={'c7skcokGr24yDNwVcpJy'} />
        </ListItem>
        <ListItem>
          <Text>Add a new User into Firestore</Text>
          <NewUser />
        </ListItem>
        <ListItem>
          <Text>Delete a User from Firestore</Text>
          <DeleteUser />
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
