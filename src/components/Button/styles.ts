import styled from "styled-components"

export const ButtonBase = styled.button`
padding: 1rem;
border-radius: ${({theme}) => theme.radius};
font-size: 1.25em;
font-weight: ${({theme}) => theme.fontWeight.bold};
margin-top: 1.5rem;
transition: ${({theme}) => theme.transition};
width: 250px;

  &[type=reset],
  &[type=button]{
    background: transparent;
    border: 2px solid ${({theme}) => theme.colors.black};
    &:hover { 
       color: ${({theme}) => theme.colors.orange[400]};
       border: 2px solid ${({theme}) => theme.colors.orange[400]};
       transition: ${({theme}) => theme.transition};      
      }
  }
  &[type=submit]{
    border: 0;
    background: ${({theme}) => theme.colors.gray[300]};
      &:hover { 
        background: ${({theme}) => theme.colors.orange[400]};
        transition: ${({theme}) => theme.transition};
      }
  }
  
  &+button{
    margin-left: 1rem;
  }

`