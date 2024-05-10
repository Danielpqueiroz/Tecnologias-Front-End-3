import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicial from './pages/Inicial'
import AFaculdade from './pages/AFaculdade'
import Lgpd from './pages/Lgpd'
import Noticias from './pages/Noticias'
import Navbar from  './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <img src="uniesp.png" alt="" />
      <Navbar />
      <br /><br /><br />
      <br />
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/a-faculdade' element={<AFaculdade />} />
        <Route path='/lgpd' element={<Lgpd />} />
        <Route path='/noticias' element={<Noticias />} />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App