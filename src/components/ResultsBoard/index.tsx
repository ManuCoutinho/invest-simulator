import { useFetch } from "../../hooks/useFetch"

import { FlexGrid } from "../Foundation/FlexGrid"
import { CardResults } from "./CardResults"

import { Container } from "./styles"

export function ResultsBoard(){
  const { data } = useFetch('simulacoes')
 

  return(
   <Container>
      <FlexGrid gridSize="repeat(auto-fit, minmax(150px, 1fr))" gap="2rem">
       <CardResults/>
    </FlexGrid> 
   </Container>
  )
}