import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import _ from 'lodash';

import { ConfigContext } from '../../App'

import {
  Navbar,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../static/estilo.css'


// Import modals

const SearchBar = () => {
  const context = useContext(ConfigContext)
  const [Input, setInput] = useState(_.get(context, 'query.title') || "")
  const [dropdownOpen, setDropdownOpen] =useState(false)
  const toggle = () => setDropdownOpen(prevState => !prevState)
  const SearchAction = () => {
    if(Input) window.location.replace(`/?title=${Input}`)
  };

  const categorias = [
    "Ficção científica",
    "Romance",
    "Univertário",
    "HQ's & Mangás",
    "Suspense",
    "Infantil"
    ]

  return (
    <section>
      <Navbar dark expand="lg">
        <Dropdown className="" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret  color="white"> 
            Selecionar Gêneros
          </DropdownToggle>
          <DropdownMenu>
            { categorias.map((category, i) => (<DropdownItem key={i} href={`/?category=${category}`}>{category}</DropdownItem>))}
          </DropdownMenu>
        </Dropdown>

        <input
          type="text"
          className="searchTerm mt-2"
          value={Input}
          onChange={e => setInput(e.target.value)}
          placeholder="O que você está procurando?"
        />
        <button onClick={() => SearchAction()} className="searchButton mt-2">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </Navbar>
    </section>
  )
}

export default SearchBar
