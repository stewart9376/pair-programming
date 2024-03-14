import "./styles/main.scss";
import Cards from "./components/Cards/Cards";
import GamePage from "./pages/GamePage/GamePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header className="brainsnap">
          <h1 className="brainsnap__header">BrainSnap</h1>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/movie/:genre" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
