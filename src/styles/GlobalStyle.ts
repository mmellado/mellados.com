import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: monospace;
    font-size: 16px;
  }
`;

export default GlobalStyle;
