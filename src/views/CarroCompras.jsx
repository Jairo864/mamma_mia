import React, { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";
import { NavLink } from "react-router-dom";

const CarroCompras = () => {
  const { carrito, anadirCarrito, removerCarrito } = useContext(PizzaContext);
  
  const pizzasAgrupadas = carrito.reduce((acc, pizza) => {
    const pizzaExistente = acc.find((p) => p.id === pizza.id);
    if (pizzaExistente) {
      pizzaExistente.quantity += 1;
      pizzaExistente.totalPrice += pizza.price;
    } else {
      acc.push({ ...pizza, quantity: 1, totalPrice: pizza.price });
    }
    return acc;
  }, []);
  
  const PrecioTotal = pizzasAgrupadas.reduce(
    (total, pizza) => total + pizza.totalPrice,
    0
  );

  return (
    <div className="container mt-3">
      <h3>Detalles del Pedido</h3>
      {pizzasAgrupadas.length === 0 ? (
        <p>Su carro está vacío.</p>
      ) : (
        <div>
          {pizzasAgrupadas.map((pizza) => (
            <div key={pizza.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <img src={pizza.img} className="img" alt={pizza.name} />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <div className="d-flex">
                      <h5 className="card-title">{pizza.name}</h5>
                      <div className="ms-auto d-flex">
                        <p className="card-text me-1">
                          <strong>Total:</strong> ${pizza.totalPrice}
                        </p>
                        <button
                          className="btn btn-danger ms-1"
                          onClick={() => removerCarrito(pizza)}
                        >
                          -

                        </button>

                        <p className="card-text-cant">{pizza.quantity}</p>
                        <button
                          className="btn btn-primary me-1"
                          onClick={() => anadirCarrito(pizza)}
                        >
                          +

                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-3">
            <h4>Total: ${PrecioTotal}</h4>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-between mb-4">
        <NavLink to="/" className="btn btn-success">
          Ir a Pagar
        </NavLink>
        <NavLink to="/" className="btn btn-danger ms-auto">
          Volver al Catálogo
        </NavLink>
      </div>
    </div>
  );
};

export default CarroCompras;
