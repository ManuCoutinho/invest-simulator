import styled from "styled-components"

export const Title = styled.h3`
font-size: ${({theme}) => theme.fontSize.lg};
font-weight: ${({theme}) => theme.fontWeight.bold};
letter-spacing: -0.02em;
line-height: 1.5rem;
padding: 0.5rem;
`