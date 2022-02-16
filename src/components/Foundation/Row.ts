import styled from "styled-components"

type RowProps = {
  justify?: string;
}

export const Row = styled.div<RowProps>` 
 padding: 0.5rem;
 display: flex; 
 flex-direction: row;
 justify-content: ${props => props.justify ||"flex-start"}; 
`