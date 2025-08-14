// src/components/Slider.jsx
import React, { useMemo } from "react";
import { products } from "../data/Products"; // tu data completa

export default function Slider() {
  // Seleccionamos 12 productos destacados (los primeros 2 de cada categoría)
  const featured = useMemo(() => {
    const categories = ["Vestidos", "Blusas", "Chaquetas", "Faldas", "Pantalones"];
    let result = [];
    categories.forEach((cat) => {
      const filtered = products.filter((p) => p.category === cat).slice(0, 2);
      result = result.concat(filtered);
    });
    return result;
  }, []);

  const adText = useMemo(() => {
    if (featured.length > 0) {
      return featured
        .map((it) => `${it.name} - $${Number(it.price).toFixed(0)}`)
        .join("  |  ");
    }
    return "Nuevas colecciones · Envío rápido · Descuentos de temporada";
  }, [featured]);

  // Repetimos solo 2 veces para un scroll continuo suave
  const fullText = `${adText}  |  ${adText}`;

  return (
    <div className="slider-bar">
      <div className="slider-track neon-gold">{fullText}</div>
    </div>
  );
}
