import React from 'react';
import {
  chakra,
  Link,
  Box,
  useColorModeValue,
  useDisclosure,
  Button,
  Flex,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa';

const NavBarChoc = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const cl = useColorModeValue('gray.800', 'white');
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <React.Fragment>
      <chakra.header
        h="full"
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Link display="flex" alignItems="center" href="/"></Link>
          <Box
            display={{
              base: 'none',
              md: 'inline-flex',
            }}
          >
            <HStack spacing={1}>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  color: cl,
                }}
                _focus={{
                  boxShadow: 'none',
                }}
              >
                Blog
              </Button>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  color: cl,
                }}
                _focus={{
                  boxShadow: 'none',
                }}
              >
                Pricing
              </Button>
            </HStack>
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center">
            <HStack spacing={1}>
              <Button colorScheme="blue" variant="ghost" size="sm">
                <Link as={RouterLink} to={'/signin'}>
                  Sign in
                </Link>
              </Button>
              <Button colorScheme="blue" variant="solid" size="sm">
                <Link as={RouterLink} to={'/signup'}>
                  Sign Up
                </Link>
              </Button>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{
                base: '0',
                md: '3',
              }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              display={{
                base: 'flex',
                md: 'none',
              }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{
                color: 'inherit',
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Box>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default NavBarChoc;
