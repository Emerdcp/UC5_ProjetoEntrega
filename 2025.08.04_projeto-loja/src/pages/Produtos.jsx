//Produtos.jsx

export default function Produtos({ produtos, adicionarAoCarrinho }) {
  return (
    <main>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Produtos</h2>
      <div className="produtos-container">
        {produtos.map(produto => (
          <div key={produto.id} className="card-produto">
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco}</p>
            <button onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}



// Arquvio original, veja as mudanças do CSS

// export default function Produtos({ produtos, adicionarAoCarrinho }) {
//   return (
//     <main>
//       <h2>Produtos</h2>
//       <ul>
//         {produtos.map(produto => (
//           <li key={produto.id} style={{ marginBottom: '1rem' }}>
//             {produto.nome} - R$ {produto.preco}
//             <br />
//             <button onClick={() => adicionarAoCarrinho(produto)}>
//               Adicionar ao Carrinho
//             </button>
//           </li>
//         ))}
//       </ul>
//     </main>
//   )
// }
