import { createGlobalStyle } from "styled-components";
import normalize from 'normalize.css'

const GlobalStyles = createGlobalStyle`
  ${ normalize }
  *, 
  *:before, 
  *:after {
    box-sizing: border-box;
  }

  body, 
  html {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: '_Adobe Clean', 'Segoe UI', sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    line-height: 1.4;
  }

  a:link, 
  a:visited {
    color: #0077cc;
  }

  a:hover, 
  a:focus {
    color: #004499;
  }

  code, 
  pre {
    max-width: 100%;
  }
`;

export default GlobalStyles;