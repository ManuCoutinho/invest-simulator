import styled from "styled-components"

type FlexBoxProps = {
  direction?: string;
  justify?: string;
}

export const FlexBox = styled.div<FlexBoxProps>`  
 padding: 0.5rem;
 display: flex;
 justify-content: ${props => props.justify || "center"};
 flex-direction: ${props => props.direction || "column"};
 flex-wrap: wrap;
`