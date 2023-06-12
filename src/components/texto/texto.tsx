import React from 'react'
import { Content, Container } from './styles'
import { NavLink } from 'react-router-dom'

function Texto() {
  return (
    <Container>
      <Content>
        <h1>Oi amor</h1>
        <p>
          Nosso primeiro dia dos namorados, tudo o que eu queria era pasar esse dia ao seu lado, a gente estaria com certeza comendo um fondue..
          Amor, obrigada por ter aparecido na minha vida, por estar curando feridas que eu nem sabia que estavam lá, eu quero estar do seu lado para sempre, quero te proteger, cuidar de você, poder amar você... quando eu te conheci lá atrás, eu nao imaginava que você fosse ser uma pessoa tão perfeita pra mim, na verdade eu ainda tenho medo, pois uma pessoa feita pra mim do jeito que eu sempre quis, sera que existe mesmo?
          Eu amo seu corpo, sua mão, sua boca, o jeito que nossos corpos encaixam quando estão juntos..
          Espero que a gente fique junto pra sempre, que todo esse tempo passe rápido, que a gente possa acordar e dormir juntos, ouvir a Bea reclamando juntos, rir das maluquices da Gabs, conversar com a Ayehsa, você me ver batendo no TH, ver voce e Sam brincando de discutir, ir na pracinha com Gueguel, nossos trezentos gatos e cachorros, ir no Karaoke..
          A gente tem tanto o que viver, essa fase é só um tempo, temos que passar né? pra poder curtir la na frente...
          Vai dar tudo certo, esse ano a gente não pode ficar junto, mas a gente vai poder lá na frente.. vai que isso é um teste pra gente saber até aonde a gente se ama...
          Eu te quero muito, pra sempre, e pro resto da vida, né?
        </p>
      </Content>
      <NavLink to={'/'}>
        <button>VOLTAR</button>
      </NavLink>
    </Container>
  )
}

export default Texto