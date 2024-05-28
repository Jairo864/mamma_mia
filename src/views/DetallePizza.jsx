import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { PizzaContext } from "../contexts/PizzaContext";

const DetallePizza = () => {
  const { id } = useParams();
  const { pizzas, loading, anadirCarrito } = useContext(PizzaContext);

  if (loading) {
    return <div>Buscando...</div>;
  }
  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) {
    return <div>Pizza no existe</div>;
  }

  return (
    <div className="container mt-3">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pizza.img} className="img-fluid h-100" alt={pizza.name} style={{ objectFit: 'cover' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{pizza.name}</h4>
              <p className="card-text">{pizza.desc}</p>
              <strong>Ingredientes:</strong>
              <ul className="custom-list">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p className="card-text mt-3">
                <strong>Precio:</strong> ${pizza.price}
              </p>
              <div>
              
              <Link to="/" className="btn btn-muted">Volver</Link>
              <button
                className="btn btn-danger me-1"
                onClick={() => anadirCarrito(pizza)}
              >
                Añadir 🛒
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallePizza;
