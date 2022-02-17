import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ThemeContext } from "styled-components";
import { Row } from "../../Foundation/Row";
import { Title } from "../../Foundation/Title";

interface HeaderProps {
  text: string;
}
export function Header({ text }: HeaderProps) {
  const defaultTheme = useContext(ThemeContext);

  return (
    <Row justify="space-between">
      <Title fontSize="1em">{text}</Title>
      <Tooltip
        title="Texto demonstrativo..."
        arrow
        disableInteractive
        placement="top"
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: "rgba(255, 255, 255, 0.75)",
              borderColor: " rgba(209, 213, 219, 0.3)",
              color: defaultTheme.colors.black,
            },
          },
        }}
      >
        <IconButton>
          <AiOutlineInfoCircle color="#000" />
        </IconButton>
      </Tooltip>
    </Row>
  );
}
