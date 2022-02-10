import styled from "styled-components";
import checkedIcon from "../../assets/checked.svg";

export const Radio = styled.input`
/* -webkit-appearance: none;
 -moz-appearance: none;
  appearance: none;*/
`;

export const RadioLabel = styled.label`
  border: 1px solid ${({theme}) => theme.colors.black};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  padding: 1rem;
  width: 100%;
  place-content: center; 
    &:first-child{  
      -webkit-border-top-left-radius: ${({theme}) => theme.radius};
      -webkit-border-bottom-left-radius: ${({theme}) => theme.radius};
      -moz-border-radius-topleft: ${({theme}) => theme.radius};
      -moz-border-radius-bottomleft: ${({theme}) => theme.radius};
      border-top-left-radius: ${({theme}) => theme.radius};
      border-bottom-left-radius: ${({theme}) => theme.radius};
      }
      &:last-child{
        -webkit-border-top-right-radius: ${({theme}) => theme.radius};
        -webkit-border-bottom-right-radius: ${({theme}) => theme.radius};
        -moz-border-radius-topright: ${({theme}) => theme.radius};
        -moz-border-radius-bottomright: ${({theme}) => theme.radius};
        border-top-right-radius: ${({theme}) => theme.radius};
        border-bottom-right-radius: ${({theme}) => theme.radius};
      }   
`

export const RadioBox = styled.div`
place-content: center;

`

export const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  vertical-align: middle;
`