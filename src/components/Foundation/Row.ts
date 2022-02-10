import styled from "styled-components"

type RowProps = {
  justify?: string;
}

export const Row = styled.div<RowProps>`
 width: 100%; 
 padding: 0.5rem;
 display: flex; 
 flex-direction: row;
 justify-content: ${props => props.justify ||"flex-start"};
 place-content: center;
`