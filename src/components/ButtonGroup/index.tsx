import { Button } from "../Button"
import { Row } from "../Foundation/Row"
import { useForm } from "react-hook-form"

export function ButtonGroup() {   
  const { reset } = useForm();
  return (
    <Row justify="space-evenly">
      <Button text="Limpar campos" type="reset" onclick={()=> reset}/>
      <Button text="Simular" type="submit"/>
    </Row>
  );
}
