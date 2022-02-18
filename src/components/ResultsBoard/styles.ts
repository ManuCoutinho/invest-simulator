import styled from "styled-components";
import { FlexGrid } from "../Foundation/FlexGrid";

type ColorProps ={
  color?: string;
}

export const Container = styled.section`
  @media (max-width: 89em) {
    gap: 0.75rem;
  }

  @media(max-width: 68em){    
    grid-template-columns: repeat(2, 1fr);
  }

  display: grid;  
  margin-top: 1.8rem; 
  margin-bottom: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
  width: 100%; 

`

export const Card = styled.div<ColorProps>`
  background: ${({theme}) => theme.colors.white};
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize.md};

  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25); 
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);

  span {
    margin-top: 1rem;
    color: ${props => props.color || 'black'};
    font-weight: ${({theme}) => theme.fontWeight.semibold};   
  }

  @media (max-width:95.5em) {
    font-size: ${({theme}) => theme.fontSize.sm};
    padding: 0.5rem 0.5rem;
  }
` 
