import { NavLink } from 'react-router-dom'
import { Container, Content } from './styles'

const OurThings = () => {
  return (
    <Container>
      <Content>
        <h1>Olá, gatinho</h1>
        <p>
          Aqui tem alguns prints das nossas conversas que eu sou apaixonada até hoje,
          Mas você também pode ir diretamente para a parte onde eu faço um texto super vergonhoso me declarando..
          (Depois eu vou colocar as minhas músicas e as nossas fotos, mas só no próximo update)
          E agora, onde vc quer ir?
          Só pra constar aqui também, eu te amo mais meu bem..
        </p>
        <div>
          <NavLink to={'/text'}>
            <button>Texto</button>
          </NavLink>
          <NavLink to={'/prints'}>
            <button>Prints</button>
          </NavLink>
        </div>
      </Content>
    </Container>
  )
}

export default OurThings