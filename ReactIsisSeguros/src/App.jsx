import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import Menu from './pags/Menu/Menu'
import Banner from './pags/Banner/Banner'
import QuemSomos from './pags/QuemSomos/QuemSomos'

import Formulario from './pags/Formulario/Formulario'
import Localizacao from './pags/Localizacao/Localizacao'
import Footer from './pags/Footer/Footer'

function App() {

  return (
    <>
      {/* <div className='container'> */}
        <Menu />
        <Banner />
        <QuemSomos />

        <Formulario />
        <Localizacao />
        <Footer />
      {/* </div> */}
    </>
  )
}

export default App
