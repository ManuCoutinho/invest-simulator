import styled from "styled-components";

export const RadioBox = styled.section`  
  margin-bottom: 1rem; 
  width:100%; 

    label{   
    border: 1px solid ${({theme}) => theme.colors.black};
    padding: 1rem 1rem;
    margin-right: 0;
        
      &:first-child{  
        -webkit-border-top-left-radius: ${({theme}) => theme.radius};
        -webkit-border-bottom-left-radius: ${({theme}) => theme.radius};
        -moz-border-radius-topleft: ${({theme}) => theme.radius};
        -moz-border-radius-bottomleft: ${({theme}) => theme.radius};
        border-top-left-radius: ${({theme}) => theme.radius};
        border-bottom-left-radius: ${({theme}) => theme.radius};
        z-index: 5;
        }
        &:last-child{         
          -webkit-border-top-right-radius: ${({theme}) => theme.radius};
          -webkit-border-bottom-right-radius: ${({theme}) => theme.radius};
          -moz-border-radius-topright: ${({theme}) => theme.radius};
          -moz-border-radius-bottomright: ${({theme}) => theme.radius};
          border-top-right-radius: ${({theme}) => theme.radius};
          border-bottom-right-radius: ${({theme}) => theme.radius};          
        }
        & + label {
          border-left: none;         
        }         
  }  
`