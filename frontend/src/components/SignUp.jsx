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
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  RadioGroup,
  HStack,
  Radio,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import ErrorMessage from '../components/ErrorMessage';
import { useSignup } from 'hooks/useSignup';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [rol, setRol] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signup, error, isLoading } = useSignup();
  const bg = useColorModeValue('blue.500', 'blue.900');

  const handleSubmit = async event => {
    event.preventDefault();
    await signup(email, name, surname, rol, password);
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      justifyItems="center"
      h="90vh"
    >
      <Box
        bg={bg}
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        {isLoggedIn ? (
          <Box textAlign="center">
            <Text>{email} logged in!</Text>
            <Button
              variant="outline"
              width="full"
              mt={4}
              onClick={() => setIsLoggedIn(false)}
            >
              Sign out
            </Button>
          </Box>
        ) : (
          <>
            <Box textAlign="center">
              <Heading>Register</Heading>
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
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    placeholder="name"
                    size="lg"
                    onChange={event => setName(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Surname</FormLabel>
                  <Input
                    placeholder="surname"
                    size="lg"
                    onChange={event => setSurname(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel as="legend">Tipo de Usuarior</FormLabel>
                  <RadioGroup
                    onChange={setRol}
                    value={rol}
                    defaultValue="alumno"
                  >
                    <HStack spacing="24px">
                      <Radio value="profesor">Profesor</Radio>
                      <Radio value="alumno">Alumno</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
                <FormControl isRequired mt={6}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup alignContent="center">
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
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color="teal"
                    />
                  ) : (
                    'Sign Up'
                  )}
                </Button>
              </form>
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
}
