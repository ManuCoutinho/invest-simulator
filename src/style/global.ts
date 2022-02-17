import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
 @media (max-width: 1080px){
   font-size: 93.75%;
 }

 @media (max-width: 720px){
   font-size: 87.5%;
 }
}

body, html {
  scroll-behavior: smooth;
  font-smooth: antialiased;
  -webkit-font-smooth: antialiased;  
}

body {
 background: ${({theme}) => theme.colors.white};
 color: ${({theme}) => theme.colors.black};
 transition: ${({theme}) => theme.transition};
}

body, input, textarea, button {
 font-family: ${({theme}) => theme.font}; 
 font-weight: ${({theme}) => theme.fontWeight.normal};
 font-size: ${({theme}) => theme.fontSize.md};
}

h1, h2, h3, h4, h5, h6, strong {
 font-weight: ${({theme}) => theme.fontWeight.bold};
}

a {
 text-decoration: none;
 color: inherit;
 cursor: pointer;  
}
`
export default GlobalStyle;