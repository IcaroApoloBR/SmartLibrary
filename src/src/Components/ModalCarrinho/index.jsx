import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import _ from 'lodash'

import { ConfigContext } from '../../App'

import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button
} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../static/estilo.css'

// Import modals

const ModalCarrinho = ({ isOpenModalCart, toggleCart }) => {
  const context = useContext(ConfigContext)

  const FinalizarPedido = () => {
    toggleCart()
    toast.success(`Pedido finalizado com sucesso!`)
  }

  let books = []
  for (let index = 0; index < 5; index++)
    books.push({
      title: 'a mão de deus',
      author: 'Flávio Dvila',
      src: '/static/livro.jpg',
      status: true
    })

  return (
    <section>
      <ToastContainer />
      <Modal isOpen={isOpenModalCart} toggle={toggleCart}>
        <ModalHeader toggle={toggleCart}>Carrinho</ModalHeader>
        <ModalBody>
          <Table hover>
            <thead>
              <tr>
                <th scope="col">Foto</th>
                <th scope="col">Título</th>
                <th scope="col">Autor</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {books.map(({ title, src, author, status }, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={src}
                      alt="img"
                      className="card-img-top card-120"
                    />
                  </td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <span className={status ? 'disponivel' : 'indisponivel'}>
                      {status ? 'Disponivel' : 'Indisponivel'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleCart}>
            Continuar alugando
          </Button>
          <Button color="success" onClick={FinalizarPedido}>
            Finalizar Pedido
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  )
}

export default ModalCarrinho
