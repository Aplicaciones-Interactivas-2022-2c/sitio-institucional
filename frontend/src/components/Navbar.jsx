import React from 'react';
import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  Link,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { AiFillGift, AiOutlineMenu, AiTwotoneHome } from 'react-icons/ai';
import { FaSun, FaMoon, FaBell, FaClipboardCheck, FaRss } from 'react-icons/fa';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { HiCollection, HiCode } from 'react-icons/hi';
import { BsGearFill } from 'react-icons/bs';
import { MdKeyboardArrowRight, MdHome } from 'react-icons/md';
import { useLogout } from 'hooks/useLogout';
import { useAuthContext } from 'hooks/useAuthContext';

const Navbar = props => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchDarkModeIcon = useColorModeValue(FaMoon, FaSun);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const ColorModeButton = () => {
    return (
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
        icon={<SwitchDarkModeIcon />}
      />
    );
  };

  const RegisterButtons = () => {
    return (
      <HStack spacing={3}>
        <Link as={RouterLink} to={'/signin'}>
          <Button colorScheme="blue" variant="ghost" size="sm">
            Sign in
          </Button>
        </Link>
        <Link as={RouterLink} to={'/signup'}>
          <Button colorScheme="blue" variant="solid" size="sm">
            Sign Up
          </Button>
        </Link>
      </HStack>
    );
  };

  const UserAvatar = () => {
    return (
      <HStack spacing={3}>
        <Avatar
          as={IconButton}
          name={user.name + ' ' + user.surname}
          src={user.avatar}
        />
        <Button
          px={3}
          onClick={logout}
          colorScheme="blue"
          variant="solid"
          size="sm"
        >
          Log out
        </Button>
      </HStack>
    );
  };

  const UserMenu = () => {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
    const color = useColorModeValue('gray.600', 'gray.300');

    const NavItem = props => {
      const { icon, children, ...rest } = props;
      return (
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color="inherit"
          _dark={{
            color: 'gray.400',
          }}
          _hover={{
            bg: 'gray.100',
            _dark: {
              bg: 'gray.900',
            },
            color: 'gray.900',
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
        >
          {icon && (
            <Icon
              mx="2"
              boxSize="4"
              _groupHover={{
                color: color,
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      );
    };

    const SidebarContent = props => (
      <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg="white"
        _dark={{
          bg: 'gray.800',
        }}
        border
        color="inherit"
        borderRightWidth="1px"
        w="60"
        {...props}
      >
        <Flex px="4" py="5" align="center">
          <Text
            fontSize="2xl"
            ml="2"
            color="brand.500"
            _dark={{
              color: 'white',
            }}
            fontWeight="semibold"
          >
            Choc UI
          </Text>
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
          color="gray.600"
          aria-label="Main Navigation"
        >
          <NavItem icon={MdHome}>Home</NavItem>
          <NavItem icon={FaRss}>Articles</NavItem>
          <NavItem icon={HiCollection}>Collections</NavItem>
          <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
          <NavItem icon={HiCode} onClick={integrations.onToggle}>
            Integrations
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={integrations.isOpen && 'rotate(90deg)'}
            />
          </NavItem>
          <Collapse in={integrations.isOpen}>
            <NavItem pl="12" py="2">
              Shopify
            </NavItem>
            <NavItem pl="12" py="2">
              Slack
            </NavItem>
            <NavItem pl="12" py="2">
              Zapier
            </NavItem>
          </Collapse>
          <NavItem icon={AiFillGift}>Changelog</NavItem>
          <NavItem icon={BsGearFill}>Settings</NavItem>
        </Flex>
      </Box>
    );

    return (
      <Box
        as="section"
        bg="gray.50"
        _dark={{
          bg: 'gray.700',
        }}
        minH="100vh"
      >
        <SidebarContent
          display={{
            base: 'none',
            md: 'unset',
          }}
        />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box
          ml={{
            base: 0,
            md: 60,
          }}
          transition=".3s ease"
        >
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg="white"
            _dark={{
              bg: 'gray.800',
            }}
            borderBottomWidth="1px"
            color="inherit"
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            />
            <InputGroup
              w="96"
              display={{
                base: 'none',
                md: 'flex',
              }}
            >
              <InputLeftElement color="gray.500">
                <FiSearch />
              </InputLeftElement>
              <Input placeholder="Search for articles..." />
            </InputGroup>

            <Flex align="center">
              <Icon color="gray.500" as={FaBell} cursor="pointer" />
              <Avatar
                ml="4"
                size="sm"
                name="anubra266"
                src="https://avatars.githubusercontent.com/u/30869823?v=4"
                cursor="pointer"
              />
            </Flex>
          </Flex>

          <Box as="main" p="4">
            {/* Add content here, remove div below  */}
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
          </Box>
        </Box>
      </Box>
    );
  };

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
          <Box
            display={{
              base: 'none',
              md: 'inline-flex',
            }}
          >
            <HStack spacing={1}>
              <Link as={RouterLink} to={'/home'}>
                <IconButton
                  colorScheme="blue"
                  aria-label="Search database"
                  icon={<AiTwotoneHome />}
                />
              </Link>
            </HStack>
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center">
            <HStack spacing={1}>
              {(!user && <RegisterButtons />) || <UserAvatar />}
              <ColorModeButton />
            </HStack>
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

export default Navbar;
