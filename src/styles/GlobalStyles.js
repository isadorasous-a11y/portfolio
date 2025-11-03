import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root { scroll-behavior: smooth; }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({theme})=>theme.colors.bg};
    color: ${({theme})=>theme.colors.text};
  }
  a { color: ${({theme})=>theme.colors.primary}; text-decoration: none; }
  img { max-width: 100%; display: block; }
  ::selection { background: ${({theme})=>theme.colors.primary}; color:#0a0a0a; }
  .container {
    width: 100%;
    max-width: ${({theme})=>theme.container};
    margin: 0 auto;
    padding: 0 24px;
  }
  :focus-visible {
    outline: 3px solid ${({theme})=>theme.colors.primaryAlt};
    outline-offset: 2px;
    border-radius: 6px;
  }
`
export default GlobalStyles
