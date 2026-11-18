import { useState } from 'react'
import './CartPage.css'
import cartBrandCard from '../../img/cart-brand-card.png'

const initialItems = [1, 2, 3, 4].map((id) => ({ id, name: 'Ramo flor de rapunzel', category: 'Flores', price: 17000, quantity: 1 }))

function CartPage({ productImage }) {
  const [items, setItems] = useState(initialItems)
  const changeQuantity = (id, delta) => setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item))
  const removeItem = (id) => setItems((current) => current.filter((item) => item.id !== id))
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const productCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const money = (value) => `$${value.toLocaleString('es-AR')}`

  return (
    <section className="CartPage">
      <div className="CartPage__itemsColumn">
        <div className="CartPage__title"><span /><h1>Carrito</h1><span /></div>
        <p className="CartPage__subtitle">Cada punto tejido lleva un poquito de amor, creatividad y magia</p>
        <div className="CartPage__items">
          {items.length ? items.map((item) => <article className="CartItem" key={item.id}>
            <img className="CartItem__image" src={productImage} alt="Ramo flor de rapunzel tejido a mano" />
            <div className="CartItem__details"><b>{item.name}</b><span>Categoría: <small>{item.category}</small></span><strong>{money(item.price)}</strong></div>
            <div className="CartItem__quantity"><button type="button" onClick={() => changeQuantity(item.id, -1)} aria-label="Restar una unidad">−</button><span>{item.quantity}</span><button type="button" onClick={() => changeQuantity(item.id, 1)} aria-label="Sumar una unidad">+</button></div>
            <strong className="CartItem__total">{money(item.price * item.quantity)}</strong>
            <button type="button" className="CartItem__remove" onClick={() => removeItem(item.id)} aria-label={`Quitar ${item.name}`}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-.8 13H6.8L6 7m4 3v7m4-7v7"/></svg></button>
          </article>) : <p className="CartPage__empty">Tu carrito está vacío.</p>}
        </div>
      </div>

      <aside className="CartPage__sidebar">
        <section className="CartPanel CartPanel--data">
          <h2><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h12l3 3v15H5zM17 3v4h4M8 11h9M8 15h9M8 18h6"/></svg>Datos</h2>
          <label>Nombre y Apellido<input placeholder="Ingrese nombre y apellido completo" /></label>
          <label>Dirección<input placeholder="Ingrese su dirección" /></label>
          <div className="CartPanel__row"><label>Código postal<input placeholder="Ingrese código postal" /></label><label>DNI<input placeholder="Ingrese su DNI" /></label></div>
        </section>
        <img className="CartPage__brandCard" src={cartBrandCard} alt="Ludria rodeada de corazones" />
        <section className="CartPanel CartPanel--summary">
          <h2><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h12l3 3v15H5zM17 3v4h4M8 11h9M8 15h9M8 18h6"/></svg>Resumen del pedido</h2>
          <p><span>Subtotal ({productCount} productos)</span><b>{money(subtotal)}</b></p>
          <p><span>Envío</span><b>$4.500</b></p>
          <div className="CartPanel__divider" />
          <button type="button" className="CartPanel__checkout">Finalizar compra</button>
          <button type="button" className="CartPanel__clear" onClick={() => setItems([])}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-.8 13H6.8L6 7m4 3v7m4-7v7"/></svg>Vaciar carrito</button>
        </section>
      </aside>
    </section>
  )
}

export default CartPage
