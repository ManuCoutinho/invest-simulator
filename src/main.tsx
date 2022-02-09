import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"

import App from "./App"

import GlobalStyle from "./style/global"
import {themeBase} from "./style/theme/themeBase"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeBase}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
