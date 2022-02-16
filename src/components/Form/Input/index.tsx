import { forwardRef, ForwardRefRenderFunction } from "react"
import { FieldError } from "react-hook-form"
import { FormControl, FormLabel, FormErrorMessage, InputBase } from "./styles"

interface InputProps {  
  name: string;
  label: string;
  placeholder?: string;
  error?: FieldError;  
}

const InputDefault:ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
    ({ name, label, error, placeholder, ...rest}, ref) => {   
  return(
   <FormControl>     
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputBase
        name={name}                       
        id={name}
        type="number"
        aria-required={true}
        aria-label={label}        
        {...rest}
        ref={ref}
        placeholder={placeholder}                   
      />
     {!!error && (<FormErrorMessage>{ error.message }</FormErrorMessage>)}
   </FormControl> 
  )
}
export const Input = forwardRef(InputDefault);