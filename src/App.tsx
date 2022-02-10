import { Heading } from "../src/components/Heading"
import { Container } from "./components/Foundation/Container"
import { FlexBox } from "./components/Foundation/FlexBox"
import { Title } from "./components/Foundation/Title"
import MainForm from "./components/MainForm"
import { FlexGrid } from "./components/Foundation/FlexGrid"
import ChartComponent from "./components/ChartComponent"
import { ResultsBoard } from "./components/ResultsBoard"

function App() {  
  return (
    <Container>      
        <Heading text="Simulador de Investimentos"/>
        <FlexGrid>
          <FlexBox>
              <Title fontSize="1.8em">Simulador</Title>
              <MainForm/>
          </FlexBox>
          <FlexBox justify="flex-start">
            <Title fontSize="1.8em">Resultado da Simulação</Title>
            <ResultsBoard/>
            <ChartComponent/>
          </FlexBox>    
        </FlexGrid>
    </Container>
  )
}

export default App
