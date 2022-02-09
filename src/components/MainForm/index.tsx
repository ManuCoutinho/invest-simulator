import { useForm } from "react-hook-form"
import { ButtonGroup } from "../ButtonGroup"
import { FlexBox } from "../Foundation/FlexBox"
import { Input } from "../Input"
import { RadioGroup } from "../RadioInput/RadioGroup"

import { Form, FormContainer } from "./styles"

export function MainForm(){
  const {register, handleSubmit, formState:{ errors }} = useForm()
  return(
    <Form>
      <FormContainer onSubmit={()=>{}}>
        <FlexBox>    
        <RadioGroup/>
        <Input
            name="capital"
            label="Aporte Inicial"
            type="text"
            error={errors.capital}
            {...register("capital")} 
          />
          <Input
            name="deadline"
            label="Prazo (em meses)"
            type="text"
            error={errors.deadline}
            {...register("deadline")} 
          />
          <Input
            name="ipca"
            label="IPCA (ao ano)"
            type="text"
            error={errors.deadline}
            {...register("deadline")} 
          />               
        </FlexBox>
        <FlexBox>
          
          <Input
              name="capital"
              label="Aporte Mensal"
              type="text"
              error={errors.capital}
              {...register("capital")} 
            />
            <Input
              name="deadline"
              label="Rentabilidade"
              type="text"
              error={errors.deadline}
              {...register("deadline")} 
            />
            <Input
            name="cdi"
            label="CDI (ao ano)"
            type="text"
            error={errors.deadline}
            {...register("deadline")} 
          />               
        </FlexBox>           
      </FormContainer>
      <ButtonGroup/> 
    </Form>
  )
}