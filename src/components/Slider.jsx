import React, { useMemo } from "react";

/**
 * Barra tipo marquee: texto aparece al cargar (fade-in) y se mueve de derecha a izquierda.
 * - Fuente: Times New Roman, peso alto.
 * - Color neon dorado con glow.
 * - Si aún no hay items, muestra un placeholder.
 */
export default function Slider({ items = [] }) {
  const adText = useMemo(() => {
    if (items.length > 0) {
      return items
        .map((it) => `${it.name} - $${Number(it.price).toFixed(2)}`)
        .join("  |  ");
    }
    return "Nuevas colecciones · Envío rápido · Descuentos de temporada";
  }, [items]);

  // Repetimos para que el scroll sea contínuo sin cortes
  const fullText = `${adText}  |  ${adText}  |  ${adText}  |  ${adText}`;

  return (
    <div className="slider-bar">
      <div className="slider-track neon-gold">{fullText}</div>
    </div>
  );
}
