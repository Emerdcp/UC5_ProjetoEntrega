// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
