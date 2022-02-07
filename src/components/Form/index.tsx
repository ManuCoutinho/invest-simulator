import { Grid, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ButtonGroup } from "../ButtonGroup";
import { Input } from "../Input";
import { RadioInput } from "../RadioInput";

export function Form(){
  const {register, handleSubmit, formState:{ errors }} = useForm()
  return(
    <Grid as="form" onSubmit={()=>{}} p={4} templateColumns='repeat(2, 1fr)' gap={8}>
      <VStack spacing={6} mr={8}>       
        <Text
          display="flex"
          alignSelf="flex-start"
          fontSize="md"
          fontWeight="bold"
        >
          Rendimento
        </Text>
       <RadioInput/> 
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
      </VStack>
      <VStack spacing={6}>   
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
      </VStack>     
        <ButtonGroup/>     
    </Grid>
  )
}