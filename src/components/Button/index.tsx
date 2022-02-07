import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react"

interface ChakraButtonProps extends ButtonProps {
text: string;
}

export function Button({ text, type, ...rest }: ChakraButtonProps){
  return(
    <ChakraButton type={type} {...rest} fontWeight="bold" fonttSize="lg">
      {text}
    </ChakraButton>
  )
}