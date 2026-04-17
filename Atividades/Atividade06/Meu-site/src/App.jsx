import './App.css'

function App() {
  return (
    <div className="layout">
      <header className="titulo">
        <img src="/img/logo.png" className="icone" alt="Logo do site" />
        <h3>MEUS FILMES FAVORITOS</h3>

        <nav>
          <ul className="paginas">
            <div className="home"><li><a href="">Home</a></li></div>
            <div className="velozes"><li><a href="">Velozes e Furiosos</a></li></div>
            <div className="maze"><li><a href="">Maze Runner</a></li></div>
            <div className="harry"><li><a href="">Harry Potter</a></li></div>
          </ul>
        </nav>
      </header>

      <main>
        <article>
          <div className="filme1">
            <div className="imagem1">
              <figure>
                <img
                  src="/img/vfhorizontal.jpg"
                  alt="Capa do filme: Velozes & Furiosos: Desafio em Tóquio"
                />
              </figure>
            </div>

            <div className="texto1">
              <h3>Velozes & Furiosos: Desafio em Tóquio:</h3>
              <p>
                Velozes & Furiosos: Desafio em Tóquio é um dos meus filmes favoritos porque ele mostra um estilo de
                corrida diferente dos outros filmes da franquia, focando principalmente no drift.
              </p>
              <h5>Veja mais clicando no nome do filme, na parte superior da tela.</h5>
            </div>
          </div>

          <div className="filme2">
            <div className="imagem2">
              <figure>
                <img
                  src="/img/mrhorizontal.jpg"
                  alt="Capa do filme: Maze Runner: Correr ou Morrer"
                />
              </figure>
            </div>

            <div className="texto2">
              <h3>Maze Runner: Correr ou Morrer:</h3>
              <p>
                Maze Runner: Correr ou Morrer é um dos meus filmes favoritos porque ele traz muito mistério e suspense
                desde o começo. A história começa com o personagem principal acordando em um lugar estranho sem lembrar
                de nada.
              </p>
              <h5>Veja mais clicando no nome do filme, na parte superior da tela.</h5>
            </div>
          </div>

          <div className="filme3">
            <div className="imagem3">
              <figure>
                <img
                  src="/img/hphorizontal.jpg"
                  alt="Capa do filme: Harry Potter e a Pedra Filosofal"
                />
              </figure>
            </div>

            <div className="texto3">
              <h3>Harry Potter e a Pedra Filosofal:</h3>
              <p>
                Harry Potter e a Pedra Filosofal é um dos meus filmes favoritos porque apresenta todo o universo mágico
                de Hogwarts e do mundo dos bruxos. O filme mostra o começo da jornada de Harry Potter, desde quando ele
                descobre que é um bruxo até entrar na escola de magia.
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

        <ul>
          <div className="outros">
            <div className="link1"><li><a href="https://www.google.com">Meus livros</a></li></div>
            <div className="link2"><li><a href="https://www.google.com">Minhas músicas</a></li></div>
            <div className="link3"><li><a href="https://www.google.com">Minhas coisas</a></li></div>
          </div>
        </ul>
      </aside>

      <footer>
        <p>© 2026 Rafael Alves Miyahira. Todos os direitos reservados - Imagens retiradas da Wikipedia apenas para fins educacionais.</p>
      </footer>
    </div>
  )
}

export default App