import styled from "styled-components"

type FlexGridProps = {
  gridSize?: string;
  gap?: string;  
}

export const FlexGrid = styled.section<FlexGridProps>`
  display: grid;
  grid-template-columns:${ props => props.gridSize ||"repeat(2, 1fr)"};
  gap: ${ props => props.gap ||"1rem"};   
  padding: 0 1rem;
  width: 100%;
  
  @media (max-width:68em){
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;   
  }
`