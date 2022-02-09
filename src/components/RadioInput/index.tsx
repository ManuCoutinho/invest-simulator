import { ChangeEvent, useState } from "react";
import { Radio, RadioBox, RadioLabel } from "./styles";
interface RadioInputProps {
  children: string;
  name: string;
  value: string;
}

export function RadioInput({ children, name, value }: RadioInputProps) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <RadioLabel aria-labelledby="radio" htmlFor={value}>
      <Radio name={name} type="radio" value={value} id={value}/>
      <RadioBox></RadioBox>
      {children}
    </RadioLabel>
  );
}
