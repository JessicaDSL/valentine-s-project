import { MdOutlineEmail } from "react-icons/md";
import { Content, Footer, FooterBtnClose, Modal, Wrapper } from './styles';
import { NavLink } from "react-router-dom";


function HiBabe() {
  
  return (
    <div>
      <Wrapper className="wrapper">
        <a href="#demo-modal"><MdOutlineEmail /></a>
      </Wrapper>
      <Modal id="demo-modal" className="modal">
        <Content className="modal__content">
          <h1>Feliz primeiro dia dos Namorados</h1>

          <p>
            Como voce não pode salvar as coisas no seu celular, eu decidi criar um site com as nossas lembranças.
            Criei um textinho pra você, não sou boa com textos, e também não sei ser tão romantica como você, mas eu queria algo que você pudesse ter e não precisasse excluir de tudo
          </p>
          <Footer className="modal__footer">
            <NavLink to={'/our-things'} >
              <FooterBtnClose> ENTRAR </FooterBtnClose>
            </NavLink>
            <FooterBtnClose href="#" className="modal__footer-btn-close"> SAIR </FooterBtnClose>
          </Footer>

        </Content>
      </Modal>
    </div>
  )
}

export default HiBabe;