import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ul, h1, h2, h3, h4, h5, h6, li, p {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2e2d2d;
  }
  section {
    padding: 0 5px;
    width: auto;
  }
  header {margin-bottom:10px;
    background-color: #fff1e8;
    border-bottom: 2px solid #3a97e8;
  }
`;
