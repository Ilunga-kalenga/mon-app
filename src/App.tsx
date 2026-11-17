import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> |{""}
        <Link to="/about">À propos</Link> |{""}
        <Link to="/user">Utilisateur 5</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<h1>Page introuvable</h1>} />
      </Routes>
    </div>
  );
}
