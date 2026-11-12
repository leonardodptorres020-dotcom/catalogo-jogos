import { Link } from "react-router-dom";
import CardJogo from "../components/CardJogo";
import { useFavoritos } from "../context/FavoritosContext";
import type { Jogo } from "../types/Jogo";
import dados from "../data/jogos.json";

function Favoritos() {
  const { favoritos } = useFavoritos();
  const jogos: Jogo[] = dados;
  const jogosFavoritos = jogos.filter((jogo) => favoritos.includes(jogo.id));

  return (
    <main style={{ padding: "24px" }}>
      <h1>Favoritos</h1>
      {jogosFavoritos.length === 0 ? (
        <p>
          Você ainda não favoritou nenhum jogo.{" "}
          <Link to="/catalogo" style={{ color: "#4da3ff" }}>
            Ir ao catálogo
          </Link>
        </p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {jogosFavoritos.map((jogo) => (
            <CardJogo key={jogo.id} jogo={jogo} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favoritos;