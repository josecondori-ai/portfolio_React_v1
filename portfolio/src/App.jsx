

import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Route,Routes,BrowserRouter} from 'react-router-dom'
import {Contacto} from './pages/Contacto'


function App() {
  

  return (
    <div className="caja">
 <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/contacto' element={<Contacto/>} />
    </Routes>
  </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
