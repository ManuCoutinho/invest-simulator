import { Heading } from "../src/components/Heading"
import { Container } from "./components/Foundation/Container"
import { FlexBox } from "./components/Foundation/FlexBox"
import { Title } from "./components/Foundation/Title"
import { MainForm } from "./components/MainForm"
import { FlexGrid } from "./components/Foundation/FlexGrid"

function App() {  
  //TODO colocar grid 2x no container
  return (
    <Container>      
        <Heading text="Simulador de Investimentos"/>
        <FlexGrid>
          <FlexBox>
              <Title>Simulador</Title>
              <MainForm/>        
              <FlexBox></FlexBox>
            </FlexBox>    
        </FlexGrid>
    </Container>
  )
}

export default App
