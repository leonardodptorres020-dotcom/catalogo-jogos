import { useParams, Link } from "react-router-dom";
import type { Jogo } from "../types/Jogo";
import dados from "../data/jogos.json";

function Detalhes() {
  const { id } = useParams();
  const jogos: Jogo[] = dados;
  const jogo = jogos.find((j) => j.id === Number(id));

  if (!jogo) {
    return (
      <main style={{ padding: "24px" }}>
        <h1>Jogo não encontrado</h1>
        <Link to="/catalogo" style={{ color: "#4da3ff" }}>
          Voltar ao catálogo
        </Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "24px", display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <img
        src={jogo.imagem}
        alt={jogo.titulo}
        style={{ width: "260px", borderRadius: "8px" }}
      />
      <div style={{ maxWidth: "500px" }}>
        <h1>{jogo.titulo}</h1>
        <p>Gênero: {jogo.genero}</p>
        <p>Plataforma: {jogo.plataforma}</p>
        <p>Ano: {jogo.ano}</p>
        <p>⭐ Nota: {jogo.nota}</p>
        <p>{jogo.sinopse}</p>
        <Link to="/catalogo" style={{ color: "#4da3ff" }}>
          ← Voltar ao catálogo
        </Link>
      </div>
    </main>
  );
}

export default Detalhes;