import { Outlet, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer'

// function Home() {
function Layout() {

  return (
    <>
      <div className='container'>
        <Menu />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout

