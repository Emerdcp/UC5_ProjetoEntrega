import { Link } from 'react-router-dom'
import './Assistencia.css'


function Assistencia() {

    return (
        <section className='assistencia-page'>
            <div className="modal-content">
                <div className="assistencia-container">
                    <h3 className="text-center"><b>Assistência 24hs</b></h3>
                    <p className="text-center">Escolha qual a sua seguradora.</p>
                    <div className="cards">
                        <div className="card">
                            <Link
                                to="/assistencia/seguradoras/Azul"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <img src="/seguradoras/azulSeguros.jpg" alt="Azul" />
                                <h4>Clique aqui</h4>
                            </Link>
                        </div>
                        <div className="card">
                            <Link
                                to="/assistencia/seguradoras/Hdi"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <img src="/seguradoras/hdiSeguro.jpg" alt="HDI" />
                                <h4>Clique aqui</h4>
                            </Link>
                        </div>
                        <div className="card">
                            <Link
                                to="/assistencia/seguradoras/Porto"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <img src="/seguradoras/portoSeguro.jpg" alt="Porto Seguro" />
                                <h4>Clique aqui</h4>
                            </Link>
                        </div>
                        <div className="card">
                            <Link
                                to="/assistencia/seguradoras/Mitsui"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <img src="/seguradoras/mitsui.jpg" alt="Mitsui" />
                                <h4>Clique aqui</h4>
                            </Link>
                        </div>
                        <div className="card">
                            <Link
                                to="/assistencia/seguradoras/Tokio"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <img src="/seguradoras/tokio.jpg" alt="Tokio" />
                                <h4>Clique aqui</h4>
                            </Link>
                        </div>
                        <div className="card">
                            <Link
                                to="/assistencia/seguradoras/suhai"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <img src="/seguradoras/suhai.jpg" alt="Tokio" />
                                <h4>Clique aqui</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Assistencia
