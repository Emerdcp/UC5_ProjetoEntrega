
# 📘 Guia de Criação do Projeto "Site Institucional" com React + Vite

Repositório inicial: [https://github.com/3insteinDev/site-institucional](https://github.com/3insteinDev/site-institucional)

---

## ✅ 1. Criação do Projeto com Vite

```bash
# Acesse a pasta onde deseja criar o projeto
cd caminho/para/sua/pasta

# Crie o projeto com Vite e template React
npm create vite@latest site-institucional -- --template react
ou
# Crie o projeto com Vite e template React se tive dentro da pasta
npm create vite@latest .

# Acesse a pasta do projeto
cd site-institucional

# Instale as dependências
npm install

# Rode o projeto localmente
npm run dev
```

---

## ✅ 2. Limpar Projeto

### App.jsx
```jsx
function App() {
  return (
    <div>
      <h1>Bem-vindo ao Site Institucional</h1>
      <p>Este é um projeto em React com Vite!</p>
    </div>
  );
}

export default App;
```

### index.html
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Site Institucional</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## ✅ 3. Estrutura de Pastas

```
src/
│
├── components/      # Componentes reutilizáveis
├── pages/           # Páginas do site (Home, Sobre, Contato, etc)
├── App.jsx
├── main.jsx
```

---

## ✅ 4. Versionamento com Git e GitHub

```bash
# Inicialize o repositório Git
git init

# Adicione os arquivos e crie o primeiro commit
git add .
git commit -m "Início do projeto institucional com React e Vite"

# Crie um repositório no GitHub, exemplo: site-institucional

# Adicione o repositório remoto e envie o projeto
git remote add origin https://github.com/SEU-USUARIO/site-institucional.git
git branch -M main
git push -u origin main
```

---

## ✅ 5. Fluxo de Commits com Semântica

```bash
# Exemplo de commit para nova funcionalidade
git add .
git commit -m "feat: adiciona seção sobre nós"
git push
```

### Prefixos recomendados:
- `feat:` nova funcionalidade  
- `fix:` correção de bug  
- `style:` ajustes visuais  
- `refactor:` melhoria/refatoração de código  
- `docs:` alterações na documentação  

---

## ✅ 6. Estrutura HTML/CSS/JS Tradicional

```html
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="banner">
      <h1>Bem-vindo ao nosso site</h1>
      <p>Conheça nossos serviços e soluções</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Meu Site</p>
  </footer>
</body>
```

---

## ✅ 7. Convertendo para React

### 📁 Estrutura React
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Banner.jsx
│   └── Footer.jsx
├── pages/
│   └── Home.jsx
├── App.jsx
└── main.jsx
```

---

### 🔹 Navbar.jsx

```jsx
// src/components/Navbar.jsx
function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
```

---

### 🔹 Banner.jsx

```jsx
// src/components/Banner.jsx
function Banner() {
  return (
    <section className="banner">
      <h1>Bem-vindo ao nosso site</h1>
      <p>Conheça nossos serviços e soluções</p>
    </section>
  );
}

export default Banner;
```

---

### 🔹 Footer.jsx

```jsx
// src/components/Footer.jsx
function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Meu Site</p>
    </footer>
  );
}

export default Footer;
```

---

### 🔹 Home.jsx

```jsx
// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default Home;
```

---

### 🔹 App.jsx

```jsx
// src/App.jsx
import Home from './pages/Home';

function App() {
  return <Home />;
}

export default App;
```

---

## ✅ 8. Estilo CSS

```css
/* src/styles.css */
body {
  margin: 0;
  font-family: sans-serif;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  background-color: #333;
  padding: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

.banner {
  padding: 2rem;
  background-color: #f4f4f4;
  text-align: center;
}

footer {
  background-color: #222;
  color: white;
  text-align: center;
  padding: 1rem;
}
```
