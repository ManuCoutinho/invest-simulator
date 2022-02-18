import { IconButton, Tooltip } from "@mui/material"
import { useContext } from "react"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { ThemeContext } from "styled-components"
import { Row } from "../../Foundation/Row"
import { Title } from "../../Foundation/Title"
import { HeaderForm } from "./styles"

interface HeaderProps {
  text: string
}
export function Header({ text }: HeaderProps) {
  const defaultTheme = useContext(ThemeContext)

  return (
    <HeaderForm justify="space-between">
      <Title fontSize="1em">{text}</Title>
      <Tooltip
        title="Texto demonstrativo..."
        arrow
        disableInteractive
        placement="top"
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: defaultTheme.colors.white,              
              color: defaultTheme.colors.black,
              boxShadow: 1
            },
          },
        }}
      >
        <IconButton>
          <AiOutlineInfoCircle color="#000" />
        </IconButton>
      </Tooltip>
    </HeaderForm>
  )
}
