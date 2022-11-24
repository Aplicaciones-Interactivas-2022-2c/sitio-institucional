import React from 'react';
import { Box, chakra, Stack, Button, FormControl, FormLabel, GridItem, Input, Select, SimpleGrid } from '@chakra-ui/react';

export const FormRegistro = (id ) => {
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
                <SimpleGrid columns={8} spacing={5}>
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

                    <FormControl as={GridItem} colSpan={[6, 6]}>
                        <FormLabel
                            htmlFor="apellido"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: "gray.50",
                            }}
                        >
                            Apellido
                        </FormLabel>
                        <Input
                            type="text"
                            name="apellido"
                            id="apellido"
                            autoComplete="family-name"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                        />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 6]}>
                        <FormLabel
                            htmlFor="telefono"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: "gray.50",
                            }}
                        >
                            Telefono
                        </FormLabel>
                        <Input
                            type="text"
                            name="telefono"
                            id="telefono"
                            autoComplete="telefono"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                        />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 6]}>
                        <FormLabel
                              htmlFor="correo"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                  color: "gray.50",
                              }}
                          >
                              Correo
                          </FormLabel>
                          <Input
                              type="text"
                              name="correo"
                              id="correo"
                              autoComplete="correo"
                              mt={1}
                              focusBorderColor="brand.400"
                              shadow="sm"
                              size="sm"
                              w="full"
                              rounded="md"
                          />
                        
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 6]}>
                        <FormLabel
                            htmlFor="role"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: "gray.50",
                            }}
                        >
                            Role
                        </FormLabel>
                        <Input
                            type="text"
                            name="role"
                            id="role"
                            autoComplete="role"
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
