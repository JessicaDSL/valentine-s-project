import { Content, Container } from './styles'
import { NavLink } from 'react-router-dom'

function Texto() {
  return (
    <Container>
      <Content>
        <h1>Oi amioooor</h1>
        <p>
          Nosso primeiro dia dos namorados, tudo o que eu queria era passar esse dia ao seu lado, a gente estaria com certeza comendo um fondue lá no Outback depois de ter transado por cinco horas no mínimo e é isso mermo..
          Amor, obrigada por ter aparecido na minha vida, por estar curando feridas que eu nem sabia que estavam lá, obrigada por me ouvir, por me deixar cuidar de você. 
          Eu quero estar do seu lado para sempre, eu não sei se vai ser possível, mas como diz Djonga, meu pra sempre é o agora, me contento com isso..
          
          Eu quero te proteger, cuidar de você, poder amar você... quando eu te conheci lá atrás, 
          eu não imaginava que você fosse ser uma pessoa tão perfeita pra mim, eu só achava muito gostosinho ouvir a sua risada com gemido no final, eu gostava do jeito que o Matue tratava a Jessy, e comecei a sentir inveja dela nessa época,
          Eu não achava que tudo isso poderia acontecer, nem que o Matue não fosse só um personagem.. Eu tive medo que tudo acabasse e fosse só um sonho, na verdade eu ainda tenho medo, pois uma pessoa feita pra mim do jeito que eu sempre quis, será que existe mesmo? Eu ainda acho que programei você igual eu tô programando esse site aqui..
          Eu amo seu corpo, sua mão, sua boca, o jeito que nossos corpos encaixam quando estão juntos..
          Espero que a gente fique junto pra sempre(você entendeu), que todo esse tempo de espera passe rápido, que a gente possa acordar e dormir juntos, 
          ouvir a Bea reclamando juntos, rir das maluquices da Gabs, conversar com a Ayehsa, você me ver batendo no TH, ver você e Sam brincando de discutir, 
          ir na pracinha com Gueguel, nossos trezentos gatos e cachorros, ir no Karaoke, viver nossa rotina que tá só ali esperando a gente poder viver pra começar..
          A gente tem tanto o que viver, essa fase é só um tempo, temos que passar né? pra poder curtir la na frente...
          Vai dar tudo certo, esse ano a gente não pode ficar junto nesse dia, mas a gente vai poder lá na frente.. 
          vai que isso é um teste pra gente saber até aonde a gente se ama?
          Eu te quero muito, pra sempre, eu amo você, eu adoro você, eu quero viver em você, e isso é pro resto da vida, né?
        </p>
      </Content>
      <NavLink to={'/'}>
        <button>VOLTAR</button>
      </NavLink>
    </Container>
  )
}

export default Texto