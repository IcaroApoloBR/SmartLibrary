import React from 'react'
import Slider from 'react-slick'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Index = ({}) => {
  const users = [{
    id: 1,
    img: '/static/user1.jpg',
    author: 'Miguado',
    job: "Twitch e Fortnite",
    comment: 'Nulla dictum fermentum tortor, sed tincidunt ipsum rhoncus ac. Cras placerat mauris vel nulla dapibus imperdiet. Sed id nibh venenatis, aliquet nisi at, auctor nisl.',
  }, {
    id: 2,
    img: '/static/user1.jpg',
    author: 'Miguado',
    job: "Twitch e Fortnite",
    comment: 'Nulla dictum fermentum tortor, sed tincidunt ipsum rhoncus ac. Cras placerat mauris vel nulla dapibus imperdiet. Sed id nibh venenatis, aliquet nisi at, auctor nisl.',
  }]

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: users.length,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="container mt-4" id="carousel">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>AVALIAÇÃO DOS USUÁRIOS</h2>
        </div>
        <br />
        <br />
      </div>
      <Slider {...settings}>
        {users.map(({ img, author, job, comment, id }) => (
            <div key={id} className="item">
              <div className="container ml-auto justify-content-center user">
                  <p>{comment}</p>
                      <img src={img}/>
                  <p className="user-details"><b>{author}</b><br/> {job}
                  </p>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Index
