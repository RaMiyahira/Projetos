import { useState } from "react";
import "./App.css"
import Button from "./components/Button";

export default function App() {
const [contador, setContador] = useState(0);
const [carregando, setCarregando] = useState(true);
const [nomeProduto, setNomeProduto] = useState("")
const [produtos, setProdutos] = useState([
  {id: 1, nome: "Teclado Gamer - RedDragon", valor: 200 },
  {id: 2, nome: "Memória Ram Corsair - DDR5", valor: 42000 }
])

function incrementar(){
  setContador(contador + 1);
}

function criarProduto(){
  const produto = {
    id: produtos.length + 1,
    nome: nomeProduto,
    valor: 67.67
  }

  setProdutos([... produtos, produto])
  setNomeProduto("")
}

setInterval(() => setCarregando(false), 5000)

  return (
    <main id="countainer">
      <h1>Contador</h1>
      <p>Valor:{contador}</p>
      <Button texto="Incrementar" funcao={incrementar} />
      <h1>Carrinho</h1>
      {carregando ?
        <h3>carregando...</h3>
        :
        produtos.map(produto => (
        <span key={produto.id}>
          <p>Nome: {produto.nome}</p>
          <p>Valor: R$ {produto.valor}</p>
        </span>
      ))}

      <h3>Adicionar Produto</h3>
      <input type="text" value={nomeProduto}
        onChange={e => setNomeProduto(e.target.value)} />
        <Button texto="Adicionar" funcao={criarProduto} />
      </main>
  )
}