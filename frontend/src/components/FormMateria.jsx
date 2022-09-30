import React from 'react';
import { Box, chakra, Stack, Button, FormControl, FormLabel, GridItem, Input, Select, SimpleGrid } from '@chakra-ui/react';

export const FormMateria = () => {
    return (


        <chakra.form
            method="POST"
            shadow="base"
            rounded={[null, "md"]}
            overflow={{
                sm: "hidden",
            }}
        >
            <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg="white"
                _dark={{
                    bg: "#141517",
                }}
                spacing={6}
            >
                <SimpleGrid columns={6} spacing={6}>
                    <FormControl as={GridItem} colSpan={[6, 6]}>
                        <FormLabel
                            htmlFor="nombre"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: "gray.50",
                            }}
                        >
                            Nombre
                        </FormLabel>
                        <Input
                            type="text"
                            name="nombre"
                            id="nombre"
                            autoComplete="given-name"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                        />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                            htmlFor="materia"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: "gray.50",
                            }}
                        >
                            Materia
                        </FormLabel>
                        <Input
                            type="text"
                            name="materia"
                            id="materria"
                            autoComplete="given-name"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                        />
                    </FormControl>

                   
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                            htmlFor="duracion"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: "gray.50",
                            }}
                        >
                            Duracion
                        </FormLabel>
                        <Input
                            type="int"
                            name="duracion"
                            id="duracion"
                            autoComplete="given-name"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                        />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                            htmlFor="frecuencia"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: "gray.50",
                            }}
                        >
                            Frecuencia
                        </FormLabel>
                        <Input
                            type="int"
                            name="frecuencia"
                            id="frecuencia"
                            autoComplete="given-name"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                        />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                            htmlFor="costo"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: "gray.50",
                            }}
                        >
                            Costo
                        </FormLabel>
                        <Input
                            type="int"
                            name="costo"
                            id="costo"
                            autoComplete="given-name"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                        />
                    </FormControl>
                  
                </SimpleGrid>
            </Stack>
            <Box
                px={{
                    base: 4,
                    sm: 6,
                }}
                py={3}
                bg="gray.50"
                _dark={{
                    bg: "#121212",
                }}
                textAlign="right"
            >
                <Button
                    type="submit"
                    colorScheme="brand"
                    _focus={{
                        shadow: "",
                    }}
                    fontWeight="md"
                >
                    Save
                </Button>
            </Box>
        </chakra.form>


    )
}