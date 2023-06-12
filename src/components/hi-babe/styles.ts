import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: inline-block;
    text-decoration: none;
    background-color: #fff;
    border-radius: 8px;
    text-transform: uppercase;
    color: #C70404;
    font-family: "Roboto", sans-serif;
    font-size: 6rem;
    padding: 1rem 2rem 0rem 2rem;
    cursor: pointer;
  }
`;

export const Modal = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 1);
  transition: all 0.4s;
  
  input {
    margin: 1rem 0 0 0;
    display: flex;
    width: 100%;
    padding: 0.2rem;

  }
  &:target {
    visibility: visible;
    opacity: 1;
  }
`;

export const Content = styled.div`
  border-radius: 10px;
  position: relative;
  width: 500px;
  max-width: 90%;
  background: #F7F7FF;
  padding: 1.5rem;
`;

export const Footer = styled.div`
  text-align: right;
  margin: 1.8rem 0 1rem;
  text-decoration: none;
`

export const FooterBtnClose = styled.a`
  width: 150px;
  padding: 10px;
  margin: 0 .2rem 0 0;
  text-decoration: none;
  background-color: #C70404;
  color: #F7F7FF;
  border-radius: 6px;
`