import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  #root {
    --primary-color: black;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: rgb(0,0,0);
background: linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(28,15,19,1) 38%, rgba(59,1,1,0.9808298319327731) 100%);
    color: #1C0F13;
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: xx-large;
    color: #C70404;
    margin: 0 0 1.5rem 0;
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
    padding: 1.5rem 2rem;
    border: none;
    background-color: #c70404;
    color: #EFE9E7;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: large;
    cursor: pointer;
    margin: 0 0 2rem 0;
    border-radius: 8px;
  }
`;
 
export default GlobalStyle;