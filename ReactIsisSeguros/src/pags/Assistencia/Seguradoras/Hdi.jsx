import './Seguradoras.css'

function Hdi() {

    return (
        <section id="Hdi" className='seguradoras-page'>
            <div className="logos-seguradoras text-center">
                <img src="/seguradoras/hdiSeguro.jpg" alt="HDI Seguros" className="logo-hdi" />
            </div>
            <div className="textos-seguradoras text-center">
                <h1>Assistência 24hs</h1>
                <div className="container d-flex justify-content-center align-items-center text-center">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <b>Capitais</b><br />
                            <a href="tel:30035390" className="telefone-btn botao-topo">
                                <img src="/telefone.png" alt="Telefone" className="telWhats" /> 3003.5390
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <b>Demais Localidades</b><br />
                            <a href="tel:08004344340" className="telefone-btn botao-topo">
                                <img src="/telefone.png" alt="Telefone" className="telWhats" /> 0800.434.4340
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <b>WhatsApp</b><br />
                            <a href="https://wa.me/552139062985" className="telefone-btn botao-topo" target="_blank">
                                <img src="/whatsapp.png" alt="Whatsapp" className="telWhats" /> (21)3906.2985
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hdi
