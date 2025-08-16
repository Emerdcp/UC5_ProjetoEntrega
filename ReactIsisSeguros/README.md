<!-- README detalhado do projeto ÍSIS Seguros -->

# ÍSIS Seguros

## Descrição Geral
O projeto **ÍSIS Seguros** é um site institucional desenvolvido para uma corretora de seguros fictícia, com o objetivo de apresentar seus serviços, produtos e diferenciais ao público. O site é voltado para pessoas físicas e empresas que buscam proteção patrimonial, familiar e profissional, oferecendo informações claras, contato facilitado e recursos de acessibilidade.

## Funcionalidades Principais
- **Página Inicial**: Apresentação da empresa, banner institucional e acesso rápido às principais seções.
- **Quem Somos**: Informações sobre a história, missão e valores da corretora.
- **Produtos**: Exposição dos principais seguros oferecidos (auto, vida, residencial, empresarial, caminhão, previdência, condomínio), com carrossel responsivo.
- **Formulário de Contato**: Envio de mensagens e solicitações de cotação via integração com EmailJS.
- **Localização**: Endereço, mapa interativo e contatos da empresa.
- **Assistência 24h**: Acesso rápido aos canais de atendimento das principais seguradoras parceiras.
- **Barra de Acessibilidade**: Recursos de alto contraste, modo escuro, ajuste de fonte e navegação facilitada.
- **Menu Fixo e Responsivo**: Navegação intuitiva em qualquer dispositivo.
- **Rodapé com Redes Sociais**: Links para Facebook e Instagram.

## Tecnologias Utilizadas
- **React.js** (SPA)
- **Vite** (build e dev server)
- **React Router DOM** (roteamento)
- **Bootstrap 5** (layout e responsividade)
- **CSS Modules** e arquivos CSS customizados
- **EmailJS** (envio de formulários)
- **Vercel** (deploy)

## Como Executar Localmente
1. Certifique-se de ter o **Node.js** instalado.
2. No terminal, acesse a pasta do projeto:
	```cmd
	cd ReactIsisSeguros
	```
3. Instale as dependências:
	```cmd
	npm install
	```
4. Inicie o servidor de desenvolvimento:
	```cmd
	npm run dev
	```
5. Abra o navegador e acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

## Como Publicar Online
- **Vercel**: Integre o repositório com a plataforma [Vercel](https://vercel.com/), clique em "Add New Project", selecione o projeto e publique. O deploy é automático a cada push.
- **Netlify**: Faça login em [Netlify](https://netlify.com/), conecte o repositório e publique.
- **GitHub Pages**: Para projetos React com Vite, utilize plugins como `vite-plugin-gh-pages`.

## Estrutura de Pastas
```
ReactIsisSeguros/
├── public/
│   ├── logoIsisSeguro.png
│   ├── ... (imagens e assets)
│   └── seguradoras/
│       ├── azulSeguros.jpg
│       ├── hdiSeguro.jpg
│       └── ...
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── assets/
│   │   └── isis.png
│   └── pags/
│       ├── Home.jsx
│       ├── layout.jsx
│       ├── Menu/
│       ├── Banner/
│       ├── QuemSomos/
│       ├── Produtos/
│       ├── Formulario/
│       ├── Localizacao/
│       ├── Footer/
│       ├── Assistencia/
│       │   └── Seguradoras/
│       └── Acessibilidade/
├── package.json
├── vite.config.js
├── vercel.json
└── index.html
```

## Capturas de Tela
Inclua imagens do site nesta seção para ilustrar o layout e as funcionalidades. Exemplo:

```
![Página Inicial](public/exemplo-home.png)
![Carrossel de Produtos](public/exemplo-produtos.png)
```

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.