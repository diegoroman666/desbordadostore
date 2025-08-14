import React, { useRef, useEffect } from "react";
import { categories } from "../data/Products";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Categorias.css"; // Importamos los estilos

function Categorias() {
  const sliderRef = useRef();

  useEffect(() => {
    const cards = sliderRef.current.children;

    // Animación horizontal continua con GSAP
    gsap.fromTo(
      cards,
      { x: "100%" },
      {
        x: "-100%",
        duration: 20,
        repeat: -1,
        ease: "linear",
        stagger: 0.5,
      }
    );
  }, []);

  return (
    <div className="categoria-container">
      <h2 className="categoria-title">Categorías</h2>
      <div className="categoria-slider" ref={sliderRef}>
        {categories.map((cat, idx) => (
          <div className="card" key={cat.id} style={{ "--hue": 60 + idx * 50 }}>
            <img
              src={`https://picsum.photos/300/200?random=${cat.id}`}
              alt={cat.nombre}
              className="card-img-top"
            />
            <h3 className="card-title">{cat.nombre}</h3>
            <Link to={`/categoria/${cat.nombre.toLowerCase()}`}>
              <button className="card-button">Ver productos</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
