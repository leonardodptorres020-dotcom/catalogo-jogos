import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "16px 24px",
        background: "#1f1f1f",
      }}
    >
      <Link to="/" style={{ color: "#fff" }}>Home</Link>
      <Link to="/catalogo" style={{ color: "#fff" }}>Catálogo</Link>
      <Link to="/favoritos" style={{ color: "#fff" }}>Favoritos</Link>
      <Link to="/sobre" style={{ color: "#fff" }}>Sobre</Link>
    </nav>
  );
}

export default Navbar;