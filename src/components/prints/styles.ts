import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    margin: 0 0 2rem 0;
  }
`

export const Content = styled.div`
  background-color: #F7F7FF;
  margin: 3rem 0;
  border-radius: 8px;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  p {
    width: 80%;
    text-align: center;
    margin: 1rem 0 1rem 0;
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
`

export const ListItem = styled.li`
  display: flex;
  width: 30%;
  margin: 0 0 2rem 0;
  img {
    width: 100%;
    border-radius: 10px;
  }
`