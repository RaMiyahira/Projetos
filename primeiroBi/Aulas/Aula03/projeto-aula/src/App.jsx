import Btn from "./componets/Btn";
import Cabecalho from "./componets/Cabecalho";

export default function App(){
  const nome = "Miyahira";
  
  function teste(){
    console.log("Teste Function")
  }

  return(
    <main>
      <Cabecalho titulo="Nome:" />
    <h1 className="">
      Rafael {nome}
    </h1>
    <Btn funcao={teste} 
      textoBtn="Clique Aqui"
    />
    
    </main>
  );
}