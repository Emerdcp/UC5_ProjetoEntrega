import { useEffect, useRef, useState, useCallback } from "react";
import "./Produtos.css";
import "../../../src/App.css";

export default function Produtos() {
  const containerRef = useRef(null);     // #cardsContainer (.cards-scroll)
  const wrapperRef   = useRef(null);     // .cards (wrapper dos .card)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Helpers equivalentes ao seu JS
  const getCards = useCallback(() => {
    const wrapper = wrapperRef.current;
    return wrapper ? wrapper.querySelectorAll(".card") : [];
  }, []);

  const getCardWidth = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return 0;
    const first = wrapper.querySelector(".card");
    if (!first) return 0;
    const style = window.getComputedStyle(wrapper);
    const gap = parseFloat(style.gap) || 0;
    return first.offsetWidth + gap;
  }, []);

  const recalcPages = useCallback(() => {
    const container = containerRef.current;
    const cardW = getCardWidth();
    if (!container || !cardW) return;

    const cardsPerView = Math.max(1, Math.floor(container.offsetWidth / cardW));
    const pages = Math.max(1, Math.ceil(getCards().length / cardsPerView));
    setTotalPages(pages);
    setCurrentIndex((i) => Math.min(i, pages - 1)); // garante limite após resize
  }, [getCardWidth, getCards]);

  const scrollToCard = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardW = getCardWidth();
    const cardsPerView = Math.max(1, Math.floor(container.offsetWidth / (cardW || 1)));
    const pages = Math.max(1, Math.ceil(getCards().length / cardsPerView));
    const maxIndex = pages - 1;
    const idx = Math.min(currentIndex, maxIndex);

    const target =
      idx === maxIndex
        ? container.scrollWidth - container.clientWidth
        : cardW * cardsPerView * idx;

    container.scrollTo({ left: target, behavior: "smooth" });
  }, [currentIndex, getCardWidth, getCards]);

  const handleArrow = useCallback((direction) => {
    const container = containerRef.current;
    if (!container) return;

    const cardW = getCardWidth();
    const cardsPerView = Math.max(1, Math.floor(container.offsetWidth / (cardW || 1)));
    const pages = Math.max(1, Math.ceil(getCards().length / cardsPerView));
    const maxIndex = pages - 1;

    setCurrentIndex((i) => {
      if (direction === "left")  return i > 0 ? i - 1 : maxIndex;
      if (direction === "right") return i < maxIndex ? i + 1 : 0;
      return i;
    });
  }, [getCardWidth, getCards]);

  // Monta dots e recalcula em load/resize (equivalente ao seu addEventListener)
  useEffect(() => {
    recalcPages();
    const onResize = () => { recalcPages(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [recalcPages]);

  // Faz o scroll quando currentIndex muda
  useEffect(() => { scrollToCard(); }, [currentIndex, scrollToCard]);

  // Se as imagens carregarem depois, recalcula
  const onImgLoad = () => setTimeout(recalcPages, 50);

  return (
    <section id="produtos" className="produtos secao-cards">
      <div className="container carousel-dots">
        <div className="linha-topo">
          <h2 className="titulo-centralizado"><b>Principais Produtos</b></h2>
        </div>

        <button className="btn-scroll left" type="button" onClick={() => handleArrow("left")}>
          <img src="/left.png" alt="Voltar" className="seta-btn" />
        </button>

        <div className="cards-scroll" id="cardsContainer" ref={containerRef}>
          <div className="cards" ref={wrapperRef}>
            <div className="card" data-produto="auto">
              <img src="/seguroAuto.jpg" alt="Seguro Auto" loading="lazy" onLoad={onImgLoad}/>
              <h3>Seguro Auto</h3>
              <p>Com o nosso seguro de veículos, você garante a proteção do seu automóvel e ainda aproveita diversas vantagens exclusivas.</p>
            </div>
            <div className="card" data-produto="previdencia">
              <img src="/previdencia.jpg" alt="Previdência" loading="lazy" onLoad={onImgLoad}/>
              <h3>Previdência</h3>
              <p>Garanta um futuro seguro e tranquilo com um dos nossos planos de previdência, especialmente pensados para você.</p>
            </div>
            <div className="card" data-produto="residencial">
              <img src="/seguroResidencial.jpg" alt="Seguro Residencial" loading="lazy" onLoad={onImgLoad}/>
              <h3>Seguro Residencial</h3>
              <p>O Seguro Residencial foi desenvolvido para proteger seu patrimônio e oferecer a tranquilidade que você e sua família merecem.</p>
            </div>
            <div className="card" data-produto="condominio">
              <img src="/condominio.jpg" alt="Condominio" loading="lazy" onLoad={onImgLoad}/>
              <h3>Seguro para Condomínio</h3>
              <p>Com o Seguro Condomínio, você elimina preocupações com imprevistos e ainda aproveita uma série de vantagens exclusivas.</p>
            </div>
            <div className="card" data-produto="empresariais">
              <img src="/seguroEmpresariais.jpg" alt="Empresariais" loading="lazy" onLoad={onImgLoad}/>
              <h3>Seguro Empresariais</h3>
              <p>O Seguro Empresa protege o seu patrimônio com eficiência, segurança e a melhor economia, garantindo tranquilidade para o crescimento do seu negócio.</p>
            </div>
            <div className="card" data-produto="seguroCaminhao">
              <img src="/seguroCaminhao.jpg" alt="Seguro Caminhão" loading="lazy" onLoad={onImgLoad}/>
              <h3>Seguro Caminhão</h3>
              <p>Seu caminhão de trabalho merece um seguro completo, garantindo proteção total e a segurança que seu negócio precisa.</p>
            </div>
            <div className="card" data-produto="seguroVida">
              <img src="/seguroVida.jpg" alt="Seguro Vida" loading="lazy" onLoad={onImgLoad}/>
              <h3>Seguro de Vida Individual</h3>
              <p>Proteção completa para você e tranquilidade para quem você ama, garantindo o futuro de todos com segurança e cuidado.</p>
            </div>
          </div>
        </div>

        <button className="btn-scroll right" type="button" onClick={() => handleArrow("right")}>
          <img src="/right.png" alt="Avançar" className="seta-btn" />
        </button>

        {/* Dots iguais ao seu .dots-container, mas renderizados pelo React */}
        <div className="dots-container">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              role="button"
              tabIndex={0}
              aria-label={`Ir para página ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
