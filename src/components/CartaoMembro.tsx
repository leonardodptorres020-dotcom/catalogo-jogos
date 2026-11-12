interface CartaoMembroProps {
  nome: string;
  componentes: string[];
}

function CartaoMembro({ nome, componentes }: CartaoMembroProps) {
  return (
    <div
      style={{
        background: "#1f1f1f",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "360px",
        marginBottom: "16px",
      }}
    >
      <h3 style={{ margin: "0 0 8px" }}>{nome}</h3>
      <p style={{ margin: "0 0 4px" }}>Componentes desenvolvidos:</p>
      <ul style={{ margin: 0 }}>
        {componentes.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartaoMembro;