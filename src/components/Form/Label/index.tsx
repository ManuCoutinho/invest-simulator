import { forwardRef, ForwardRefRenderFunction } from "react"
import { FieldError, useForm } from "react-hook-form"
import { Input } from "./input"

import { FormControl, FormErrorMessage, FormLabel } from "./styles"

interface LabelProps {  
  name: string;
  label: string; 
  error?: FieldError;  
}

const LabelDefault:ForwardRefRenderFunction<HTMLInputElement, LabelProps> = 
    ({ name, label, error}, ref) => {   
      const { control } = useForm()
  return(
   <FormControl>     
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input name={name} control={control}/>
     {!!error && (<FormErrorMessage>{ error.message }</FormErrorMessage>)}
   </FormControl> 
  )
}
export const Label = forwardRef(LabelDefault);