import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface ChakraInputProps extends InputProps {
  name: string;
  label: string;
  type: string;
  error: FieldError

}
export function Input({ name, label, type, error, ...rest }:ChakraInputProps){
  return(
   <FormControl isInvalid={!!error}>
     {!!label && 
      <FormLabel
        htmlFor={name}
        fontSize="md"
        fontWeight="medium"
        letterSpacing="tight"
      >
        {label}
      </FormLabel>}
    <ChakraInput 
      name={name}
      id={name}
      type={type}
      bgColor="transparent"      
      variant="flushed"
      borderColor="black"        
      {...rest}
    />
     {!!error && (<FormErrorMessage>{ error.message }</FormErrorMessage>)}
   </FormControl>
 
  )
}