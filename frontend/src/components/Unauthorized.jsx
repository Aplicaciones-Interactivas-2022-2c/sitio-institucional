import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

export default function Unauthorized() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        401
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Unauthorized
      </Text>
      <Text color={'gray.500'} mb={6}>
        You do not have access permission to the requested page.
      </Text>

      <Link as={RouterLink} to={'/home'}>
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
}
