import { NavLink } from 'react-router-dom'
import { Container, Content } from './styles'

const OurThings = () => {
  return (
    <Container>
      <Content>
        <h1>Olá, gatinho</h1>
        <p>
          Aqui eu to deixando os prints mais fofos das nossas conversas,
          Mas você pode ir diretamente para a parte onde eu faço um texto super vergonhoso me declarando..
          Onde vc quer ir?
        </p>
        <div>
        <NavLink to={'/texto'}>
            <button>Texto</button>
          </NavLink>
          <NavLink to={'/prints'}>
            <button>Prints</button>
          </NavLink>
        </div>
        <ul>

        </ul>
      </Content>
    </Container>
  )
}

export default OurThings