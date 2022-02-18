import { useFetch } from '../../hooks/useFetch'
import { CardResults } from './CardResults'

import { Container } from './styles'

export function ResultsBoard() {
  return (
    <Container>
      <CardResults />
    </Container>
  )
}
