
import { DataContextProvider } from "./dataForm";

const GlobalContext: React.FC = ({children}) =>{
  return <DataContextProvider>{children}</DataContextProvider>
}

export default GlobalContext;