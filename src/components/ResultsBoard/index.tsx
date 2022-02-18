import { useFetch } from "../../hooks/useFetch"
import { CardResults } from "./CardResults"

import { Container } from "./styles"

export function ResultsBoard(){
  //const { status } = useFetch('simulacoes')

  return(
   <Container>
     <CardResults/>
   </Container>
  )
}