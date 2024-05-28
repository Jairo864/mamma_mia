import React, { useContext } from 'react'
import { PizzaContext } from '../contexts/PizzaContext'
import Titulo from '../components/Titulo'

const Home = () => {
  const {pizzas, VerMas, anadirCarrito} = useContext(PizzaContext)
  return (
    <>
    <div className='entrada p-5'>
      <Titulo/>
      </div>
    <div className='container mt-3 mb-4'>
      <div className="row">
        {
          pizzas && pizzas.map(pizza => (
            <div key={pizza.id} className='col-md-3'>
              <div className='card'>
                <img src={pizza.img} alt={pizza.name} className='card-img-top'/>
                <div className='card-body'>
                  <h4 className='card-title border-bottom pb-2'>{pizza.name}</h4>
                  <strong>Ingredientes:</strong>
                  <ul className='custom-list'>
                    {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
                  </ul>
                  <div className='text-center border-top'>
                  <p className='card-text'>$ {pizza.price}</p>
                  <button className='btn btn-info me-1 text-white' onClick={()=> VerMas(pizza.id)}>Ver más 👀</button>
                  <button className='btn btn-danger ms-1' onClick={()=>anadirCarrito(pizza)}>Añadir 🛒</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    
    </>
  )
}

export default Home