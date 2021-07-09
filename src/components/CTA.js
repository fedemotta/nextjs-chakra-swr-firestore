import { Link as ChakraLink, Button } from '@chakra-ui/react';

import { Container } from './Container';

export const CTA = () => (
  <Container flexDirection="row" position="fixed" bottom="0" width="100%" maxWidth="48rem" py={2}>
    <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" variantcolor="green">
        chakra-ui
      </Button>
    </ChakraLink>
    <ChakraLink isExternal href="https://github.com/nandorojo/swr-firestore" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" variantcolor="green">
        swr-firestore
      </Button>
    </ChakraLink>

    <ChakraLink isExternal href="https://github.com/fedemotta/nextjs-chakra-swr-firestore" flexGrow={3} mx={2}>
      <Button width="100%" variant="solid" variantcolor="green">
        View Repo
      </Button>
    </ChakraLink>
  </Container>
);
