import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
// import Menu from './pags/Menu/Menu'
// import Banner from './pags/Banner/Banner'
// import QuemSomos from '../pags/QuemSomos/QuemSomos'
// import Produtos from './pags/Produtos/Produtos'
// import Formulario from './pags/Formulario/Formulario'
// import Localizacao from './pags/Localizacao/Localizacao'
// import Footer from './pags/Footer/Footer'
import Home from './pags/Home';
import Assistencia from './pags/Assistencia/Assistencia';
import Layout from './pags/layout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='Assistencia' element={<Assistencia />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
