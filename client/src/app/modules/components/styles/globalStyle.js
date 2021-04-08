import { createGlobalStyle } from 'styled-components';
import px2vw from '../../../util/px2vw';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Segoe UI', 'Oxygen';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFF;
  }
  :root {
    font-size: ${px2vw(30)};

    @media (min-width: 768px) {
      font-size: ${px2vw(24)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(18)};
    }
  }  
`;

export default GlobalStyle;
