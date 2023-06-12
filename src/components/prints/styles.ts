import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  background-color: #EFE9E7;
  margin: 3rem 0;
  padding: 1rem;
  border-radius: 8px;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: auto;
  p {
    width: 80%;
    text-align: center;
    margin: 1rem 0 1rem 0;
    color: #1C0F13;
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 31%;
  margin: 0 0 2.5rem 0;
  span{
    color: white;
    background-color: rgba(0, 0, 0, .8);
    padding: 1.5rem;
    position: absolute;
    bottom: 20%;
    display: none;
    z-index: 99999;
    width: 100%;
  }
  img {
    width: 100%;
    border-radius: 10px;
    transition: transform 1s ease;
    position: relative;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform .5s;
    span {
      display: block;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`