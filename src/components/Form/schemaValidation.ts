import * as yup from 'yup'

export const formSchema = yup
  .object({
    initialInvestment: yup.string().required('Aporte deve ser um número'),
    deadline: yup
      .string()
      .required('Campo obrigatório')
      .min(2, 'Campo deve conter dois digítos'),
    monthlyInvestment: yup.string().required('Aporte deve ser um número'),
    profitability: yup.string().required('Campo obrigatório'),
  })
  .required()
