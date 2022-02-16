import { MouseEventHandler } from "react";
import { ButtonBase } from "./styles";

interface ButtonBaseProps  {
text: string;
type: "button" | "reset" | "submit";
onclick?: MouseEventHandler;
}

export function Button({ text, type, onclick }: ButtonBaseProps){
  return(
    <ButtonBase type={type} onClick={onclick}>
      {text}
    </ButtonBase>
  )
}