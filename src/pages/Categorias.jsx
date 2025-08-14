import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/categorias";
import "./Categorias.css";

function getCategoryIcon(nombre) {
  const strokeClass = "draw-path neon-icon";

  switch (nombre.toLowerCase()) {
    case "vestidos":
      return (
        <svg className={`${strokeClass} neon-green`} viewBox="0 0 64 64">
          <path
            d="M32 4 L44 20 L36 24 L48 60 L16 60 L28 24 L20 20 Z"
            fill="none"
          />
        </svg>
      );
    case "blusas":
      return (
        <svg className={`${strokeClass} neon-pink`} viewBox="0 0 64 64">
          <path
            d="M16 12 Q32 0 48 12 L54 28 L44 60 L20 60 L10 28 Z"
            fill="none"
          />
        </svg>
      );
    case "chaquetas":
      return (
        <svg className={`${strokeClass} neon-cyan`} viewBox="0 0 64 64">
          <path
            d="M16 4 L48 4 L56 28 L48 60 L16 60 L8 28 Z"
            fill="none"
          />
        </svg>
      );
    case "faldas":
      return (
        <svg className={`${strokeClass} neon-yellow`} viewBox="0 0 64 64">
          <path
            d="M8 20 L56 20 L48 60 L16 60 Z"
            fill="none"
          />
        </svg>
      );
    case "pantalones":
      return (
        <svg className={`${strokeClass} neon-blue`} viewBox="0 0 64 64">
          <path
            d="M20 2 L44 2 L40 60 L24 60 Z M24 30 L40 30"
            fill="none"
          />
        </svg>
      );
    default:
      return null;
  }
}

function Categorias() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCategory = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const nextCategory = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const categoriaActual = categories[currentIndex];

  return (
    <div className="page-container">
      <div className="categorias-container">
        <button className="nav-btn" onClick={prevCategory}>◀</button>

        <Link
          to={`/categoria/${categoriaActual.nombre.toLowerCase()}`}
          className="categoria-card"
        >
          {getCategoryIcon(categoriaActual.nombre)}
          <h2>{categoriaActual.nombre}</h2>
        </Link>

        <button className="nav-btn" onClick={nextCategory}>▶</button>
      </div>
    </div>
  );
}

export default Categorias;
