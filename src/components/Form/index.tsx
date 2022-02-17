import { useContext } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { formSchema } from "./schemaValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useFetch } from "../../hooks/useFetch"
import { DataContext } from "../../context/dataForm"
import { FlexBox } from "../Foundation/FlexBox"
import { Title } from "../Foundation/Title"
import { Row } from "../Foundation/Row"
import { Button } from "../Button"
import { Input } from "./Input"
import { RadioGroupIncoming } from "./RadioInput/RadioGroupIncoming"
import { RadioGroupIndexing } from "./RadioInput/RadioGroupIndexing"

import { FormElement, FormContainer } from "./styles"
import { Header } from "./Header"

type MainFormProps = {
  initialInvestment: number;
  deadline: number;
  monthlyInvestment: number;
  profitability: number;
  incoming: string;
  indexing: string;
}
type Indicators = {
  nome: string;
  valor: number;
}

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<MainFormProps>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  })
  const { setState: setGlobalState } = useContext(DataContext)
  const { data: getIndex } = useFetch<Indicators>("indicadores")

  const onSubmit: SubmitHandler<MainFormProps> = (data) => {
    setGlobalState({
      initialInvestment: data.initialInvestment,
      deadline: data.deadline,
      monthlyInvestment: data.monthlyInvestment,
      profitability: data.profitability,
      indexing: data.indexing,
      incoming: data.incoming,
    });
    reset()
  }

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <FlexBox direction="column">
          <Header text="Rendimentos"/>
          <RadioGroupIncoming control={control} />
          <Input
            name="initialInvestment"
            label="Aporte Inicial"
            error={errors?.initialInvestment}
            {...register("initialInvestment")}
          />
          <Input
            name="deadline"
            label="Prazo (em meses)"
            error={errors?.deadline}
            {...register("deadline")}
          />
          <Input name="ipca" label="IPCA (ao ano)" />
        </FlexBox>
        <FlexBox direction="column">
          <Header text="Tipos de indexação"/>
          <RadioGroupIndexing control={control} />
          <Input
            name="monthlyInvestment"
            label="Aporte Mensal"
            error={errors?.monthlyInvestment}
            {...register("monthlyInvestment")}
          />
          <Input
            name="profitability"
            label="Rentabilidade"
            error={errors?.profitability}
            {...register("profitability")}
          />
          <Input name="cdi" label="CDI (ao ano)" />
        </FlexBox>
      </FormContainer>
      <Row justify="space-evenly">
        <Button text="Limpar campos" type="button" onclick={() => reset()} />
        <Button text="Simular" type="submit" />
      </Row>
    </FormElement>
  );
}
