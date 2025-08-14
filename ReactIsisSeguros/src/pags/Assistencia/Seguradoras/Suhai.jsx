import './Seguradoras.css'

function Tokio() {

    return (
        <section id="Tokio" className='seguradoras-page'>
            <div className="logos-seguradoras text-center">
                <img src="/seguradoras/suhai.jpg" alt="Suhai Seguros" className="logo-suhai" />
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
                            <b>Vidros</b><br />
                            <a href="tel:08007078005" className="telefone-btn botao-topo">
                                <img src="/telefone.png" alt="Telefone" className="telWhats" /> 0800.707.8005
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <b>Carro Reserva</b><br />
                            <a href="tel:08002086546" className="telefone-btn botao-topo">
                                <img src="/telefone.png" alt="Telefone" className="telWhats" /> 0800.208.6546
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <b>WhatsApp</b><br />
                            <a href="https://wa.me/551121253212" className="telefone-btn botao-topo" target="_blank">
                                <img src="/whatsapp.png" alt="Whatsapp" className="telWhats" /> (11)2125.3212
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokio
