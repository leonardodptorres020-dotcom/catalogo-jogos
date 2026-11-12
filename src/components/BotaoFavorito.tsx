import { useFavoritos } from "../context/FavoritosContext";

interface BotaoFavoritoProps {
  id: number;
}

function BotaoFavorito({ id }: BotaoFavoritoProps) {
  const { favoritos, alternarFavorito } = useFavoritos();
  const ehFavorito = favoritos.includes(id);

  return (
    <button
      onClick={() => alternarFavorito(id)}
      style={{
        padding: "8px 12px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        background: ehFavorito ? "#e63946" : "#333",
        color: "#fff",
        marginTop: "8px",
      }}
    >
      {ehFavorito ? "♥ Favoritado" : "♡ Favoritar"}
    </button>
  );
}

export default BotaoFavorito;