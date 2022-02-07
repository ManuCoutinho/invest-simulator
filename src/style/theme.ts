import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {    
    gray: {
      "50": "#F4F4F4",
      "100": "#EFEFEF",
      "200":" #DDDDDD",
      "300": "#969696"
    },
    green: {
      "200": "#94C88B"
    },
    orange: {
      "400":"#ED8E53"
    },

  },
  fonts: {
    body: "Arial",
    heading: "Arial"
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      }  
    }
  }
})