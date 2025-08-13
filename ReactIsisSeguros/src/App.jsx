import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Home from './pags/Home';
import Assistencia from './pags/Assistencia/Assistencia';
import Layout from './pags/layout';
import Azul from './pags/Assistencia/Seguradoras/Azul';
import Hdi from './pags/Assistencia/Seguradoras/Hdi';
import Porto from './pags/Assistencia/Seguradoras/Porto';
import Mitsui from './pags/Assistencia/Seguradoras/Mitsui';
import Tokio from './pags/Assistencia/Seguradoras/Tokio';

// Função que observa mudanças na URL e rola para o elemento com o ID correspondente
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* Observa mudanças de rota e executa scroll */}
      <ScrollToHashElement />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='assistencia' element={<Assistencia />} />
          <Route path='assistencia/seguradoras/azul' element={<Azul />} />
          <Route path='assistencia/seguradoras/hdi' element={<Hdi />} />
          <Route path='assistencia/seguradoras/porto' element={<Porto />} />
          <Route path='assistencia/seguradoras/mitsui' element={<Mitsui />} />
          <Route path='assistencia/seguradoras/tokio' element={<Tokio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
