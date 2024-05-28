import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "../contexts/PizzaContext";

const BarraNav = () => {
  const { carrito } = useContext(PizzaContext);

  const PrecioTotal = carrito.reduce((total, pizza) => total + pizza.price, 0);

  return (
    <nav className="navbar navbar-expand-lg sticky-top" >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-light">
          🍕 Pizzeria Mamma Mia!
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/carrito" className="nav-link active text-light">
                <p className="precio_carro">🛒 Total: ${PrecioTotal.toFixed()}</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BarraNav;
