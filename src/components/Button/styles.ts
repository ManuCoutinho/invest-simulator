import styled from "styled-components"

export const ButtonBase = styled.button`
 @media (max-width: 45em) {
  padding: 0.8rem;
  font-size: ${({theme}) => theme.fontSize.md};  
}

@media (max-width: 27em) {  
  button[type=button]{
    background: t${({theme}) => theme.colors.orange[400]};
    border: 0;
    &:hover { 
       filter: brightness(0.9);
       transition: ${({theme}) => theme.transition};      
      }
  }
}


padding: 1rem;
border-radius: ${({theme}) => theme.radius};
font-size: 1.25em;
font-weight: ${({theme}) => theme.fontWeight.bold};
margin-top: 1.5rem;
transition: ${({theme}) => theme.transition};
width: 15.625rem;

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

    @media (max-width:27em){
      margin: 0.5rem 0;
    }
  }

`