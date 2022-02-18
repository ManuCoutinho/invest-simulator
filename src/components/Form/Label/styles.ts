import styled from 'styled-components'

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 1rem;
`
export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
`
export const FormErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
`
