import React from 'react'
import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../static/estilo.css'

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="promo-title">SMART LIBRARY</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
              quam tristique, finibus diam at, aliquam dolor. Quisque sed tellus
              ac nulla sollicitudin mattis. Morbi nec luctus orci. Aenean
              consectetur blandit ante, in bibendum neque tempus eget. Duis
              molestie vitae lacus scelerisque sollicitudin. Nunc consequat
              velit ac quam consequat viverra.
            </p>
            <Link href="#">
              <a>
                <img src="/static/play.png" className="play-btn" />
                Como funciona a biblioteca inteligente?
              </a>
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <img src="/static/home3.png" className="img-fluid" />
          </div>
        </div>
      </div>

      <img src="/static/wave.png" className="bottom-img" />
    </section>
  )
}

export default Banner
