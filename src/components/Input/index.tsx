import { useState } from "react";
import { FieldError } from "react-hook-form";
import { FormControl, FormLabel, FormErrorMessage, InputBase } from "./styles";

interface InputProps {  
  name: string;
  label: string;
  type: string;
  error: FieldError

}
export function Input({ name, label, type, error}:InputProps){
  const isInvalid = useState(false);
  //aria-invalid={true}
  return(
   <FormControl >
     {!!label && 
      <FormLabel
        htmlFor={name}
        fontSize="md"
        fontWeight="medium"
        letterSpacing="tight"
      >
        {label}
      </FormLabel>}
    <InputBase 
      name={name}
      id={name}
      type={type}
     
    />
     {!!error && (<FormErrorMessage>{ error.message }</FormErrorMessage>)}
   </FormControl>
 
  )
}