# Catálogo de Jogos

Aplicação web desenvolvida em **React com TypeScript** para a disciplina de Front-end Frameworks (AV2). O usuário pode explorar um catálogo de jogos, buscar por nome, filtrar por gênero, ver detalhes e salvar favoritos.

## Tecnologias

- React
- TypeScript
- Vite
- React Router

## Como instalar e usar

1. Clone o repositório:

```
git clone https://github.com/leonardodptorres020-dotcom/catalogo-jogos.git
```

2. Entre na pasta:

```
cd catalogo-jogos
```

3. Instale as dependências:

```
npm install
```

4. Rode o projeto:

```
npm run dev
```

5. Abra no navegador o endereço mostrado no terminal (normalmente http://localhost:5173/).

## Páginas

- **Home:** apresentação e jogos em destaque
- **Catálogo:** lista de jogos com busca e filtro por gênero
- **Detalhes:** informações completas de um jogo
- **Favoritos:** jogos marcados pelo usuário
- **Sobre:** descrição do projeto e equipe

## Hooks utilizados

- `useState`: estados de busca, gênero e lista de jogos
- `useEffect`: carregamento dos dados e foco automático
- `useRef`: foco automático no campo de busca
- `useContext`: lista de favoritos compartilhada entre páginas
- `useMemo`: ordenação dos jogos em destaque
- Custom hook `useFavoritos`

## Integração com dados

Os dados dos jogos vêm de um arquivo JSON local (`src/data/jogos.json`).

## Equipe e componentes

**Leonardo Davi Pereira Torres - 01789028**

- Navbar
- Rodape
- CardJogo
- BarraBusca
- FiltroGenero
- BotaoFavorito
- Destaque
- CartaoMembro

## Telas

### Home
![Home](prints/home.png)

### Catálogo
![Catálogo](prints/catalogo.png)

### Detalhes
![Detalhes](prints/detalhes.png)

### Favoritos
![Favoritos](prints/favoritos.png)

### Sobre
![Sobre](prints/sobre.png)