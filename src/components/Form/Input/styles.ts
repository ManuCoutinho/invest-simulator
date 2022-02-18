import styled from 'styled-components'

type FocusProps = {
  focus?: string
  border?: string
}

export const FormControl = styled.div<FocusProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.focus || 'black'};
  position: relative;
`
export const FormLabel = styled.label`
  padding-top: 1rem;
`
export const InputBase = styled.input<FocusProps>`
  background: ${({ theme }) => theme.colors.gray[100]};
  outline: 0;
  border: 0;
  border-bottom: 1.9px solid ${({ theme }) => theme.colors.black};
  border-color: ${(props) => props.border || 'black'};
  line-height: 2rem;
  padding: 0.25rem;

  &[type='number'] {
    appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`
export const FormErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: block;
  position: absolute;
  bottom: -10%;
`
