import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import PizzaContext from '../context/PizzaContext'
import { Navbar, Nav } from 'react-bootstrap'

export default function Menu () {
  const setActive = ({ isActive }) => (isActive ? 'active' : 'undefined')

  const { total } = useContext(PizzaContext)

  return (
    <Navbar className='d-flex justify-content-between'>
      <Nav.Item className='mx-5'>
        <NavLink className={setActive} to='/'>
          🍕 Pizzeria Mamma Mía!
        </NavLink>
      </Nav.Item>
      <Nav.Item className='mx-5'>
        <NavLink className={setActive} to='/carrito'>
          🛒 $ {(total.toLocaleString('es-CL'))}
        </NavLink>
      </Nav.Item>
    </Navbar>
  )
}
