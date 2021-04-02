import React from 'react'
import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../static/estilo.css'

const Social = () => {
  return (
    <section id="social-media">
      <div className="container text-center">
        <p>ENCONTRE-NOS NAS REDES SOCIAIS</p>
        <div className="social-icons">
          <Link href="https://pt-br.facebook.com/">
            <a>
              <img src="/static/facebook.png" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/">
            <a>
              <img src="/static/instagram.png" />
            </a>
          </Link>
          <Link href="https://www.whatsapp.com/">
            <a>
              <img src="/static/whatsapp.png" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/">
            <a>
              <img src="/static/youtube.png" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Social
