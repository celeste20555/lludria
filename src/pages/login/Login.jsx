import './Login.css'
import { useState } from 'react'
import VideosPatrones from '../videos-patrones/VideosPatrones'
import InfoPage from '../info/InfoPage'
import SubscriptionsPage from '../subscriptions/SubscriptionsPage'
import ProductsPage from '../products/ProductsPage'
import ProductDetailPage from '../products/ProductDetailPage'
import CartPage from '../products/CartPage'
import AuthPage from './AuthPage'
import heroImage from '../../img/home.png'
import productImage from '../../img/foto de tarjeta.png'
import cloudImage from '../../img/lludria_nube_transparente.png'
import footerCloudImage from '../../img/footer-cloud.png'
import logoImage from '../../img/Logo kawaii de nutrias y tejidos.png'
import otterImage from '../../img/Nutria kawaii tejiendo con lanas pastel.png'
import yarnCloudIcon from '../../img/bola-de-lana-flaticon.png'
import handsCloudIcon from '../../img/apreton-de-manos-flaticon.png'
import yarnLightIcon from '../../img/bola-de-lana-claro.png'

const productNames = ['Ramo Flor de Rapunzel', 'Ramo de flores silvestres', 'Patrón Primavera']

function Login() {
  const [productsOpen, setProductsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedProductCategory, setSelectedProductCategory] = useState('Todo')
  const [activeNav, setActiveNav] = useState('inicio')
  const [authReturnPage, setAuthReturnPage] = useState('home')
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false)
  const productCategories = [
    ['▦', 'Todo'],
    ['♧', 'Amigurumis'],
    ['❀', 'Ramos y flores'],
    ['♧', 'Gorros y bufandas'],
    ['✦', 'Accesorios'],
    ['⌂', 'Hogar'],
  ]

  return (
    <main className="Store">
      <header className="Header">
        <button className="Header__brand" type="button" aria-label="Ir al inicio" onClick={() => { setCurrentPage('home'); setActiveNav('inicio'); setProductsOpen(false); setMobileMoreOpen(false) }}><img src={logoImage} alt="Ludria" /></button>
        <nav className="Nav" aria-label="Navegación principal">
          <button className={`Nav__link Nav__link--home${activeNav === 'inicio' ? ' Nav__link--active' : ''}`} type="button" onClick={() => { setActiveNav('inicio'); setCurrentPage('home'); setProductsOpen(false) }}>Inicio</button>
          <div className="Nav__products">
            <button className={`Nav__link Nav__link--dropdown${activeNav === 'productos' ? ' Nav__link--active' : ''}`} type="button" aria-expanded={productsOpen} aria-controls="products-menu" onClick={() => { setProductsOpen((open) => !open); setActiveNav('productos') }}>
              Productos <span className="Nav__dropdown" aria-hidden="true" />
            </button>
            {productsOpen && <div className="Nav__menu" id="products-menu">{productCategories.map(([icon, label]) => <button className="Nav__menuItem" type="button" key={label} onClick={() => { setActiveNav('productos'); setSelectedProductCategory(label); setCurrentPage('products'); setProductsOpen(false) }}><span className="Nav__menuIcon" aria-hidden="true">{icon}</span><span>{label}</span><span className="Nav__menuArrow" aria-hidden="true">›</span></button>)}</div>}
          </div>
          <button className={`Nav__link Nav__link--home${activeNav === 'info' ? ' Nav__link--active' : ''}`} type="button" onClick={() => { setActiveNav('info'); setCurrentPage('info'); setProductsOpen(false) }}>Info</button>
          <button className={`Nav__link Nav__link--home${activeNav === 'subscriptions' ? ' Nav__link--active' : ''}`} type="button" onClick={() => { setActiveNav('subscriptions'); setCurrentPage('subscriptions'); setProductsOpen(false) }}>Suscripciones</button>
          <button className={`Nav__link Nav__link--home${activeNav === 'videos' ? ' Nav__link--active' : ''}`} type="button" onClick={() => { setActiveNav('videos'); setCurrentPage('videos'); setProductsOpen(false) }}>Videos y patrones</button>
        </nav>
        <div className="Header__actions" aria-label="Accesos">
          <span className="material-symbols-outlined" aria-hidden="true">search</span>
          <span className="material-symbols-outlined" aria-hidden="true">favorite_border</span>
          <button className="Header__profile" type="button" aria-label="Registrarse o iniciar sesión" onClick={() => { setAuthReturnPage(currentPage === 'product-detail' ? 'products' : currentPage); setCurrentPage('auth'); setProductsOpen(false); setMobileMoreOpen(false) }}><span className="material-symbols-outlined" aria-hidden="true">person_outline</span></button>
          <button className="Header__profile" type="button" aria-label="Ver carrito" onClick={() => { setCurrentPage('cart'); setProductsOpen(false); setMobileMoreOpen(false) }}><span className="material-symbols-outlined" aria-hidden="true">shopping_cart</span></button>
        </div>
      </header>

      {currentPage === 'auth' ? <AuthPage backgroundImage={heroImage} otterImage={otterImage} onBack={() => { setCurrentPage('home'); setActiveNav('inicio') }} onDone={() => { setCurrentPage(authReturnPage); setActiveNav('inicio') }} /> : currentPage === 'home' ? <>
      <section className="Hero" id="inicio">
        <div className="Hero__photo" style={{ backgroundImage: `url("${heroImage}")` }} />
        <div className="Hero__copy"><h1>Tejidos que abrazan<br />el alma</h1><p>Productos tejidos a mano y patrones<br />para que crees magia con tus propias manos</p></div>
        <div className="Hero__features" style={{ backgroundImage: `url("${cloudImage}")` }}>
          <div><img className="Feature__icon Feature__icon--image" src={yarnCloudIcon} alt="" aria-hidden="true" /><p><b>Echo a mano</b><small>Cada pieza es única y<br />tejida con dedicación</small></p></div>
          <div><svg className="Feature__icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 7h27l11 11v37H14zM41 8v12h11M24 29h14M24 36h10"/><path d="m46 34 3 7 8 1-6 5 1 8-6-4-7 4 2-8-6-5 8-1z"/></svg><p><b>Patrones con cariño</b><small>Instrucciones claras<br />paso a paso</small></p></div>
          <div><img className="Feature__icon Feature__icon--heart Feature__icon--image" src={handsCloudIcon} alt="" aria-hidden="true" /><p><b>Comunidad Ludria</b><small>suscribite y forma parte de<br />la comunidad</small></p></div>
        </div>
      </section>

      <section className="Products" id="productos">
        <div className="SectionTitle"><img className="SectionTitle__yarn" src={yarnLightIcon} alt="" aria-hidden="true" /><div><h2>Nuestros productos</h2><p>Mas destacados</p></div><img className="SectionTitle__yarn" src={yarnLightIcon} alt="" aria-hidden="true" /></div>
        {['Productos destacados', 'Patrones destacados'].map((title, row) => <section className="ProductSection" aria-label={title} id={row === 0 ? 'patrones' : 'patrones-destacados'} key={title}><h3>{title}</h3><span className="ProductSection__arrow ProductSection__arrow--left">‹</span><span className="ProductSection__arrow ProductSection__arrow--right">›</span><div className="ProductSection__items">{productNames.map((name) => <article className="Product" key={`${title}-${name}`}><img className="Product__image" src={productImage} alt="Ramo de flores tejido en crochet" /><div className="Product__details"><small className="Product__tag">Flores</small><b>Ramo flor de rapunzel</b><small>Ramo hecho con lana papel<br />barrilete</small><strong>$17.000</strong><span className="Product__all">ver todo <span className="Product__all-arrow">→</span></span></div><span className="Product__heart">♡</span></article>)}</div></section>)}
        <div className="PromoGrid" id="suscripciones">
          <article className="PromoCard PromoCard--free"><h3>Patrones gratuitos</h3><p>Para empezar hoy</p><a href="#patrones">ver todo →</a><img className="PromoCard__yarn" src={yarnLightIcon} alt="" aria-hidden="true" /></article>
          <article className="PromoCard PromoCard--exclusive"><h3>Info exclusiva</h3><span className="PromoCard__arrow PromoCard__arrow--left" aria-hidden="true">‹</span><div className="Product PromoCard__product"><img className="Product__image" src={productImage} alt="Ramo de flores tejido en crochet" /><div className="Product__details"><small className="Product__tag">Flores</small><b>Ramo flor de rapunzel</b><small>Ramo hecho con lana papel<br />barrilete</small><strong>$17.000</strong><span className="Product__all">ver todo <span className="Product__all-arrow">→</span></span></div><span className="Product__heart">♡</span></div><span className="PromoCard__arrow PromoCard__arrow--right" aria-hidden="true">›</span></article>
        </div>
        <article className="About" id="info"><div><h3>LLUDRIA</h3><p>Un espacio para dejar volar tu imaginación,<br />descubrir nuevos patrones y animarte a<br />probar algo diferente. Encontrá tejidos<br />únicos, aprendé nuevas técnicas, inspirate y<br />convertí cada hilo en algo hecho por vos.</p><a href="#info">ver más</a></div><img className="About__art" src={otterImage} alt="Nutria kawaii tejiendo con lanas pastel" /></article>
        <article className="Newsletter"><img src={otterImage} alt="Nutria con tejidos" /><div><h3>¿Te gustaría recibir patrones exclusivos,<br />novedades y descuentos?</h3><div className="Newsletter__form"><span>Email</span><button>¡Quiero sumarme! ★</button></div></div></article>
      </section>
      </> : currentPage === 'videos' ? <VideosPatrones productImage={productImage} heroImage={heroImage} yarnImage={yarnLightIcon} otterImage={otterImage} /> : currentPage === 'info' ? <InfoPage /> : currentPage === 'subscriptions' ? <SubscriptionsPage yarnImage={yarnLightIcon} /> : currentPage === 'cart' ? <CartPage productImage={productImage} /> : currentPage === 'product-detail' ? <ProductDetailPage productImage={productImage} onProductSelect={() => setCurrentPage('product-detail')} /> : <ProductsPage productImage={productImage} selectedCategory={selectedProductCategory} onCategoryChange={setSelectedProductCategory} onProductSelect={() => { setCurrentPage('product-detail'); setActiveNav('productos') }} />}

      <nav className="MobileNav" aria-label="Navegación móvil">
        <button className={`MobileNav__item${currentPage === 'home' ? ' is-active' : ''}`} type="button" onClick={() => { setCurrentPage('home'); setActiveNav('inicio'); setMobileMoreOpen(false) }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v11h-7v-7h-4v7H3z"/></svg><span>Home</span></button>
        <button className={`MobileNav__item${currentPage === 'products' || currentPage === 'product-detail' ? ' is-active' : ''}`} type="button" onClick={() => { setCurrentPage('products'); setSelectedProductCategory('Todo'); setActiveNav('productos'); setMobileMoreOpen(false) }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21V10M12 13C4 13 4 6 5 3c5 0 8 3 7 10Zm0-1c0-6 4-9 8-9 1 5-2 9-8 9Z"/></svg><span>Productos</span></button>
        <button className={`MobileNav__item${currentPage === 'info' ? ' is-active' : ''}`} type="button" onClick={() => { setCurrentPage('info'); setActiveNav('info'); setMobileMoreOpen(false) }}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/></svg><span>Info</span></button>
        <div className="MobileNav__moreWrap">
          {mobileMoreOpen && <div className="MobileNav__moreMenu"><button type="button" onClick={() => { setCurrentPage('subscriptions'); setActiveNav('subscriptions'); setMobileMoreOpen(false) }}>Suscripciones</button><button type="button" onClick={() => { setCurrentPage('videos'); setActiveNav('videos'); setMobileMoreOpen(false) }}>Videos y patrones</button><button type="button" onClick={() => { setCurrentPage('auth'); setMobileMoreOpen(false) }}>Registrarse / Iniciar sesión</button><button type="button" onClick={() => { setCurrentPage('cart'); setMobileMoreOpen(false) }}>Carrito</button></div>}
          <button className={`MobileNav__item${['subscriptions', 'videos', 'auth', 'cart'].includes(currentPage) ? ' is-active' : ''}`} type="button" aria-expanded={mobileMoreOpen} onClick={() => setMobileMoreOpen((open) => !open)}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx=".8"/><rect x="14" y="3" width="7" height="7" rx=".8"/><rect x="3" y="14" width="7" height="7" rx=".8"/><rect x="14" y="14" width="7" height="7" rx=".8"/></svg><span>Más</span></button>
        </div>
      </nav>

      <footer className="Footer"><div className="Footer__social" style={{ backgroundImage: `url("${footerCloudImage}")` }}><span className="Footer__heart">♡</span><span>Gracias por ser parte de esta comunidad</span><span className="Footer__heart">♡</span><span className="Footer__socialItem"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2.8a13.1 13.1 0 0 0-11.2 20l-1.5 6 6.2-1.5A13.2 13.2 0 1 0 16 2.8Z"/><path d="M11.2 9.1c-.5-.9-1-.9-1.4-.9h-1c-.4 0-1 .2-1.5.8s-2 1.9-2 4.6 2 5.3 2.3 5.7 3.8 6.1 9.3 8.3c4.6 1.8 5.5 1.4 6.5 1.3s3.2-1.3 3.7-2.6.5-2.4.3-2.6-.6-.4-1.2-.7l-3.6-1.7c-.5-.2-.9-.3-1.3.3s-1.5 1.8-1.8 2.2-.7.4-1.2.1a14.6 14.6 0 0 1-4.3-2.7 16.5 16.5 0 0 1-3-3.8c-.3-.5 0-.8.2-1.1l.9-1c.3-.4.4-.6.6-1s.1-.7 0-1z" transform="translate(2 -1) scale(.86)"/></svg>2901-535032</span><span className="Footer__socialItem"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13.2"/><path d="M17.8 27V17.5h3.2l.5-3.7h-3.7v-2.4c0-1.1.3-1.9 1.9-1.9h2V6.2c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.4 2-5.4 5.6v2.2h-3.6v3.7h3.6V27z" fill="currentColor" stroke="none"/></svg>ludria art</span><span className="Footer__socialItem"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="3" width="26" height="26" rx="8"/><circle cx="16" cy="16" r="6.2"/><circle cx="24.2" cy="7.9" r="1" fill="currentColor" stroke="none"/></svg>ludria.art</span></div></footer>
    </main>
  )
}

export default Login
