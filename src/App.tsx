import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Detalhes from "./pages/Detalhes";
import Favoritos from "./pages/Favoritos";
import Sobre from "./pages/Sobre";
import { FavoritosProvider } from "./context/FavoritosContext";

function App() {
  return (
    <FavoritosProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/jogo/:id" element={<Detalhes />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </FavoritosProvider>
  );
}

export default App;