import './Formulario.css';
import '../../../src/App.css';

function Formulario() {
    const handleSubmit = (event) => {
        event.preventDefault(); // evita o reload da página
        console.log("Form enviado!");
        // Aqui você pode capturar os valores e enviar via fetch/axios para seu backend
    };

    const limparFormulario = () => {
        document.getElementById("form-proposta").reset();
    };

    return (
        <section id="contato" className="proposta">
            <div className="container">
                <div className="card contato-card">
                    <div className="linha-topo">
                        <h2 className="titulo-centralizado"><b>Entre em Contato</b></h2>
                    </div>
                    <form className="container mb-4" id="form-proposta" action="enviar-email.php" method="POST">
                        <div className="row g-3">
                            <div className="col-md-4">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="nome" name="nome" placeholder="Seu nome" required />
                                <small className="form-text text-muted"></small>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="telefone" className="form-label">Telefone</label>
                                <input type="tel" className="form-control" id="telefone" name="telefone" placeholder="(99)99999-9999"
                                    required /> 
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="exemplo@dominio.com"
                                    required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="mensagem" className="form-label">Mensagem</label>
                                <textarea className="form-control" id="mensagem" name="mensagem" placeholder="Sua mensagem" rows="4"
                                    required></textarea>
                            </div>
                            <div className="col-12 text-end">
                                <button type="submit">Enviar</button>
                                <button type="button" className=" botao ms-2" onClick={limparFormulario}>Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Formulario