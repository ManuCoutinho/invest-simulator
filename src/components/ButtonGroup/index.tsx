import { Stack } from "@chakra-ui/react"
import { Button } from "../Button"

export function ButtonGroup() {
  return (
    <Stack spacing={6} direction='row' align='center'>
      <Button
        type="button"
        text="Limpar campos"
        variant="outline"
        colorScheme="black"
        fontSize="xl"
        size="lg"
        isFullWidth={true} 
      />
      <Button
        type="submit"
        text="Simular"
        bgColor="gray.300"
        size="lg"
        fontSize="xl"       
        isFullWidth={true}        
      />
    </Stack>
  );
}
