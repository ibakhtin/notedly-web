import { createGlobalStyle } from "styled-components";
import { normalize } from "normalize.css";

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
    //font-family: -apple-system_, BlinkMacSystemFont_, "Adobe Clean", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-family: 'Adobe Clean', 'Segoe UI', sans-serif;
    font-size: 18px;
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