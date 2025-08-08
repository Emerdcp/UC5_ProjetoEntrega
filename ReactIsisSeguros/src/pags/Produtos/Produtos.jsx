import { useEffect, useRef, useState, useCallback } from "react";
import './Produtos.css'
import '../../../src/App.css'

function Produtos() {
    return (
        <section id="produtos" className="produtos secao-cards">
            <div className="container carousel-dots">
                <div className="linha-topo">
                    <h2 className="titulo-centralizado"><b>Principais Produtos</b></h2>
                </div>
                <button className="btn-scroll left" onclick="scrollCards('left')">
                    <img src="/left.png" alt="Voltar" className="seta-btn" /></button>
                <div className="cards-scroll " id="cardsContainer">
                    <div className="cards">
                        <div className="card" data-produto="auto">
                            <img src="/seguroAuto.jpg" alt="Seguro Auto" loading="lazy" />
                                <h3>Seguro Auto</h3>
                                <p>Com o nosso seguro de veículos, você garante a proteção do seu automóvel e ainda aproveita diversas
                                    vantagens exclusivas.</p>
                        </div>
                        <div className="card" data-produto="previdencia">
                            <img src="/previdencia.jpg" alt="Previdência" loading="lazy" />
                                <h3>Previdência</h3>
                                <p>Garanta um futuro seguro e tranquilo com um dos nossos planos de previdência, especialmente pensados para
                                    você.</p>
                        </div>
                        <div className="card" data-produto="residencial">
                            <img src="/seguroResidencial.jpg" alt="Seguro Residencial" loading="lazy" />
                                <h3>Seguro Residencial</h3>
                                <p>O Seguro Residencial foi desenvolvido para proteger seu patrimônio e oferecer a tranquilidade que você e
                                    sua família merecem.</p>
                        </div>
                        <div className="card" data-produto="condominio">
                            <img src="/condominio.jpg" alt="Condominio" loading="lazy" />
                                <h3>Seguro para Condomínio</h3>
                                <p>Com o Seguro Condomínio, você elimina preocupações com imprevistos e ainda aproveita uma série de
                                    vantagens exclusivas.</p>
                        </div>
                        <div className="card" data-produto="empresariais">
                            <img src="/seguroEmpresariais.jpg" alt="Empresariais" loading="lazy" />
                                <h3>Seguro Empresariais</h3>
                                <p>O Seguro Empresa protege o seu patrimônio com eficiência, segurança e a melhor economia, garantindo
                                    tranquilidade para o crescimento do seu negócio.</p>
                        </div>
                        <div className="card" data-produto="seguroCaminhao"> 
                            <img src="/seguroCaminhao.jpg" alt="Seguro Caminhão" loading="lazy" />
                                <h3>Seguro Caminhão</h3>
                                <p>Seu caminhão de trabalho merece um seguro completo, garantindo proteção total e a segurança que seu
                                    negócio precisa.</p>
                        </div>
                        <div className="card" data-produto="seguroVida">
                            <img src="/seguroVida.jpg" alt="Seguro Vida" loading="lazy" />
                                <h3>Seguro de Vida Individual</h3>
                                <p>Proteção completa para você e tranquilidade para quem você ama, garantindo o futuro de todos com
                                    segurança e cuidado.</p>
                        </div>
                    </div>
                </div>
                <button className="btn-scroll right" onclick="scrollCards('right')">
                    <img src="/right.png" alt="Avançar" className="seta-btn" /></button>
                <div class="dots-container"></div>
            </div>
        </section>
    )
}

export default Produtos