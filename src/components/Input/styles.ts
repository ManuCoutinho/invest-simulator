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
`
export const FormErrorMessage = styled.span`
`