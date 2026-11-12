interface FiltroGeneroProps {
  generos: string[];
  selecionado: string;
  aoMudar: (genero: string) => void;
}

function FiltroGenero({ generos, selecionado, aoMudar }: FiltroGeneroProps) {
  return (
    <select
      value={selecionado}
      onChange={(e) => aoMudar(e.target.value)}
      style={{
        padding: "10px",
        borderRadius: "6px",
        border: "none",
        marginLeft: "12px",
        marginBottom: "20px",
      }}
    >
      <option value="">Todos os gêneros</option>
      {generos.map((genero) => (
        <option key={genero} value={genero}>
          {genero}
        </option>
      ))}
    </select>
  );
}

export default FiltroGenero;