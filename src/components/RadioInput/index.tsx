import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

export function RadioInput() {
  return(
    <RadioGroup>
      <Stack direction="row">
        <Radio value="1">Bruto</Radio>
        <Radio value="2">Liquido</Radio>
      </Stack>
    </RadioGroup>
  )
}