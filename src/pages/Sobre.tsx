import CartaoMembro from "../components/CartaoMembro";

function Sobre() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Sobre o projeto</h1>
      <p>
        Catálogo de jogos desenvolvido em React com TypeScript para a disciplina
        de Front-end Frameworks. Permite buscar jogos, filtrar por gênero, ver
        detalhes e salvar favoritos.
      </p>
      <h2>Equipe</h2>
      <CartaoMembro
        nome="Leonardo"
        componentes={[
          "Navbar",
          "Rodape",
          "CardJogo",
          "BarraBusca",
          "FiltroGenero",
          "BotaoFavorito",
          "Destaque",
          "CartaoMembro",
        ]}
      />
    </main>
  );
}

export default Sobre;