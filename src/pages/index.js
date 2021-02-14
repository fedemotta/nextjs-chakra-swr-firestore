import {
  Link as ChakraLink,
  Text,
  Avatar,
  Wrap,
  WrapItem,
  List,
  ListIcon,
  ListItem,
  Code,
  UnorderedList,
  Divider,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { useCollection, useDocument } from '@nandorojo/swr-firestore';

const userAvatars = () => {
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
    <WrapItem key={user.id}>
      <Avatar name={user.name} src={user.avatar} />
    </WrapItem>
  ));
  return <Wrap>{users}</Wrap>;
};
const userCodeName = (value) => {
  const user = { id: value };
  const { data, update, error } = useDocument(`users/${user.id}`, {
    listen: true,
  });

  if (error) return <Code colorScheme="red">Error!</Code>;
  if (!data) return <Code colorScheme="yellow">Loading...</Code>;

  return <Code colorScheme="green">Name: {data.name}</Code>;
};

const Index = () => (
  <Container height="110vh">
    <Hero />
    <Main>
      <Divider />
      <UnorderedList>
        <ListItem>
          <Text>Get the Users collection from Firestore:</Text>
          {userAvatars()}
        </ListItem>
        <ListItem>
          <Text>Subscribe to a specific User document from Firestore:</Text>
          {userCodeName('c7skcokGr24yDNwVcpJy')}
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
