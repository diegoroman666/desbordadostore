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

  const getCategoryImage = (nombre) => {
    const imageName = nombre.toLowerCase();
    return `/images/${imageName}.png`;
  };

  return (
    <div className="page-container">
      <div className="categorias-container">
        <button className="nav-btn" style={{ borderColor: categoriaActual.color, color: categoriaActual.color }} onClick={prevCategory}>◀</button>

        <Link
          to={`/categoria/${categoriaActual.nombre.toLowerCase()}`}
          className="categoria-card"
        >
          <div
            className="categoria-img-container"
            style={{
              borderColor: categoriaActual.color,
              boxShadow: `0 0 15px ${categoriaActual.color}, 0 0 30px ${categoriaActual.color}, 0 0 45px ${categoriaActual.color}`
            }}
          >
            <img
              src={getCategoryImage(categoriaActual.nombre)}
              alt={categoriaActual.nombre}
              className="categoria-img"
            />
          </div>
          <h2
            className="categoria-nombre"
            style={{
              color: categoriaActual.color,
              textShadow: `0 0 5px ${categoriaActual.color}, 0 0 10px ${categoriaActual.color}`
            }}
          >
            {categoriaActual.nombre}
          </h2>
        </Link>

        <button className="nav-btn" style={{ borderColor: categoriaActual.color, color: categoriaActual.color }} onClick={nextCategory}>▶</button>
      </div>
    </div>
  );
}

export default Categorias;
