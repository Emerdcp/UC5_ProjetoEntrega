import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function FormCotacao() {
    const form = useRef();

    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [emailValido, setEmailValido] = useState(true);

    // Máscara de telefone
    const handleTelefoneChange = (e) => {
        let valor = e.target.value.replace(/\D/g, ""); // remove não números
        if (valor.length > 10) {
            valor = valor.replace(/(\d{2})(\d{5})(\d{4}).*/, "($1)$2-$3");
        } else {
            valor = valor.replace(/(\d{2})(\d{4,5})(\d{0,4}).*/, "($1)$2-$3");
        }
        setTelefone(valor);
    };

    // Validação de e-mail
    const handleEmailChange = (e) => {
        const valor = e.target.value;
        setEmail(valor);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValido(regex.test(valor));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!emailValido) {
            alert("Por favor, insira um e-mail válido!");
            return;
        }

        emailjs.sendForm(
            "service_n5m1ssc", // substitua
            "template_k96vv5r", // substitua
            form.current,
            "LWzKdJb2Xgp-bAvNa" // substitua
        )
            .then(() => {
                alert("Mensagem enviada com sucesso! ✅");
                form.current.reset();
                setTelefone("");
                setEmail("");
            })
            .catch((error) => {
                console.error("Erro:", error);
                alert("Ocorreu um erro ao enviar a mensagem ❌");
            });
    };

    const limparFormulario = () => {
        form.current.reset();
        setTelefone("");
        setEmail("");
        setEmailValido(true);
    };

    return (
        <section id="contato" className="proposta">
            <div className="container">
                <div className="card contato-card">
                    <div className="linha-topo">
                        <h2 className="titulo-centralizado"><b>Entre em Contato</b></h2>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="container mb-4">
                        <div className="row g-3">
                            <div className="col-md-3">
                                <label className="form-label">Nome:</label>
                                <input type="text" name="name" placeholder="Seu nome" required />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Título:</label>
                                <input type="text" name="title" placeholder="Título" required />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Telefone:</label>
                                <input
                                    type="text"
                                    name="telefone"
                                    value={telefone}
                                    onChange={handleTelefoneChange}
                                    placeholder="(00)00000-0000"
                                    required
                                    maxLength="15"
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">E-mail:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="seuemail@email.com"
                                    required
                                    className={`form-control ${!emailValido ? "is-invalid" : ""}`}
                                />
                                {!emailValido && (
                                    <div className="invalid-feedback">Digite um e-mail válido</div>
                                )}
                            </div>
                            <div className="col-md-12">
                                <label className="form-label">Mensagem:</label>
                                <textarea name="mensagem" placeholder="Digite sua mensagem" required></textarea>
                            </div>
                            <div className="col-12 text-end">
                                <button type="submit">Enviar</button>
                                <button type="button" className="botao ms-2" onClick={limparFormulario}>Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
