import GlobalContext from "./context"
import { Heading } from "./components/Heading"
import { Container } from "./components/Foundation/Container"
import { FlexBox } from "./components/Foundation/FlexBox"
import { FlexGrid } from "./components/Foundation/FlexGrid"
import { Title } from "./components/Foundation/Title"
import {Form} from "./components/Form"
import ChartComponent from "./components/ChartComponent"
import { ResultsBoard } from "./components/ResultsBoard"

function App() {    
  return (
   <GlobalContext>
      <Container>      
          <Heading text="Simulador de Investimentos"/>
          <FlexGrid>
            <FlexBox justify="flex-start">
                <Title fontSize="1.8em">Simulador</Title>
                <Form/>
            </FlexBox>
            <FlexBox justify="flex-start">
              <Title fontSize="1.8em">Resultado da Simulação</Title>
              <ResultsBoard/>
              <ChartComponent/>
            </FlexBox>    
          </FlexGrid>
      </Container>
    </GlobalContext>
  )
}
export default App;
