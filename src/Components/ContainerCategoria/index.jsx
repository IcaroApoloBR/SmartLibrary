import React from 'react'
import Categoria from '../CarouselCategoria'

const Index = () => {
  return (
    <div>
     <Categoria text={'Mais Populares'} query={{ category: 'História' }} />
      <Categoria
        text={'Universitários e Profissionais'}
        query={{ category: 'Informática' }}
      />
      <Categoria
        text={'Novidades que chegaram pra você'}
        query={{ category: 'Biografias' }}
      />
    </div>
  )
}

export default Index
