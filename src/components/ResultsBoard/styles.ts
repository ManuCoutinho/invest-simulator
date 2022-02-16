import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  margin-top: 1.8rem; 
  margin-bottom: 1.5rem;  
`

export const Card = styled.div`
  background: ${({theme}) => theme.colors.white};
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25); 
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);

  span {
    margin-top: 1rem;
    color: ${({theme}) => theme.colors.black};

    &:nth-child(4, 6){
      color: ${({theme}) => theme.colors.green[200]};
    }
  }
` 
