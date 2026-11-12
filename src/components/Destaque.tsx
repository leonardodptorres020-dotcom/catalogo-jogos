import { useMemo } from "react";
import CardJogo from "./CardJogo";
import type { Jogo } from "../types/Jogo";
import dados from "../data/jogos.json";

function Destaque() {
  const jogos: Jogo[] = dados;

  const melhores = useMemo(
    () => [...jogos].sort((a, b) => b.nota - a.nota).slice(0, 3),
    [jogos]
  );

  return (
    <section style={{ marginTop: "24px" }}>
      <h2>Destaques</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {melhores.map((jogo) => (
          <CardJogo key={jogo.id} jogo={jogo} />
        ))}
      </div>
    </section>
  );
}

export default Destaque;