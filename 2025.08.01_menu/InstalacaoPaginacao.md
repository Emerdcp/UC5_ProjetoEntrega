
# 🌐 Projeto React - Site com Múltiplas Páginas

Este é um projeto desenvolvido com React, que simula um site institucional com navegação entre páginas usando `react-router-dom`. A estrutura é composta por componentes reutilizáveis como `Navbar`, `Banner` e `Footer`, além de páginas dedicadas para "Home", "Sobre" e "Contato".

---

## 📁 Estrutura do Projeto

```
src/
├── assets/                # Imagens e outros recursos estáticos
├── components/            # Componentes reutilizáveis
│   ├── Banner.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
├── pages/                 # Páginas principais do site
│   ├── Home.jsx
│   ├── Sobre.jsx
│   ├── Contato.jsx
├── App.jsx                # Configuração das rotas
├── main.jsx               # Ponto de entrada da aplicação
├── App.css                # Estilos globais
```

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- HTML5 & CSS3
- JavaScript (ES6+)
- Vite (ou CRA, dependendo do seu setup)

---

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm run dev
```

---

## 🧭 Navegação

- `/` - Página Inicial (`Home`)
- `/sobre` - Página Sobre
- `/contato` - Página Contato

A navegação é feita pelo componente `Navbar`, utilizando os links do `react-router-dom`.





## 🧱 Componentes instalação 

Instalação para navegação de paginação.

```
npm install react-router-dom
```


Seu package.json está quase todo correto, mas tem um pequeno problema com a versão do react-router-dom.

## ❌ Problema:
Você está usando:

```
"react-router-dom": "^7.7.1"
```
Não existe versão 7.x.x do react-router-dom até o momento.
A versão mais recente (em agosto de 2025) é a 6.x — por exemplo:

```
"react-router-dom": "^6.23.0"
```

## ✅ Correção recomendada
Atualize essa parte do seu package.json:

```
"dependencies": {
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^6.23.0"
}
```

## 📦 Como corrigir via terminal
Remova a versão incorreta:

```
npm uninstall react-router-dom
```

## Instale a versão correta:

```
npm install react-router-dom@latest
```

## ✅ Verificação extra
Você está usando o Vite (ótimo para desenvolvimento rápido)

O type: "module" está certo para ESM

Os scripts dev, build, preview estão corretos

ESLint configurado










---

## 🧱 Componentes

- `Navbar`: Navegação principal do site.
- `Banner`: Exibido na Home como mensagem de boas-vindas.
- `Footer`: Rodapé fixo comum a todas as páginas.

---

## ✍️ Autor

Desenvolvido por **[Seu Nome]** – [Seu LinkedIn](https://linkedin.com/in/seu-usuario)  
Publicado em **Agosto de 2025**

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.
