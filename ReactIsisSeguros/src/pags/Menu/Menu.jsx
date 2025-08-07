import { useEffect } from 'react'
import './Menu.css'

function Menu() {
    useEffect(() => {
        const handleScroll = () => {
            const logo = document.getElementById('logo');
            const navbar = document.querySelector('.navbar');
            const menuIcon = document.getElementById('menu-icon');
            const navbarNav = document.getElementById('navbarNav');

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
                    if (navbarCollapse && bootstrap.Collapse) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                            toggle: false
                        });
                        bsCollapse.hide();
                    }
                });
            });
        }

        const hero = document.querySelector('.hero');
        const navbar = document.querySelector('.navbar');
        if (hero && navbar) {
            const navbarHeight = navbar.offsetHeight;
            hero.style.paddingTop = `${navbarHeight}px`;
        }


        window.addEventListener('scroll', handleScroll);
        closeMenuOnClick();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

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
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span id="menu-icon" className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Início</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://isisseguros.aggilizador.com.br/" target="_blank" rel="noopener noreferrer">Cotação</a></li>
                        <li className="nav-item"><a className="nav-link" href="#quemSomos">Quem Somos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#produtos">Produtos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
                        <li className="nav-item"><a className="nav-link" href="#localizacao">Localização</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" id="btn-assistencia">Assistência 24hs</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); alert("Abrir login..."); }}>Área Restrita</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu
