import React, { useState } from "react";
import { categories } from "../data/Products";
import { Link } from "react-router-dom";
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

  const cat = categories[currentIndex];

  return (
    <div className="categoria-container">
      <h2 className="categoria-title">Categorías</h2>

      <div className="categoria-slider-wrapper">
        <button className="slider-button left" onClick={prevCategory}>
          &#10094;
        </button>

        <div className="categoria-card">
          <img
            src={`https://picsum.photos/300/200?random=${cat.id}`}
            alt={cat.nombre}
            className="card-img-top"
          />
          <h3 className="card-title">{cat.nombre}</h3>
          <Link to={`/categoria/${cat.nombre.toLowerCase()}`}>
            <button
              className="card-button"
              style={{ "--hue": 60 + currentIndex * 50 }}
            >
              Ver productos
            </button>
          </Link>
        </div>

        <button className="slider-button right" onClick={nextCategory}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Categorias;
