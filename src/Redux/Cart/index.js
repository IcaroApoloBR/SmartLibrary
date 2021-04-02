const INITIAL_STATE = {
  books: [],
  status: false
}

const veiculos = {
  moto: 'bmw',
  carro: 'ferrari',
  default: 'ok'
}

veiculos['aviao'] || veiculos['default']

export const changes = (state = INITIAL_STATE, action) => {
  if (action.type === 'CHANGE_SELECT')
    return {
      status: state.status,
      books: [...action.books]
    }
  if (action.type === 'CHANGE_STATUS')
    return {
      status: action.status,
      books: state.books
    }
  return state
}
