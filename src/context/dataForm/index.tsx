import { createContext, useState } from 'react'

type DataType = {
  initialInvestment: number
  deadline: number
  monthlyInvestment: number
  profitability: number
  indexing?: string
  incoming?: string
}

type PropsDataContext = {
  state: DataType
  setState: React.Dispatch<React.SetStateAction<DataType>>
}

const DEFAULT_VALUE = {
  state: {
    initialInvestment: 0,
    deadline: 0,
    monthlyInvestment: 0,
    profitability: 0,
  },
  setState: () => {},
}

export const DataContext = createContext<PropsDataContext>(DEFAULT_VALUE)

export const DataContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <DataContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
