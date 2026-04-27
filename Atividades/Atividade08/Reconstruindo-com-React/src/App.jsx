import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    const novaTarefa = { id: Date.now(), text: texto };
    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }
  function removerTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaLista);
  }

  return (
    <>
      <div>
        <text>Lista do dia!</text>
        <input value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button onClick={adicionarTarefa}>Adicionar</button>
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              {tarefa.text}
              <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
