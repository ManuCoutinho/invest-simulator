import { Button } from "../Button"
import { Row } from "../Foundation/Row";

export function ButtonGroup() {
  return (
    <Row justify="space-evenly">
      <Button text="Limpar campos" type="button"/>
      <Button text="Simular" type="submit"/>
    </Row>
  );
}
