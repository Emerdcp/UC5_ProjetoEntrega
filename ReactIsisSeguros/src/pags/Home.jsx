import Menu from './Menu/Menu'
import Banner from './Banner/Banner'
import QuemSomos from './QuemSomos/QuemSomos'
import Produtos from './Produtos/Produtos'
import Formulario from './Formulario/Formulario'
import Localizacao from './Localizacao/Localizacao'
import AccessibilityBar from './Acessibilidade/AccessibilityBar'

function Home() {
  return (
    <>
      <a
        href="https://wa.me/554130451700"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-popup"
        style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 999 }}
      >
        <img src="/whatsapp.png" alt="WhatsApp" />
      </a>

      <Banner />
      <QuemSomos />
      <Produtos />
      <Formulario />
      <Localizacao />


    </>
  )
}

export default Home

