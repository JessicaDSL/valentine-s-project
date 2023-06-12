import styled from "styled-components";

export const Container = styled.div`
  color: #1c0f13;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  h1 {
    font-size: xx-large;
    color: #c70404;
    margin: 0 0 1rem 0;
    font-weight: 700;
    text-align: center;
  }
  button {
    padding: 1rem 1.5rem;
    margin: 1rem 0 0 0;
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
  background-color: #EFE9E7;
  margin: 2rem 0 0 0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  padding: 2rem;
  p {
    text-align: center;
    margin: 1rem 0 2rem 0;
    font-size: large;
  }
  @media (max-width: 767px) {
    margin: 0;
    width: 90%;
    p {
      font-size: normal;
    }
    div{
      display: flex;
    }
  }
`
