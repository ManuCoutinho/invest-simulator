import styled from "styled-components";

export const RadioBox = styled.section`
  @media (max-width: 104em) {
    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  @media (max-width: 86.875em) {
    label {
      padding: 1rem 4px;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.xsm};
    }
  }
  @media (max-width: 45em) {
    label {
      padding: 1rem 0;
    }
  }
  @media (min-width:  86.9375em) {
    label {
      padding: 1rem 1rem;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.md};
    }    
  }

  @media(min-width:49em) and (max-width: 68em) {
    label {
      padding: 1rem 1rem;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.md};
    }  
  }

  display: flex;
  margin-bottom: 1.5rem;
  width: 100%;
  place-content: center;
  padding: 0.5rem;
  justify-content: center;
  label {
    border: 1px solid ${({ theme }) => theme.colors.black};
    
    margin-right: 0;
    &:first-child {
      -webkit-border-top-left-radius: ${({ theme }) => theme.radius};
      -webkit-border-bottom-left-radius: ${({ theme }) => theme.radius};
      -moz-border-radius-topleft: ${({ theme }) => theme.radius};
      -moz-border-radius-bottomleft: ${({ theme }) => theme.radius};
      border-top-left-radius: ${({ theme }) => theme.radius};
      border-bottom-left-radius: ${({ theme }) => theme.radius};
      z-index: 5;
    }
    &:last-child {
      -webkit-border-top-right-radius: ${({ theme }) => theme.radius};
      -webkit-border-bottom-right-radius: ${({ theme }) => theme.radius};
      -moz-border-radius-topright: ${({ theme }) => theme.radius};
      -moz-border-radius-bottomright: ${({ theme }) => theme.radius};
      border-top-right-radius: ${({ theme }) => theme.radius};
      border-bottom-right-radius: ${({ theme }) => theme.radius};
    }
    & + label {
      border-left: none;
    }
    span {
      margin-right: 0.25rem;
    }
  }
`;

export const RadioBox2 = styled(RadioBox)`

  @media (max-width: 89.4375em) {
    label {
      padding: 1rem 2px;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.xsm};
    }
  }

  @media(min-width:48.9375em) and (max-width: 68em) {
    label {
      padding: 1rem 0.825rem;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  @media (max-width: 45em) {
    label {
      padding: 1rem 0;
    }
  }

  @media (min-width: 89.5em) {
    label {
      padding: 1rem 0.5rem;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }    
  }
`;
