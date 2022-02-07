import { Box, Flex } from "@chakra-ui/react"
import { Heading } from "../src/components/Heading"
import { Form } from "./components/Form"

function App() {  
  return (
    <Box as="main" m="auto" bg="gray.100" w={1280} px="6" py="8">
      <Heading as="h1" text="Simulador de Investimentos" textAlign="center" mb={9}/>
      <Flex direction="column">
        <Heading text="Simulador" fontSize="2xl"/>
        <Form/>        
        <Box as="form"></Box>
      </Flex>
    </Box>
  )
}

export default App
