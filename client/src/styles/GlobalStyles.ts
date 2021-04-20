import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    padding:0;
    margin:0;
  }

  body{
    background-color: rgb(237, 237, 237);
  }
`;

export default GlobalStyle;