import styled from "styled-components"

export const Container = styled.main`
 background: ${({theme}) => theme.colors.gray[100]};
 width: min(80vw, 1700px);
 height:auto;
 margin: 2rem auto;
 padding: 1rem 1rem;
 
 display: flex; 
 flex-direction: column;
 flex-wrap: wrap; 

 @media (max-width: 99.5em) {
   width: 90vw;
 } 
 @media (max-width: 45em){
  width: 100vw;
 }
`