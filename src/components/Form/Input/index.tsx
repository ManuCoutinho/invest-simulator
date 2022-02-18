import { forwardRef, ForwardRefRenderFunction, useContext } from "react"
import { FieldErrors } from "react-hook-form"
import { ThemeContext } from "styled-components"
import { FormControl, FormLabel, FormErrorMessage, InputBase } from "./styles"

interface InputProps {  
  name: string;
  label: string;
  error?: FieldErrors;   
}

const InputDefault:ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
    ({ name, label, error, ...rest }, ref) => {
      const theme = useContext(ThemeContext);   
  return(
   <FormControl focus={!!error ? theme.colors.red : theme.colors.black}>     
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputBase
        name={name}                       
        id={name}
        type="number"
        aria-required={true}
        aria-label={label}
        border={!!error ? theme.colors.red : theme.colors.black}       
        {...rest}
        ref={ref}                        
      />
     {!!error && (<FormErrorMessage>{ error?.message }</FormErrorMessage>)}
   </FormControl> 
  )
}
export const Input = forwardRef(InputDefault);