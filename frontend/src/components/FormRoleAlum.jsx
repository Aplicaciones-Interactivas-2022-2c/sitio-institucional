import React from 'react';
import { Box, chakra, Stack, Button, FormControl, FormLabel, GridItem, Input, Select, SimpleGrid } from '@chakra-ui/react';

export const FormulariosN = () => {
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
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                            htmlFor="fecha_nacimiento"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: "gray.50",
                            }}
                        >
                            Fecha Nacimiento
                        </FormLabel>
                        <Input
                            type="text"
                            name="fecha_nacimiento"
                            id="fecha_nacimiento"
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
                            htmlFor="estudios_cursados"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: "gray.50",
                            }}
                        >
                            Estudios Cursados
                        </FormLabel>
                        <Input
                            type="text"
                            name="estudios_cursados"
                            id="estudios_cursados"
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
