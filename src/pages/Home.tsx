import Destaque from "../components/Destaque";

function Home() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Catálogo de Jogos</h1>
      <p>
        Bem-vindo! Aqui você pode explorar jogos, buscar por nome, filtrar por
        gênero e salvar seus favoritos.
      </p>
      <Destaque />
    </main>
  );
}

export default Home;