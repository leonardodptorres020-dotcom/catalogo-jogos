import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface FavoritosContextType {
  favoritos: number[];
  alternarFavorito: (id: number) => void;
}

const FavoritosContext = createContext<FavoritosContextType>({
  favoritos: [],
  alternarFavorito: () => {},
});

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  function alternarFavorito(id: number) {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((f) => f !== id) : [...atual, id]
    );
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, alternarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}