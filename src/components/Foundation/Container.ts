import styled from "styled-components"

export const Container = styled.section`
 background: ${({theme}) => theme.colors.gray[100]};
 width: max(1280px, 90vw);
 margin: 2rem auto;
 padding: 1.5rem 1rem;
 display: flex;
 justify-content: center;
 flex-direction: column;
`