import "./App.css";
import logo from "./assets/logo.png";
import hphorizontal from "./assets/hphorizontal.jpg";
import mrhorizontal from "./assets/mrhorizontal.jpg";
import vfhorizontal from "./assets/vfhorizontal.jpg";

export default function App() {
  return (
    <>
      <header className="titulo">
        <img src={logo} className="icone" alt="Logo" />
        <h3>MEUS FILMES FAVORITOS</h3>

        <nav>
          <ul className="paginas">
            <li className="home"><a href="">Home</a></li>
            <li className="velozes"><a href="">Velozes e Furiosos</a></li>
            <li className="maze"><a href="">Maze Runner</a></li>
            <li className="harry"><a href="">Harry Potter</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <article>
          <div className="filme1">
            <div className="imagem1">
              <figure>
                <img src={vfhorizontal} alt="Capa do filme Velozes e Furiosos" />
              </figure>
            </div>

            <div className="texto1">
              <h3>Velozes e Furiosos: Desafio em Tóquio:</h3>
              <p>
                Velozes e Furiosos: Desafio em Tóquio é um dos meus filmes favoritos porque ele mostra um estilo de
                corrida diferente dos outros filmes da franquia, focando principalmente no drift.
              </p>
              <h5>Veja mais clicando no nome do filme, na parte superior da tela.</h5>
            </div>
          </div>

          <div className="filme2">
            <div className="imagem2">
              <figure>
                <img src={mrhorizontal} alt="Capa do filme Maze Runner" />
              </figure>
            </div>

            <div className="texto2">
              <h3>Maze Runner: Correr ou Morrer:</h3>
              <p>
                Maze Runner: Correr ou Morrer é um dos meus filmes favoritos porque ele traz muito mistério e suspense
                desde o começo.
              </p>
              <h5>Veja mais clicando no nome do filme, na parte superior da tela.</h5>
            </div>
          </div>

          <div className="filme3">
            <div className="imagem3">
              <figure>
                <img src={hphorizontal} alt="Capa do filme Harry Potter" />
              </figure>
            </div>

            <div className="texto3">
              <h3>Harry Potter e a Pedra Filosofal:</h3>
              <p>
                Harry Potter e a Pedra Filosofal é um dos meus filmes favoritos porque apresenta todo o universo mágico
                de Hogwarts e do mundo dos bruxos.
              </p>
              <h5>Veja mais clicando no nome do filme, na parte superior da tela.</h5>
            </div>
          </div>
        </article>
      </main>

      <aside>
        <div className="titulosoutros">
          <h3>Posts Relacionados</h3>
        </div>

        <div className="outros">
          <ul>
            <li className="link1"><a href="https://www.google.com">Meus livros</a></li>
            <li className="link2"><a href="https://www.google.com">Minhas músicas</a></li>
            <li className="link3"><a href="https://www.google.com">Minhas coisas</a></li>
          </ul>
        </div>
      </aside>

      <footer>
        <p>© 2026 Rafael Alves Miyahira. Todos os direitos reservados - Imagens retiradas da Wikipedia apenas para fins educacionais.</p>
      </footer>
    </>
  );
}