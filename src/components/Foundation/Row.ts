import styled from "styled-components"

type RowProps = {
  justify?: string;
  maxWidth?: string;
}

export const Row = styled.div<RowProps>` 
 padding: 0.5rem;
 display: flex; 
 flex-direction: row;
 justify-content: ${props => props.justify ||"flex-start"};
 max-width: ${props =>props.maxWidth || '100%'}
 flex-wrap: wrap; 

 @media(max-width: 68em){
  align-items: center; 
  margin: 0 auto;   
 }
 @media (max-width:27em) {
  flex-direction: column;  
}
`