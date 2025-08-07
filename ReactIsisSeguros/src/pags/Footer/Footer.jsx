import './Footer.css';
import '../../../src/App.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <span>
                    © ÍSIS Seguros. Todos os direitos reservados. Siga nossas redes sociais:
                </span>
                <a href="https://www.facebook.com/isis.seguros/" target="_blank">
                    <img src="/facebook.png" alt="Facebook" className="redesSociais" />
                </a>
                <a href="https://www.instagram.com/isis.seguros/" target="_blank">
                    <img src="/instagram.png" alt="Instagram" className="redesSociais" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
