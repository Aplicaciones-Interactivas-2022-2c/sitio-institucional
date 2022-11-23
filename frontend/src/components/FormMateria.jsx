import React, { useState } from 'react';
import {
  Box,
  Stack,
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  useColorModeValue,
  Flex,
  Heading,
  CircularProgress,
  Textarea,
  Radio,
  RadioGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useCreateCourse } from 'hooks/useCreateCourse';

export const FormMateria = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [duracion, setDuracion] = useState('');
  const [frecuencia, setFrecuencia] = useState('');
  const [costo, setCosto] = useState('');
  const [tipoDeClase, setTipoDeClase] = useState('');
  const { createCourse, isLoading, error } = useCreateCourse();
  const handleSubmit = async event => {
    event.preventDefault();
    const materia = {
      title,
      text,
      duracion,
      frecuencia,
      costo,
    };
    console.log(materia);
    await createCourse(materia);
  };

  const bg = useColorModeValue('blue.500', 'blue.900');
  return (
    <Flex width="full" align="center" justifyContent="center" h="90vh">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Crear Materia</Heading>
        </Box>
        <form onSubmit={handleSubmit}>
          <Stack px={4} py={5} p={[null, 6]} spacing={6}>
            <SimpleGrid columns={6} spacing={6}>
              <FormControl isRequired as={GridItem} colSpan={[6, 6]}>
                <FormLabel>Materia</FormLabel>
                <Input
                  type="text"
                  mt={1}
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={event => setTitle(event.currentTarget.value)}
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 6]}>
                <FormLabel>Descripcion</FormLabel>
                <Textarea
                  placeholder="Cuentanos brevemente de que se trata el curso o pon una frase atrapante"
                  size="sm"
                  resize="vertical"
                  onChange={event => setText(event.currentTarget.value)}
                />
              </FormControl>

              <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
                <FormLabel>Tipo De Clase</FormLabel>
                <RadioGroup value={frecuencia} onChange={setTipoDeClase}>
                  <Stack direction="row">
                    <Radio value="Grupal">Grupal</Radio>
                    <Radio value="Individual">Individual</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
                <FormLabel>Frecuencia</FormLabel>
                <RadioGroup value={frecuencia} onChange={setFrecuencia}>
                  <Stack direction="row">
                    <Radio value="Diaria">Diaria</Radio>
                    <Radio value="Semanal">Semanal</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
                <FormLabel>Duracion (hs)</FormLabel>
                <NumberInput
                  defaultValue={1}
                  precision={0}
                  keepWithinRange={true}
                  min={1}
                  onChange={setDuracion}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
                <FormLabel>Costo</FormLabel>
                <NumberInput
                  defaultValue={0}
                  precision={2}
                  keepWithinRange={true}
                  min={0}
                  onChange={setCosto}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </SimpleGrid>
          </Stack>
          <Button variant="outline" type="submit" width="full" my={4}>
            {isLoading ? (
              <CircularProgress isIndeterminate size="24px" color="teal" />
            ) : (
              'Crear Materia'
            )}
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
