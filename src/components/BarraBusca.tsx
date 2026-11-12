import { useRef, useEffect } from "react";

interface BarraBuscaProps {
  valor: string;
  aoMudar: (texto: string) => void;
}

function BarraBusca({ valor, aoMudar }: BarraBuscaProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Buscar jogo pelo nome..."
      value={valor}
      onChange={(e) => aoMudar(e.target.value)}
      style={{
        padding: "10px",
        width: "280px",
        borderRadius: "6px",
        border: "none",
        marginBottom: "20px",
      }}
    />
  );
}

export default BarraBusca;