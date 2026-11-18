import { useState } from 'react'
import './ProductDetailPage.css'

const reviews = [
  ['Danae Alcocer', 'El ramo de la flor es hermoso y de muy buena calidad y los colores son hermosos'],
  ['Danae Alcocer', 'El ramo de la flor es hermoso y de muy buena calidad y los colores son hermosos'],
  ['Danae Alcocer', 'El ramo de la flor es hermoso y de muy buena calidad y los colores son hermosos'],
]

function ProductDetailPage({ productImage, onProductSelect }) {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(productImage)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState(reviews)

  const addComment = (event) => {
    event.preventDefault()
    if (!comment.trim()) return
    setComments([[ 'Vos', comment.trim() ], ...comments])
    setComment('')
  }

  return (
    <section className="ProductDetail">
      <div className="ProductDetail__main">
        <div className="ProductDetail__gallery">
          <img className="ProductDetail__image" src={activeImage} alt="Ramo flor de rapunzel tejido a mano" />
          <div className="ProductDetail__thumbs">
            <button type="button" aria-label="Ver imagen anterior">‹</button>
            {[0, 1, 2].map((item) => <button className="ProductDetail__thumb" type="button" key={item} onClick={() => setActiveImage(productImage)} aria-label={`Ver foto ${item + 1}`}><img src={productImage} alt="" /></button>)}
            <button type="button" aria-label="Ver imagen siguiente">›</button>
          </div>
        </div>

        <div className="ProductDetail__summary">
          <small className="ProductDetail__tag">Flores</small>
          <h1>Ramo flor de rapunzel</h1>
          <p>Ramo de flores artesanales tejidas a mano con lana y decoradas con papel barrilete. Un regalo único, colorido y duradero, ideal para sorprender a alguien especial y regalar un detalle hecho con amor.</p>
          <strong className="ProductDetail__price">$17.000</strong>
          <div className="ProductDetail__quantity"><span>Cantidad</span><button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>+</button><b>{quantity}</b><button type="button" onClick={() => setQuantity(quantity + 1)}>−</button></div>
          <button type="button" className="ProductDetail__cart">Agregar al carrito</button>
        </div>

        <aside className="ProductDetail__options">
          <h2>Elección de colores</h2>
          {['Color de la flor', 'Color del papel', 'Color del moño'].map((label) => <label key={label}>{label}<input type="text" placeholder="Ingresa tus colores seleccionados para la flor" /></label>)}
        </aside>
      </div>

      <section className="ProductDetail__reviews" aria-label="Comentarios de clientes">
        <form className="ProductDetail__commentForm" onSubmit={addComment}>
          <div className="ProductDetail__chatIcon" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M20 5C11.7 5 5 10.7 5 17.7c0 4 2.2 7.5 5.7 9.8L9 34l8-3.3c1 .2 2 .3 3 .3 8.3 0 15-5.7 15-13.3S28.3 5 20 5Z"/><circle cx="14" cy="18" r="1.6"/><circle cx="20" cy="18" r="1.6"/><circle cx="26" cy="18" r="1.6"/></svg></div>
          <h2>Comentarios</h2><small>(130 reseñas)</small>
          <input value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Escribe un comentario" aria-label="Escribe un comentario" />
          <button type="submit">Enviar</button>
        </form>
        <button className="ProductDetail__reviewArrow" type="button" aria-label="Comentarios anteriores">‹</button>
        <div className="ProductDetail__reviewList">{comments.slice(0, 3).map(([author, text], index) => <article key={`${author}-${index}`}><span className="ProductDetail__avatar" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="9" r="3"/><path d="M5.8 19a6.5 6.5 0 0 1 12.4 0"/></svg></span><div><header><b>{author}</b><small>Creado hace 3 semanas</small></header><p>{text}</p></div></article>)}</div>
        <button className="ProductDetail__reviewArrow" type="button" aria-label="Más comentarios">›</button>
      </section>

      <section className="ProductDetail__recommendations">
        <h2>Productos que te pueden gustar</h2>
        <button className="ProductDetail__recommendArrow ProductDetail__recommendArrow--left" type="button" aria-label="Productos anteriores">‹</button>
        <div className="ProductDetail__recommendList">{[0, 1, 2, 3].map((item) => <button type="button" className="ProductDetail__recommendCard" key={item} onClick={onProductSelect}><span className="ProductDetail__recommendImage"><img src={productImage} alt="" /><i aria-hidden="true">&#9825;</i></span><b>Ramo flor de rapunzel</b><small>Amigurumi</small><span className="ProductDetail__recommendMeta"><strong>$17.000</strong><span className="ProductDetail__recommendView">ver todo <i aria-hidden="true">&#8594;</i></span></span></button>)}</div>
        <button className="ProductDetail__recommendArrow ProductDetail__recommendArrow--right" type="button" aria-label="Más productos">›</button>
      </section>
    </section>
  )
}

export default ProductDetailPage
