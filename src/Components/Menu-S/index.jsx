import React from 'react'
import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../static/estilo.css'

const Menu = () => {
  return (
    <section id="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link href="/">
          <a className="navbar-brand">
            Smart Library
            <img src="/static/logo.png" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <i className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">HOME</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services">
                <a className="nav-link">SERVIÇOS</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about-us">
                <a className="nav-link"> SOBRE</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#user">
                <a className="nav-link">EQUIPE</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#social-media">
                <a className="nav-link">CONTATO</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Menu
