import './Localizacao.css';
import '../../../src/App.css';

function Localizacao() {
    return (
        <section id="localizacao">
            <div className="container">
                <div className="card contato-card">
                    <div className="linha-topo">
                        <h2 className="titulo-centralizado"><b>Localização</b></h2>
                    </div>

                    <div className="container mb-4">
                        <div className="row g-3">
                            <div className="col-md-4">
                                <h4 className="titulo-centralizado"><b>ÍSIS Seguros</b></h4>
                                <p>Rua Habib Sarkis, 74 - Aviação</p>
                                <p>São José dos Pinhais/PR</p>
                                <p><b>CEP:</b> 83.045-725</p>

                                <p>
                                    <img src="/telefone.png" alt="Telefone" style={{ width: '20px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    (41) 3045-1700
                                </p>
                                <p>
                                    <img src="/telefone.png" alt="Telefone" style={{ width: '20px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    (41) 99195-1640
                                </p>
                                <p>
                                    <a href="https://wa.me/554130451700"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <img src="/whatsapp.png"
                                            alt="WhatsApp"
                                            style={{ width: '20px', verticalAlign: 'middle', marginRight: '5px' }}
                                        />
                                        (41) 3045-1700
                                    </a>
                                </p>
                                <p>
                                    <img src="/email.png" alt="E-mail" style={{ width: '20px', verticalAlign: 'middle', marginRight: '5px' }} />
                                    isisseguros1@gmail.com
                                </p>
                            </div>

                            <div className="col-md-8">
                                <div style={{ marginTop: '20px' }}>
                                    <iframe
                                        src="https://www.google.com/maps?q=Rua+Habib+Sarkis,+74,+São+José+dos+Pinhais,+PR&output=embed"
                                        width="100%"
                                        height="320"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Mapa localização"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Localizacao;
