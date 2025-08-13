import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Collapse } from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Menu.css'

function Menu() {
    const location = useLocation();

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const logo = document.getElementById('logo');
        const menuIcon = document.getElementById('menu-icon');
        const navbarNav = document.getElementById('navbarNav');

        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-shrink');
                logo.classList.add('logo-shrink');
                menuIcon.classList.add('icon-shrink');
                navbarNav.classList.add('navbar-collapse-shrink');
            } else {
                navbar.classList.remove('navbar-shrink');
                logo.classList.remove('logo-shrink');
                menuIcon.classList.remove('icon-shrink');
                navbarNav.classList.remove('navbar-collapse-shrink');
            }
        }

        const closeMenuOnClick = () => {
            const navLinks = document.querySelectorAll('.nav-link');
            const navbarCollapse = document.querySelector('.navbar-collapse');

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navbarCollapse) {
                        const bsCollapse = new Collapse(navbarCollapse, { toggle: false });
                        bsCollapse.hide();
                    }
                });
            });
        }

        // Ajusta padding da seção hero
        const hero = document.querySelector('.hero');
        if (hero && navbar) {
            const navbarHeight = navbar.offsetHeight;
            hero.style.paddingTop = `${navbarHeight}px`;
        }

        // Eventos
        window.addEventListener('scroll', handleScroll);
        closeMenuOnClick();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Fecha o menu sempre que a rota mudar
    useEffect(() => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
    }, [location]); // Executa quando a URL muda

    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        id="logo"
                        src="/logoIsisSeguro.png"
                        alt="Logo Isis Seguros"
                        title="Isis Seguro"
                        className="logo-imglogo"
                        loading="lazy"
                    />
                </a>
                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span id="menu-icon" className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Início</Link></li>
                        <li className="nav-item"><a className="nav-link" href="https://isisseguros.aggilizador.com.br/" target="_blank" rel="noopener noreferrer">Cotação</a></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#quemSomos">Quem Somos</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#produtos">Produtos</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#contato">Contato</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#localizacao">Localização</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/assistencia" id="btn-assistencia">Assistência 24hs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu
