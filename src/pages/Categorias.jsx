import React, { useState } from "react";
import { categories } from "../data/Products";
import { Link } from "react-router-dom";
import "./Categorias.css";

function Categorias() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevCategory = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const nextCategory = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const getVisibleCategories = () => {
    const total = categories.length;
    const prev = categories[(activeIndex - 1 + total) % total];
    const current = categories[activeIndex];
    const next = categories[(activeIndex + 1) % total];
    return [prev, current, next];
  };

  const visibleCategories = getVisibleCategories();

  return (
    <div className="categoria-container">
      <h2 className="categoria-title">Categorías</h2>

      <div className="coverflow-wrapper">
        <button className="slider-button left" onClick={prevCategory}>
          &#10094;
        </button>

        <div className="coverflow">
          {visibleCategories.map((cat, idx) => {
            let style = {};
            if (idx === 0) {
              style = {
                transform: "translateX(-160px) scale(0.8) rotateY(25deg)",
                zIndex: 5,
                opacity: 1,
              };
            } else if (idx === 1) {
              style = {
                transform: "translateX(0px) scale(1) rotateY(0deg)",
                zIndex: 10,
                opacity: 1,
              };
            } else if (idx === 2) {
              style = {
                transform: "translateX(160px) scale(0.8) rotateY(-25deg)",
                zIndex: 5,
                opacity: 1,
              };
            }

            return (
              <div
                key={cat.id}
                className="card coverflow-card"
                style={{ ...style, "--hue": 60 + (activeIndex + idx) * 50 }}
              >
                <img
                  src={`https://picsum.photos/300/200?random=${cat.id}`}
                  alt={cat.nombre}
                />
                <h3 className="card-title">{cat.nombre}</h3>
                <Link to={`/categoria/${cat.nombre.toLowerCase()}`}>
                  <button className="card-button">Ver productos</button>
                </Link>
              </div>
            );
          })}
        </div>

        <button className="slider-button right" onClick={nextCategory}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Categorias;
