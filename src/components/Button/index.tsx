import { ButtonBase } from "./styles";

interface ButtonBaseProps  {
text: string;
type: "button" | "reset" | "submit";
}

export function Button({ text, type }: ButtonBaseProps){
  return(
    <ButtonBase type={type}>
      {text}
    </ButtonBase>
  )
}