import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="60vh">
    <Heading fontSize="3vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'nextjs-chakra-swr-firestore',
};
