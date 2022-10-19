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
  const bg = useColorModeValue('blue.500', 'blue.900');

  const handleSubmit = async event => {
    event.preventDefault();
    await login(email, password);
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Flex width="full" align="center" justifyContent="center" h="90vh">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg={bg}
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
                placeholder="test@test.com"
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
            <Button variant="outline" type="submit" width="full" mt={4}>
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
