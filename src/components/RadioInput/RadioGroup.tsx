import { RadioInput } from "./index"
import { Row } from "./styles"

export function RadioGroup() {
  const options = ["Bruto", "Líquido"]  
  return (
    <Row>
      <RadioInput name="rendimentos" value="1" children="Bruto"/>  
      <RadioInput name="rendimentos" value="2" children="Líquido"/>      
    </Row>
  )
}
