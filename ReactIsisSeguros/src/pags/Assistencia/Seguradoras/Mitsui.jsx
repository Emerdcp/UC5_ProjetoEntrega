import './Seguradoras.css'

function Mitsui() {

    return (
        <section id="Mitsui" className='seguradoras-page'>
            <div className="logos-seguradoras text-center">
                <img src="/seguradoras/mitsui.jpg" alt="Mitsui Seguros" className="logo-mitsui" />
            </div>
            <div className="textos-seguradoras text-center">
                <h1>Assistência 24hs</h1>
                <div className="container d-flex justify-content-center align-items-center text-center">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <b>Capitais</b><br />
                            <a href="tel:03007726744" className="telefone-btn botao-topo">
                                <img src="/telefone.png" alt="Telefone" className="telWhats" /> 0300.772.6744
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <b>Demais Localidades</b><br />
                            <a href="tel:08007030203" className="telefone-btn botao-topo">
                                <img src="/telefone.png" alt="Telefone" className="telWhats" /> 0800.703.0203
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

export default Mitsui
