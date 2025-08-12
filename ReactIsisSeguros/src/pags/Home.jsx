import Menu from './Menu/Menu'
import Banner from './Banner/Banner'
import QuemSomos from './QuemSomos/QuemSomos'
import Produtos from './Produtos/Produtos'
import Formulario from './Formulario/Formulario'
import Localizacao from './Localizacao/Localizacao'

function Home() {
  return (
    <>
      <Banner />
      <QuemSomos />
      <Produtos />
      <Formulario />
      <Localizacao />
    </>
  )
}

export default Home

