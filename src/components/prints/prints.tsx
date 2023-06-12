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
          Como a gente sabe, eu não posso te dar nenhum presente, eu fiquei tentando encontrar alguma coisa, fiquei tentando achar uma forma de vc lembrar de mim, e então eu pensei que já que você teve que apagar tudo nosso, e talvez um dia eu precise fazer o mesmo, eu decidi eternizar nossos momentos. Conforme o tempo for passando, eu vou atualizando aqui, eu não sei fazer musica, nem texto bonito como você sabe, então eu fiquei tentando criar algo pra gente lembrar.. algumas fotos estão com descrição, se você passar o mouse, você vê um recadinho ou uma descrição.. eu amo você.. e eu amo mais!!(Agora tá registrado isso, tá? E se tá na internet, é verdade!)
        </p>

      </Content>
      <List>
        {pictures.map(item => <ListItem><img src={item.photo} alt={item.description} /><span>{item.description}</span></ListItem>)}
      </List>

      <NavLink to={'/'}>
        <button>VOLTAR</button>
      </NavLink>
    </Container>
  )
}

export default Prints;