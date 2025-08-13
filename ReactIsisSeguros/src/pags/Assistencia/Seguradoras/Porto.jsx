import './Seguradoras.css'

function Porto() {

    return (
        <section id="Porto" className='seguradoras-page'>
            <div className="logos-seguradoras text-center">
                <img src="/seguradoras/portoSeguro.jpg" alt="Porto Seguros" className="logo-porto" />
            </div>
            <div className="textos-seguradoras text-center">
                <h1>Assistência 24hs</h1>
                <div className="container d-flex justify-content-center align-items-center text-center">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <b>Capitais</b><br />
                            <a href="tel:4004076786" className="telefone-btn botao-topo">
                                <img src="/telefone.png" alt="Telefone" className="telWhats" /> 4004.076.786
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <b>Demais Localidades</b><br />
                            <a href="tel:03003376786" className="telefone-btn botao-topo">
                                <img src="/telefone.png" alt="Telefone" className="telWhats" /> 0300.337.6786
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

export default Porto
