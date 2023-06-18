import HiBabe from './components/hi-babe/hi-babe'
import OurThings from './components/our-things/our-things';
import Prints from './components/prints/prints';
import Texto from './components/texto/texto';
import GlobalStyle from './global-style'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'


function App() {

  const password = 'baba'

  

  return (
    <BrowserRouter >
      <Routes>
        <Route path={'/'} element={<HiBabe />}/>
        <Route path={'/>our-things'} element={<OurThings />}/>
        <Route path={'/text'} element={<Texto />}/>
        <Route path={'/prints'} element={<Prints />}/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
