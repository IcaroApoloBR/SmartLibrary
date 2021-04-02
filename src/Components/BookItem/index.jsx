
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingBasket } from '@fortawesome/fontawesome-free-solid'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../static/estilo.css'


const Img = styled.img`width: 150px`;

const Index = React.memo(
  ({ id, img, title, author, favorite, cart, onFavoriteHandler, onCartHandler }) => {
    return (
      <div key={id} className="item">
        <Img src={img} alt="img" className="card-img-top card-120" />
        <div className="card-body">
          <h3>{title}</h3>
          <p>{author}</p>
          <div className="row justify-content-center">
            <button
              className="btn btn-primaryy"
              title="Favoritos!"
              data-sessionid={id}
              onClick={e => onFavoriteHandler(e, { id, img, title, author })}
            >
              <FontAwesomeIcon icon={ favorite ? faHeart: faHeart} />
            </button>
            <button className="btn btn-primaryy" title="Carrinho!" data-sessionid={id}
              onClick={e => onCartHandler(e, { id, img, title, author })}
            >
              <FontAwesomeIcon icon={ cart ? faShoppingBasket: faShoppingBasket} />
            </button>
          </div>
        </div>
      </div>
    )
  }
)

export default Index
