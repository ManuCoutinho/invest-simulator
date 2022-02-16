import { useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { SimulatorContext } from "../../context";
import { Title } from "../Foundation/Title";
import { Card } from "./styles";



export function CardResults() {
  const index = useContext(SimulatorContext)
  const getData =  useFetch('simulacoes')
   
  if(index === 0){
    console.log(index)
  }
  //const data = getData.map(data => console.log(JSON.stringify(data, null, 4)))
  //todo todo fazer match com a comparação do radius com o indice da api
  
  
  return (
    <>
    {getData.isFetching && <p>Carregando...</p>}
    <Card>
        <Title fontSize="1em">Valor final Bruto</Title>
        {getData?.map((data) => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
           }).format(data.valorFinalBruto)}</span>
        ))}
      </Card>
      <Card>
        <Title fontSize="1em">Alíquota do IR</Title>
        {getData?.map((data) => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
            style:'percent',
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            maximumSignificantDigits: 2
          }).format(data.aliquotaIR)}</span>
        ))}
      </Card>
      <Card>
        <Title fontSize="1em">Valor Pago em IR</Title>
        {getData?.map((data) => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
         }).format(data.valorPagoIR)}</span>
        ))}
      </Card>
      <Card>
        <Title fontSize="1em">Valor final Líquido</Title>
        {getData?.map((data) => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
         }).format(data.valorFinalLiquido)}</span>
        ))}
      </Card>
      <Card>
        <Title fontSize="1em">Valor Total Investido</Title>
        {getData?.map((data) => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
         }).format(data.valorTotalInvestido)}</span>
        ))}
      </Card>
      <Card>
        <Title fontSize="1em">Ganho Líquido</Title>
        {getData?.map((data) => (
          <span key={Math.random()}>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
         }).format(data.ganhoLiquido)}</span>
        ))}
      </Card>
    </>
  );
}
