import styled from "styled-components"

export const Header = styled.h1`
font-size: ${({theme}) => theme.fontSize.xl};
font-weight: ${({theme}) => theme.fontWeight.bold};
letter-spacing: -0.02em;
line-height: 2em;
margin-bottom: 2rem;
padding: 0.5rem;
text-align: center;
`