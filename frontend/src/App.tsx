import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import NavBar from "./components/NavBar"

export const App = () => (
  <ChakraProvider theme={theme}>

          <NavBar />
          
  </ChakraProvider>
)
