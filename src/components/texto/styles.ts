import styled from "styled-components";

export const Container = styled.div`
  background: #1c0f13;
  color: #1c0f13;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  h1 {
    font-size: 1.5rem;
    color: #c70404;
    margin: 0 0 1rem 0;
    font-weight: 700;
    text-align: center;
  }
  button {
    padding: 1rem 1.5rem;
    border: none;
    margin: 0 .5rem 0 0;
    background-color: #c70404;
    color: #F7F7FF;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: large;
    cursor: pointer;
  }
`;



export const Content = styled.div`
  background-color: #F7F7FF;
  margin: 3rem 0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  h1 {
    margin: 1.5rem 0 0;
  }
  p {
    padding: 1.5rem;
    //text-align: center;
    //margin: 1rem 0 1rem 0;
  }
`