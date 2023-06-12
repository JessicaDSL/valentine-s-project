import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  #root {
    --primary-color: #1C0F13;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #1C0F13;
    color: #1C0F13;
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 1.5rem;
    color: #C70404;
    margin: 0 0 1rem 0;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: normal;
  }

  a{
    text-decoration: none;
  }

  button {
    color: #F7F7FF;
    background-color: #C70404;
    border-radius: 8px;
    text-transform: uppercase;
  }
`;
 
export default GlobalStyle;