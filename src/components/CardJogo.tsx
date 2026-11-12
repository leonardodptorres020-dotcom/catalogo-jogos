import { Link } from "react-router-dom";
import type { Jogo } from "../types/Jogo";
import BotaoFavorito from "./BotaoFavorito";

interface CardJogoProps {
  jogo: Jogo;
}

function CardJogo({ jogo }: CardJogoProps) {
  return (
    <div
      style={{
        background: "#1f1f1f",
        borderRadius: "8px",
        overflow: "hidden",
        width: "200px",
      }}
    >
      <img
        src={jogo.imagem}
        alt={jogo.titulo}
        style={{ width: "100%", height: "260px", objectFit: "cover" }}
      />
      <div style={{ padding: "12px" }}>
        <h3
          style={{
            margin: "0 0 8px",
            lineHeight: "22px",
            minHeight: "66px",
          }}
        >
          {jogo.titulo}
        </h3>
        <p style={{ margin: "0 0 4px" }}>{jogo.genero}</p>
        <p style={{ margin: "0 0 8px" }}>⭐ {jogo.nota}</p>
        <Link to={`/jogo/${jogo.id}`} style={{ color: "#4da3ff" }}>
          Ver detalhes
        </Link>
        <div>
          <BotaoFavorito id={jogo.id} />
        </div>
      </div>
    </div>
  );
}

export default CardJogo;