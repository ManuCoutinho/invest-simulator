import styled from "styled-components"

type FlexBoxProps = {
  direction: string;
}

export const FlexBox = styled.div<FlexBoxProps>`
 width: 100%;
 margin: 0 auto;
 padding: 0.5rem;
 display: flex;
 justify-content: center;
 flex-direction: ${props => props.direction || "column"};
`