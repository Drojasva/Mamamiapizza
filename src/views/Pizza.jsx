import { useState, useContext, useEffect } from 'react'
import { Button, Container, Figure, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import PizzaContext from '../context/PizzaContext'

const Pizza = () => {
  const [pizza, setPizza] = useState([])
  const { addPizza } = useContext(PizzaContext)
  const { id } = useParams()

  const getPizzas = async () => {
    const res = await fetch('../pizzas.json')
    const pizzas = await res.json()
    const result = pizzas.filter((e) => e.id === id)
    setPizza(result)
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <Container className='p-5'>

      {pizza.length > 0
        ? (
          <Figure className='d-flex flex-row gap-3'>
            <Figure.Image
              width={400}
              alt={pizza.name}
              src={pizza[0].img}
            />
            <Figure.Caption>
              <h4 className='card-titlepizza text-capitalize'>
                <b>{pizza[0].name}</b>
              </h4>
              <hr />
              <p className='text-align-center'>{pizza[0].desc}</p>

              <p className='card-text'>
                <b>Ingredientes:</b>
              </p>
              <ListGroup variant='flush'>
                {pizza[0].ingredients.map((ingredient, i) => (
                  <ListGroup.Item
                    className='border-0 text-capitalize'
                    key={i}
                  >
                    🍕
                    {ingredient}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className='d-flex justify-content-between'>
                <h2 className='text-pizza'><b>Precio $ {pizza[0].price.toLocaleString('es-CL')}</b></h2>
                <Button
                  variant='danger'
                  onClick={() => addPizza(pizza[0])}
                >
                  Añadir 🛒
                </Button>
              </div>
            </Figure.Caption>
          </Figure>
          )
        : <h4 className='card-titlepizza text-capitalize'><b>PIZZA NO ENCONTRADA</b></h4>}
    </Container>
  )
}
export default Pizza
