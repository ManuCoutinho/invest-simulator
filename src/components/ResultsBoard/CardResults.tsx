import { useContext } from "react";
import { DataContext } from "../../context/dataForm";
import { useFetch } from "../../hooks/useFetch";

import { Title } from "../Foundation/Title";
import { Card } from "./styles";

type DataFetch = { 
    tipoIndexacao:string;
    tipoRendimento: string;
    valorFinalBruto: number;
    aliquotaIR: number;
    valorPagoIR: number;
    valorTotalInvestido: number;
    valorFinalLiquido: number;
    ganhoLiquido: number;
   
}

export function CardResults() {
  const{ state: index, setState } = useContext(DataContext)
  const { data, isFetching } =  useFetch<DataFetch>('simulacoes')
  const loading = isFetching
  const getData = data

  let filteredData:DataFetch[] = []
  
  const handleFilterData = () => {    
      if(Array.isArray(getData)){
        filteredData = getData.filter(d => d.tipoIndexacao === index.indexing)
          .filter( t => t.tipoRendimento === index.incoming)                 
      }          
  }
  
  console.log(handleFilterData())
  //? colocar chamada da handleFilterData no switch? 
  //! rendetizar return após submit do form
  return (
    <>    
      {loading && <p>Carregando...</p>}
    <Card>
        <Title fontSize="1em">Valor final Bruto</Title>
        {filteredData.map(data => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
           }).format(data.valorFinalBruto)}</span>
        ))}
      </Card>
      <Card>
        <Title fontSize="1em">Alíquota do IR</Title>
        {filteredData.map(data => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
            style:'percent',
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            maximumSignificantDigits: 2
          }).format(data.aliquotaIR/100)}</span>
        ))}
      </Card>
      <Card>
        <Title fontSize="1em">Valor Pago em IR</Title>
        {filteredData.map(data => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
         }).format(data.valorPagoIR)}</span>
        ))}
      </Card>
      <Card>
        <Title fontSize="1em">Valor final Líquido</Title>
        {filteredData.map(data => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
         }).format(data.valorFinalLiquido)}</span>
        ))}
      </Card>
      <Card>
        <Title fontSize="1em">Valor Total Investido</Title>
        {filteredData.map(data => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
         }).format(data.valorTotalInvestido)}</span>
        ))}
      </Card>
      <Card>
        <Title fontSize="1em">Ganho Líquido</Title>
        {filteredData.map(data => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
         }).format(data.ganhoLiquido)}</span>
        ))}
      </Card>      
    </>
  );
}