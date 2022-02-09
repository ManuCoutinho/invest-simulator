import { Header } from "./styles"

interface HeadingProps {
  text: string
}

export function Heading({ text }:HeadingProps){
  return(
    <Header>
       {text}
    </Header>
  )
}