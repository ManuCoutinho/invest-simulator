import styled from "styled-components"

type FlexGridProps = {
  gridSize?: string;
}

export const FlexGrid = styled.div<FlexGridProps>`
  display: grid;
  grid-template-columns:${ props => props.gridSize ||"repeat(2, 1fr)"};
  gap: 1rem;
  justify-content: center;
  margin: 0 auto;
  padding: 0 1rem;
`