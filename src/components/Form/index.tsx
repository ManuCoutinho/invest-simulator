import { useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './schemaValidation'
import { useFetch } from '../../hooks/useFetch'
import { DataContext } from '../../context/dataForm'
import { FlexBox } from '../Foundation/FlexBox'
import { Row } from '../Foundation/Row'
import { RadioGroupIncoming } from './RadioInput/RadioGroupIncoming'
import { RadioGroupIndexing } from './RadioInput/RadioGroupIndexing'
import { Input } from './Input'
import { Button } from '../Button'
import { MainFormProps, Indicators } from './types'

import { FormElement, FormContainer } from './styles'
import { Header } from './Header'

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    setValue,
  } = useForm<MainFormProps>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  })
  const { setState: setGlobalState } = useContext(DataContext)
  const { data: getIndex } = useFetch<Indicators>('indicadores')

  if (Array.isArray(getIndex)) {
    const setIpca = getIndex
      .filter((filter) => filter.nome === 'ipca')
      .map((data) => data.valor)
    setValue('ipca', `${setIpca}%`)

    const setCdi = getIndex
      .filter((filter) => filter.nome !== 'ipca')
      .map((data) => data.valor)
    setValue('cdi', `${setCdi}%`)
  }

  const onSubmit: SubmitHandler<MainFormProps> = (data) => {
    setGlobalState({
      initialInvestment: data.initialInvestment,
      deadline: data.deadline,
      monthlyInvestment: data.monthlyInvestment,
      profitability: data.profitability,
      indexing: data.indexing,
      incoming: data.incoming,
    })
    reset()
  }

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <FlexBox direction='column'>
          <Header text='Rendimentos' />
          <RadioGroupIncoming control={control} />
          <Input
            name='initialInvestment'
            label='Aporte Inicial'
            error={errors?.initialInvestment}
            {...register('initialInvestment')}
          />
          <Input
            name='deadline'
            label='Prazo (em meses)'
            error={errors?.deadline}
            {...register('deadline')}
          />
          <Input name='ipca' label='IPCA (ao ano)' {...register('ipca')} />
        </FlexBox>
        <FlexBox direction='column'>
          <Header text='Tipos de indexação' />
          <RadioGroupIndexing control={control} />
          <Input
            name='monthlyInvestment'
            label='Aporte Mensal'
            error={errors?.monthlyInvestment}
            {...register('monthlyInvestment')}
          />
          <Input
            name='profitability'
            label='Rentabilidade'
            error={errors?.profitability}
            {...register('profitability')}
          />
          <Input name='cdi' label='CDI (ao ano)' {...register('cdi')} />
        </FlexBox>
      </FormContainer>
      <Row justify='space-evenly'>
        <Button text='Limpar campos' type='button' onclick={() => reset()} />
        <Button text='Simular' type='submit' />
      </Row>
    </FormElement>
  )
}
