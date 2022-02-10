import { RadioInput } from "./index"
import { Row } from "./styles"

export function RadioGroupIndexType() {   
  return (
    <Row>
      <RadioInput name="index" value="4" children="PRE"/>  
      <RadioInput name="index" value="5" children="POS"/>    
      <RadioInput name="index" value="6" children="FIXADO"/>     
    </Row>
  )
}
