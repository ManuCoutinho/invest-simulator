import { Heading } from "../src/components/Heading"
import { Container } from "./components/Foundation/Container"
import { FlexBox } from "./components/Foundation/FlexBox"
import { Title } from "./components/Foundation/Title"
import MainForm from "./components/MainForm"
import { FlexGrid } from "./components/Foundation/FlexGrid"
import Chart from "./components/Chart"
import { ResultsBoard } from "./components/ResultsBoard"

function App() {  
  return (
    <Container>      
        <Heading text="Simulador de Investimentos"/>
        <FlexGrid>
          <FlexBox direction="column">
              <Title fontSize="1.8em">Simulador</Title>
              <MainForm/>
          </FlexBox>
          <FlexBox direction="row">
            <ResultsBoard/>
            <Chart/>
          </FlexBox>    
        </FlexGrid>
    </Container>
  )
}

export default App
