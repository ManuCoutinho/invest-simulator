import styled from "styled-components"

type TitleProps = {
  fontSize?: string;
}

export const Title = styled.h3<TitleProps>`
font-size: ${props => props.fontSize||"1.5em"};
font-weight: ${({theme}) => theme.fontWeight.bold};
letter-spacing: -0.02em;
line-height: 1.5rem;

@media (max-width: 48em) {
 text-align: center;
}
`