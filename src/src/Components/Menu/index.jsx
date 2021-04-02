import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faHeart,
  faShoppingBasket,
  faBars
} from '@fortawesome/fontawesome-free-solid'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import ModalCarrinho from "../ModalCarrinho"

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../static/estilo.css'

// Import modals

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const toggleMenu = () => setIsOpenMenu(!isOpenMenu)

  const [isOpenModalFav, setModalFav] = useState(false);
  const toggleFav = () => setModalFav(!isOpenModalFav);

  const [isOpenModalCart, setModalCart] = useState(false);
  const toggleCart = () => setModalCart(!isOpenModalCart);

  const userLogged = false
  return (
    <section id="nav-bar">
      <Navbar color="dark" expand="lg">
        <NavbarBrand href="/">
          Smart Library
          <img src="/static/logo.png" />
        </NavbarBrand>

        <NavbarToggler aria-label="Alterna navegação" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </NavbarToggler>
        <Collapse isOpen={isOpenMenu} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">LIVROS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sobre">SOBRE</NavLink>
            </NavItem>
            <NavItem>
              { userLogged ? <NavLink href="/logout">
                <FontAwesomeIcon icon={faUserCircle} /> Logout
              </NavLink>: <NavLink href="/login">
                <FontAwesomeIcon icon={faUserCircle} /> Login
              </NavLink> }
            </NavItem>
            <NavItem>
              <a className="nav-link" onClick={toggleFav}>
                <FontAwesomeIcon icon={faHeart} />
                <span className="badge badge-light">6</span>
              </a>
            </NavItem>
            <NavItem>
              <a className="nav-link" onClick={toggleCart}>
                <FontAwesomeIcon icon={faShoppingBasket} />
                <span className="badge badge-light">7</span>
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <ModalCarrinho isOpenModalCart={isOpenModalFav} toggleCart={toggleCart}/>
    </section>
  )
}

export default Menu
