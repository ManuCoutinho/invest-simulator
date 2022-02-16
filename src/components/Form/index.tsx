import { useContext } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { DataContext } from "../../context/dataForm"
import { FlexBox } from "../Foundation/FlexBox"
import { Title } from "../Foundation/Title"
import { Button } from "../Button"
import { Input } from "./Input"
import { RadioGroupIncome } from "./RadioInput/RadioGroupIncome"
import { RadioGroupIndexingTypes } from "./RadioInput/RadioGroupIndexingTypes"

import { FormElement, FormContainer } from "./styles"
import { Row } from "../Foundation/Row"

type GetIndex ={
  index: {
    name: string;
    value: number;
  }  
}

type MainFormProps = {
  initialInvestment:number;
  deadline: number;
  monthlyInvestment: number;
  profitability: number; 
}

export function Form ()  { 
  const { register, handleSubmit, reset, formState, control } = useForm<MainFormProps>()  
  const { errors } = formState    
  const { setState: setGlobalState } = useContext(DataContext)

  const onSubmit:SubmitHandler<MainFormProps> = (data) => { 
    setGlobalState({      
      initialInvestment: data.initialInvestment,
      deadline: data.deadline,
      monthlyInvestment: data.monthlyInvestment,
      profitability: data.profitability,
    })
    reset() 
    console.log(data)    
  }
  //! mapear radio group e testar com a var fetching
  //todo criar retorno nos input readOnly

  return(
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      <FormContainer >
        <FlexBox direction="column"> 
          <Title fontSize="1em">Rendimentos</Title>
          <RadioGroupIncome control={control}/>            
          <Input
              name="initialInvestment"              
              label="Aporte Inicial"              
              error={errors.initialInvestment} 
              {...register('initialInvestment')}            
            />
            <Input
              name="deadline"              
              label="Prazo (em meses)"              
              error={errors.deadline}
              {...register('deadline')}  
            />
            <Input
              name="ipca"
              label="IPCA (ao ano)"                        
            />               
        </FlexBox>
        <FlexBox direction="column">
          <Title fontSize="1em">Tipos de indexação</Title>   
          <RadioGroupIndexingTypes control={control}/>
          <Input
              name="monthlyInvestment"
              label="Aporte Mensal"              
              error={errors.monthlyInvestment}          
              {...register('monthlyInvestment')} 
            />
            <Input
              name="profitability"
              label="Rentabilidade"              
              error={errors.profitability }
              {...register('profitability')}   
            />
            <Input
            name="cdi"
            label="CDI (ao ano)"                         
          />               
        </FlexBox>           
      </FormContainer>     
     <Row justify="space-evenly">
      <Button text="Limpar campos" type="button" onclick={()=> reset()}/>
      <Button text="Simular" type="submit"/>
     </Row>
    </FormElement>
  )
}