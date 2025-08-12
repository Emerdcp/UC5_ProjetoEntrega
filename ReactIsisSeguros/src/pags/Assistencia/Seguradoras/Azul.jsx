import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Azul.css'

function Azul() {

    return (
        <header id="azul">
            <div className="logos-seguradoras text-center">
                <img src="../imagens/logoSeguradoras/azulSeguros.jpg" alt="Porto Seguros" className="logo-azulseguros" />
            </div>
            <div className="text-center">
                <a href="../index.html" className="botao-home">
                    <img src="../imagens/isis.png" alt="Home" /> Voltar</a>
            </div>
            <div className="textos-seguradoras text-center">
                <h1>Assistência 24hs</h1>
                <div className="container d-flex justify-content-center align-items-center text-center">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <b>Capitais</b><br />
                            <a href="tel:40043700" className="telefone-btn botao-topo">
                                <img src="../imagens/telefone.png" alt="Telefone" className="telWhats" /> 4004.3700
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <b>Demais Localidades</b><br />
                            <a href="tel:08007030203" className="telefone-btn botao-topo">
                                <img src="../imagens/telefone.png" alt="Telefone" className="telWhats" /> 0800.703.0203
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <b>WhatsApp</b><br />
                            <a href="https://wa.me/552139062985" className="telefone-btn botao-topo" target="_blank">
                                <img src="../imagens/whatsapp.png" alt="Whatsapp" className="telWhats" /> (21)3906.2985
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Azul
