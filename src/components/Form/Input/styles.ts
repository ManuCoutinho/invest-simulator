import styled from "styled-components"

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 1rem;
`
export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
`
export const InputBase = styled.input`
  background: ${({theme}) => theme.colors.gray[100]};
  outline: 0;
  border: 0;
  border-bottom:1.9px solid ${({theme}) => theme.colors.black};
  line-height: 2rem;
  padding: 0.5rem;
 
  &[type="number"]{
    appearance: textfield;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {   
        -webkit-appearance: none;    
      }
  }  
`
export const FormErrorMessage = styled.span`
  color:${({theme}) => theme.colors.red};
  padding: 0.5rem;
  font-size: ${({theme}) => theme.fontSize.sm};

  //TODO acertar cor da label e border
`