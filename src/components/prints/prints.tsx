import { Container, Content, List, ListItem } from './styles';
import { pictures } from '../../mock';
import { NavLink } from 'react-router-dom';

function Prints() {
  return (
    <Container>
      <Content>
        <h1>
          Oiê amor da minha vida!!
        </h1>
        <p>
          Como a gente sabe, eu não posso te dar nenhum presente, então eu decidi eternizar aqui os nossos momentos, já que você perdeu algumas coisas nossas, conforme o tempo for passando eu vou atualizando aqui, eu não sei fazer musica, nem texto bonito como voce sabe, então eu tentei fazer o que eu pensei de mais fofo pra gente.. algumas fotos estão com descrição, se você passar o mouse, você um recadinho ou uma descrição.. eu amo você.. e eu amo mais!!(Agora tá registrado isso, tá? E se tá na internet, é verdade!)
        </p>

      </Content>
      <List>
        {pictures.map(item => <ListItem><img src={item.photo} alt={item.description} /></ListItem>)}
      </List>

      <NavLink to={'/'}>
        <button>VOLTAR</button>
      </NavLink>
    </Container>
  )
}

export default Prints;