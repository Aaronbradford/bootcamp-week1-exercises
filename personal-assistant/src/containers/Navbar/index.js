import React from 'react'
import { Container, NavLink } from './styles'

const Navbar = () => (
    <Container>
      <NavLink to = '/'>Home</NavLink>
      <NavLink to = '/Todo'>Todo</NavLink>
      <NavLink to = '/urgent'>Urgent</NavLink>
    </Container>
)

export default Navbar