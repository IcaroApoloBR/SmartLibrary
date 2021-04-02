import React from 'react'
import Slider from 'react-slick'
import BookItem from '../BookItem'
import { books } from '../../Utils/Data'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const generateSettings = (max) => ({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: max,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

const filterbycategoria = (array, categoria) => array.filter(({category}) => category === categoria)
const filterbytitle = (array, text) => {
  const regex = new RegExp(`^${text}`, 'g');
  return array.filter(({title })=> title.match(regex))
}

const Index = ({ text, query }) => {
  const { category, title } = query
  let localbooks = books
  if(category) localbooks = filterbycategoria(books, category)
  else if (title) localbooks = filterbytitle(books, title)

  const onFavoriteHandler = (e, data) => console.log(data)
  const onCartHandler = (e, data) => console.log(data)

  const settings = generateSettings(localbooks.length)

  return (
    <div className="container mt-4" id="carousel">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>{text}</h2>
        </div>
        <br />
        <br />
      </div>
      <Slider {...settings}>
        {localbooks.map(({ img, title, author, id }) => (
          <BookItem
            key={id}
            id={id}
            img={img}
            title={title}
            author={author}
            onFavoriteHandler={onFavoriteHandler}
            onCartHandler={onCartHandler}
          />
        ))}
      </Slider>
    </div>
  )
}

export default Index
