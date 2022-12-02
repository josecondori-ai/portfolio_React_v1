

import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Route,Routes,BrowserRouter} from 'react-router-dom'
import {Contacto} from './pages/Contacto'
import { OtraPagina } from './pages/OtraPagina'


function App() {
  

  return (
    <div className="caja">
 <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/contacto' element={<Contacto/>} />
      <Route path='/otraPagina' element={<OtraPagina/>}/>
    </Routes>
  </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
