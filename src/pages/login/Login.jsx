import './Login.css'
import heroImage from '../../img/home.png'
import productImage from '../../img/foto de tarjeta.png'
import cloudImage from '../../img/lludria_nube_transparente.png'
import footerCloudImage from '../../img/footer-cloud.png'
import logoImage from '../../img/Logo kawaii de nutrias y tejidos.png'
import otterImage from '../../img/Nutria kawaii tejiendo con lanas pastel.png'
// Atribución Flaticon: iconos por Magnific, recoloreados en violeta: https://www.flaticon.com/es/icono-gratis/bola-de-lana_737928 y https://www.flaticon.es/icono-gratis/apreton-de-manos_3090507.
import yarnCloudIcon from '../../img/bola-de-lana-flaticon.png'
import handsCloudIcon from '../../img/apreton-de-manos-flaticon.png'
import yarnLightIcon from '../../img/bola-de-lana-claro.png'

const productNames = ['Ramo Flor de Rapunzel', 'Ramo de flores silvestres', 'Patrón Primavera']

function Login() {
  return (
    <main className="Store">
      <header className="Header">
        <div className="Header__brand" aria-label="Ludria"><img src={logoImage} alt="Ludria" /></div>
        <nav className="Nav" aria-label="Navegación principal">
          <span className="Nav__link Nav__link--active">Inicio</span>
          <span className="Nav__link Nav__link--dropdown">Productos <span className="Nav__dropdown" aria-hidden="true" /></span>
          <span className="Nav__link">Info</span>
          <span className="Nav__link">Suscripciones</span>
          <span className="Nav__link">Videos y patrones</span>
        </nav>
        <div className="Header__actions" aria-label="Accesos">
          <span className="material-symbols-outlined" aria-hidden="true">search</span>
          <span className="material-symbols-outlined" aria-hidden="true">favorite_border</span>
          <span className="material-symbols-outlined" aria-hidden="true">person_outline</span>
          <span className="material-symbols-outlined" aria-hidden="true">shopping_cart</span>
        </div>
      </header>

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
          <article className="PromoCard PromoCard--free"><h3>Patrones gratuitos</h3><p>Para empezar hoy</p><a href="#patrones">ver todo　→</a><img className="PromoCard__yarn" src={yarnLightIcon} alt="" aria-hidden="true" /></article>
          <article className="PromoCard PromoCard--exclusive"><h3>Info exclusiva</h3><div className="MiniProduct"><img className="Product__image" src={productImage} alt="Ramo de flores tejido" /><div><b>Ramo flor de rapunzel</b><small>Ramo hecho con lana papel<br />$17.000</small></div></div></article>
        </div>
        <article className="About" id="info"><div><h3>LLUDRIA</h3><p>Un espacio para dejar volar tu imaginación,<br />descubrir nuevos patrones y animarte a<br />probar algo diferente. Encontrá tejidos<br />únicos, aprendé nuevas técnicas, inspirate y<br />convertí cada hilo en algo hecho por vos.</p><a href="#info">ver más</a></div><img className="About__art" src={otterImage} alt="Nutria kawaii tejiendo con lanas pastel" /></article>
        <article className="Newsletter"><img src={otterImage} alt="Nutria con tejidos" /><div><h3>¿Te gustaría recibir patrones exclusivos,<br />novedades y descuentos?</h3><div className="Newsletter__form"><span>Email</span><button>¡Quiero sumarme! ⭐</button></div></div></article>
      </section>

      <footer className="Footer"><div className="Footer__social" style={{ backgroundImage: `url("${footerCloudImage}")` }}><span className="Footer__heart">♡</span><span>Gracias por ser parte de esta comunidad</span><span className="Footer__heart">♡</span><span className="Footer__socialItem"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14"/><path d="M10 8c-3 5 5 15 12 14l2-4-5-2-2 2c-2-1-4-3-5-5l2-2-2-4z"/></svg>2901-535032</span><span className="Footer__socialItem"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14"/><path d="M18 9h4V4h-4c-5 0-7 3-7 8v3H8v5h3v8h6v-8h4l1-5h-5v-3c0-2 0-3 1-3z"/></svg>ludria art</span><span className="Footer__socialItem"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="3" width="26" height="26" rx="7"/><circle cx="16" cy="16" r="6"/><circle cx="24" cy="8" r="1" fill="currentColor"/></svg>ludria.art</span></div></footer>
    </main>
  )
}

export default Login
