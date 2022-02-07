import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react"

interface ChakraHeadingProps extends HeadingProps {
  text: string
}

export function Heading({ text, ...rest }:ChakraHeadingProps){
  return(
    <ChakraHeading p={4} letterSpacing="tighter" {...rest}>
       {text}
    </ChakraHeading>
  )
}