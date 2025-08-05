//Carrinho.jsx

export default function Carrinho({ carrinho, removerDoCarrinho }) {
  const total = carrinho.reduce((soma, item) => soma + item.preco, 0)

  return (
    <main className="carrinho-container">
      <h2 style={{ textAlign: 'center' }}>Carrinho de Compras</h2>

      {carrinho.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {carrinho.map((item, index) => (
              <li key={index} className="carrinho-item">
                {item.nome} - R$ {item.preco}
                <br />
                <button onClick={() => removerDoCarrinho(index)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <p className="total">Total: R$ {total}</p>
        </>
      )}
    </main>
  )
}


// export default function Carrinho({ carrinho, removerDoCarrinho }) {
//   const total = carrinho.reduce((soma, item) => soma + item.preco, 0)

//   return (
//     <main>
//       <h2>Carrinho de Compras</h2>

//       {carrinho.length === 0 ? (
//         <p>Seu carrinho está vazio.</p>
//       ) : (
//         <>
//           <ul>
//             {carrinho.map((item, index) => (
//               <li key={index} style={{ marginBottom: '1rem' }}>
//                 {item.nome} - R$ {item.preco}
//                 <br />
//                 <button onClick={() => removerDoCarrinho(index)}>
//                   Remover
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <p><strong>Total:</strong> R$ {total}</p>
//         </>
//       )}
//     </main>
//   )
// }
