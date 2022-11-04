import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import ErrorMessage from '../ErrorMessage';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useLogin } from 'hooks/useLogin';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error } = useLogin();
  const bg = useColorModeValue('teal.500', 'teal.900');

  const handleSubmit = async event => {
    event.preventDefault();
    await login(email, password);
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Flex width="full" align="center" justifyContent="center" h="50vh">
      <Box
        p={8}

        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="test@gmail.com.com"
                size="lg"
                onChange={event => setEmail(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <InputGroup alignItems={'center'}>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="*******"
                  size="lg"
                  onChange={event => setPassword(event.currentTarget.value)}
                />
                <InputRightElement pr="3">
                  <IconButton
                    alignSelf="self-end"
                    aria-label="Show password"
                    size="sm"
                    onClick={handlePasswordVisibility}
                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button variant="outline" type="submit" width="full" mt={4} bg={bg}>
              {isLoading ? (
                <CircularProgress isIndeterminate size="24px" color="teal" />
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
