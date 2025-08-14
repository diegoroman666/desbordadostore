import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/categorias";
import "./Categorias.css";

function Categorias() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCategory = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const nextCategory = () => {
    setCurrentIndex((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  const categoriaActual = categories[currentIndex];

  // Asignar ruta de imagen según categoría
  const getCategoryImage = (nombre) => {
    const imageName = nombre.toLowerCase();
    return `/images/${imageName}.png`; // en public/images/
  };

  return (
    <div className="page-container">
      <div className="categorias-container">
        <button className="nav-btn" onClick={prevCategory}>◀</button>

        <Link
          to={`/categoria/${categoriaActual.nombre.toLowerCase()}`}
          className="categoria-card"
        >
          <div className="categoria-img-container">
            <img
              src={getCategoryImage(categoriaActual.nombre)}
              alt={categoriaActual.nombre}
              className="categoria-img"
            />
          </div>
          <h2 className="categoria-nombre">{categoriaActual.nombre}</h2>
        </Link>

        <button className="nav-btn" onClick={nextCategory}>▶</button>
      </div>
    </div>
  );
}

export default Categorias;
