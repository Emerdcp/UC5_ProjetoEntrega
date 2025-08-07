import './Formulario.css';
import '../../../src/App.css';

function Formulario() {
    return (
        <section id="contato" class="proposta">
            <div class="container">
                <div class="card contato-card">
                    <div class="linha-topo">
                        <h2 class="titulo-centralizado"><b>Entre em Contato</b></h2>
                    </div>
                    <form class="container mb-4" id="form-proposta" action="enviar-email.php" method="POST">
                        <div class="row g-3">
                            <div class="col-md-4">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="nome" name="nome" placeholder="Seu nome" required />
                                <small class="form-text text-muted"></small>
                            </div>
                            <div class="col-md-4">
                                <label for="telefone" class="form-label">Telefone</label>
                                <input type="tel" class="form-control" id="telefone" name="telefone" placeholder="(99)99999-9999"
                                    required /> 
                            </div>
                            <div class="col-md-4">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="exemplo@dominio.com"
                                    required />
                            </div>
                            <div class="col-12">
                                <label for="mensagem" class="form-label">Mensagem</label>
                                <textarea class="form-control" id="mensagem" name="mensagem" placeholder="Sua mensagem" rows="4"
                                    required></textarea>
                            </div>
                            <div class="col-12 text-end">
                                <button type="submit">Enviar</button>
                                <button type="button" class="botao" onclick="limparFormulario()">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Formulario