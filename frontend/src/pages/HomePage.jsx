import React from 'react';
import { Box, chakra, Flex, Stack, Image } from '@chakra-ui/react';
import Searcher from 'components/Searcher';
import Cards from 'components/Cards';
import Footer from 'components/Footer';

export const HomePage = () => {
  return (
    <Box p={10} h="100%">
      <Searcher></Searcher>
      <Cards></Cards>
      <Footer></Footer>
    </Box>
  );
};
