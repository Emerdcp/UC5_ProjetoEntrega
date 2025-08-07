import './Cards.css';
import '../../../src/App.css';

function Cards() {
  return (
    <>
      {/* Seção Quem Somos */}
      <section id="quemSomos">
        <div className="container">
          <div className="card contato-card">
            <div className="linha-topo">
              <h2 className="titulo-centralizado"><b>Quem Somos</b></h2>
            </div>
            <p>
              A ISÍS Seguros é uma corretora especializada em oferecer uma ampla gama de seguros e benefícios, tanto para
              pessoas físicas quanto para empresas. Com uma equipe altamente qualificada e parcerias sólidas com as melhores
              seguradoras do mercado, estamos preparados para identificar as soluções que atendem de forma personalizada às
              suas necessidades. Sempre em constante atualização e com uma infraestrutura completa, a nossa corretora se
              destaca pela excelência no atendimento, garantindo agilidade e eficácia na entrega de serviços. Confie na ISÍS
              Seguros para proteger o que é mais importante para você e sua empresa com a máxima segurança e profissionalismo.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Produtos - Cards */}
      <section id="produtos" className="produtos secao-cards">
        <div className="container carousel-dots">
          <div className="linha-topo">
            <h2 className="titulo-centralizado"><b>Principais Produtos</b></h2>
          </div>

          {/* Botão scroll esquerdo - implementar scrollCards depois */}
          <button className="btn-scroll left" onClick={() => console.log('scroll left')}>
            <img src="/imagens/left.png" alt="Voltar" className="seta-btn" />
          </button>

          {/* Cards */}
          <div className="cards-scroll" id="cardsContainer">
            <div className="cards">
              {[
                {
                  titulo: "Seguro Auto",
                  imagem: "seguroAuto.jpg",
                  descricao: "Com o nosso seguro de veículos, você garante a proteção do seu automóvel e ainda aproveita diversas vantagens exclusivas."
                },
                {
                  titulo: "Previdência",
                  imagem: "previdencia.jpg",
                  descricao: "Garanta um futuro seguro e tranquilo com um dos nossos planos de previdência, especialmente pensados para você."
                },
                {
                  titulo: "Seguro Residencial",
                  imagem: "seguroResidencial.jpg",
                  descricao: "Proteja seu patrimônio e ofereça a tranquilidade que você e sua família merecem."
                },
                {
                  titulo: "Seguro para Condomínio",
                  imagem: "condominio.jpg",
                  descricao: "Com o Seguro Condomínio, você elimina preocupações com imprevistos e ainda aproveita vantagens exclusivas."
                },
                {
                  titulo: "Seguro Empresariais",
                  imagem: "seguroEmpresariais.jpg",
                  descricao: "O Seguro Empresa protege o seu patrimônio com segurança e economia, garantindo tranquilidade para o crescimento do seu negócio."
                },
                {
                  titulo: "Seguro Caminhão",
                  imagem: "seguroCaminhao.jpg",
                  descricao: "Seu caminhão de trabalho merece um seguro completo, garantindo proteção total e segurança para seu negócio."
                },
                {
                  titulo: "Seguro de Vida Individual",
                  imagem: "seguroVida.jpg",
                  descricao: "Proteção completa para você e tranquilidade para quem você ama, garantindo o futuro de todos com segurança e cuidado."
                }
              ].map((produto, index) => (
                <div className="card" key={index}>
                  <img src={`/imagens/${produto.imagem}`} alt={produto.titulo} loading="lazy" />
                  <h3>{produto.titulo}</h3>
                  <p>{produto.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Botão scroll direito */}
          <button className="btn-scroll right" onClick={() => console.log('scroll right')}>
            <img src="/imagens/right.png" alt="Avançar" className="seta-btn" />
          </button>

          {/* Dots do carrossel - pendente implementação */}
          <div className="dots-container"></div>
        </div>
      </section>
    </>
  );
}

export default Cards;
