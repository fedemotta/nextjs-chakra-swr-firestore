import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'Chackra UI and SWR Firestore Example',
};
