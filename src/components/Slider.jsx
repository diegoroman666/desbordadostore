import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  const items = [
    { producto: "Vestido Rojo", precio: "$39.990" },
    { producto: "Blusa Elegante", precio: "$24.990" },
    { producto: "Chaqueta Casual", precio: "$54.990" },
    { producto: "Falda Primavera", precio: "$29.990" },
    { producto: "Pantalón Formal", precio: "$34.990" },
  ];

  return (
    <Carousel variant="dark" interval={2500} className="mb-4">
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="text-center p-4 bg-light">
            <h4>{item.producto}</h4>
            <h5 className="text-primary fw-bold">{item.precio}</h5>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
