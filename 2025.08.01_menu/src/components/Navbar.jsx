//src/components/Navbar.jsx

import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <header>
            <nav className='nav-bar'>
                <div className='logo'>
                    Teste Menu
                </div>
                <ul className='ul'>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;