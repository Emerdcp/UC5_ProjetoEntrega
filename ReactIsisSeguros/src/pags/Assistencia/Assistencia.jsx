import { useEffect } from 'react'
import './Assistencia.css'

function Assistencia() {

    return (
        <section>
            <div id="modal-assistencia" className="modal">
                <div className="modal-content">
                    <span className="close" id="fechar-assistencia">&times;</span>
                    <h3 className="text-center"><b>Assistência 24hs</b></h3>
                    <p className="text-center">Escolha qual a sua seguradora.</p>
                    <div className="cards">
                        <div classn="card">
                            <a href="seguradoras/hdi.html"
                                style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
                                <img src="/logoSeguradoras/hdiSeguro.jpg" alt="HDI" />
                                    <h4>Clique aqui</h4>
                            </a>
                        </div>
                        <div className="card">
                           <a href="seguradoras/portoSeguro.html"
                                style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
                                <img src="/logoSeguradoras/portoSeguro.jpg" alt="Porto" />
                                    <h4>Clique aqui</h4>
                            </a>
                        </div>
                        <div className="card">
                            <a href="seguradoras/azulSeguro.html"
                                style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
                                <img src="/logoSeguradoras/azulSeguros.jpg" alt="Azul" />
                                    <h4>Clique aqui</h4>
                            </a>
                        </div>
                        <div className="card">
                            <a href="seguradoras/mitsui.html"
                                style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
                                <img src="/logoSeguradoras/mitsui.jpg" alt="Mitsui" />
                                    <h4>Clique aqui</h4>
                            </a>
                        </div>
                        <div className="card">
                            <a href="seguradoras/tokio.html"
                                style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
                                <img src="/logoSeguradoras/tokio.jpg" alt="Tokio" />
                                    <h4>Clique aqui</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Assistencia
