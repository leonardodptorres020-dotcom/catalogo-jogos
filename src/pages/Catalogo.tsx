import { useState, useEffect } from "react";
import CardJogo from "../components/CardJogo";
import BarraBusca from "../components/BarraBusca";
import FiltroGenero from "../components/FiltroGenero";
import type { Jogo } from "../types/Jogo";
import dados from "../data/jogos.json";

function Catalogo() {
  const [jogos, setJogos] = useState<Jogo[]>([]);
  const [busca, setBusca] = useState("");
  const [genero, setGenero] = useState("");

  useEffect(() => {
    setJogos(dados);
  }, []);

  const generos = Array.from(new Set(jogos.map((jogo) => jogo.genero)));

  const jogosFiltrados = jogos.filter(
    (jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase()) &&
      (genero === "" || jogo.genero === genero)
  );

  return (
    <main style={{ padding: "24px" }}>
      <h1>Catálogo</h1>
      <BarraBusca valor={busca} aoMudar={setBusca} />
      <FiltroGenero
        generos={generos}
        selecionado={genero}
        aoMudar={setGenero}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {jogosFiltrados.map((jogo) => (
          <CardJogo key={jogo.id} jogo={jogo} />
        ))}
      </div>
    </main>
  );
}

export default Catalogo;