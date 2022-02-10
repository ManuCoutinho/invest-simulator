import { useForm } from "react-hook-form"
import { ButtonGroup } from "../ButtonGroup"
import { FlexBox } from "../Foundation/FlexBox"
import { Title } from "../Foundation/Title"
import { Input } from "../Input"
import { RadioGroupIncome } from "../RadioInput/RadioGroupIncome"
import { RadioGroupIndexType } from "../RadioInput/RadioGroupIndexType"

import { Form, FormContainer } from "./styles"

const MainForm: React.FC = () => {
  const {register, handleSubmit, formState:{ errors }} = useForm()
  return(
    <Form>
      <FormContainer onSubmit={()=>{}}>
        <FlexBox direction="column"> 
          <Title fontSize="1em">Rendimentos</Title>   
        <RadioGroupIncome/>
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
        <FlexBox direction="column">
          <Title fontSize="1em">Tipos de indexação</Title>   
          <RadioGroupIndexType/>
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

export default MainForm;