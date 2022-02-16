import { useController, UseControllerProps } from "react-hook-form"

import { InputBase } from "../Input/styles"

export function Input(props: UseControllerProps){
  const { field } = useController(props)
  return(
    <>
      <InputBase {...field} defaultValue="" />  
    </>
  )
}