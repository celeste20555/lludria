import './Login.css'
import heroImage from '../../img/home.png'
import productImage from '../../img/foto de tarjeta.png'
import cloudImage from '../../img/lludria_nube_transparente.png'
import logoImage from '../../img/Logo kawaii de nutrias y tejidos.png'
import otterImage from '../../img/Nutria kawaii tejiendo con lanas pastel.png'

const productNames = ['Ramo Flor de Rapunzel', 'Ramo de flores silvestres', 'Patrón Primavera']

function Login() {
  return (
    <main className="Store">
      <header className="Header">
        <a className="Header__brand" href="#inicio" aria-label="Ludria, inicio"><img src={logoImage} alt="Ludria" /></a>
        <nav className="Nav" aria-label="Navegación principal">
          <a className="Nav__link Nav__link--active" href="#inicio">Inicio</a>
          <a className="Nav__link" href="#productos">Productos⌄</a>
          <a className="Nav__link" href="#info">Info</a>
          <a className="Nav__link" href="#suscripciones">Suscripciones</a>
          <a className="Nav__link" href="#patrones">Videos y patrones</a>
        </nav>
        <div className="Header__actions" aria-label="Accesos"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="13" cy="13" r="9"/><path d="m20 20 8 8"/></svg><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 28S3 20 3 11a7 7 0 0 1 13-3 7 7 0 0 1 13 3c0 9-13 17-13 17Z"/></svg><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="9" r="6"/><path d="M4 29v-4a12 12 0 0 1 24 0v4Z"/></svg><svg viewBox="0 0 36 32" aria-hidden="true"><path d="M2 3h5l4 18h19l4-13H9"/><circle cx="14" cy="27" r="2"/><circle cx="27" cy="27" r="2"/></svg></div>
      </header>

      <section className="Hero" id="inicio">
        <div className="Hero__photo" style={{ backgroundImage: `url("${heroImage}")` }} />
        <div className="Hero__copy"><h1>Tejidos que abrazan<br />el alma</h1><p>Productos tejidos a mano y patrones<br />para que crees magia con tus propias manos</p></div>
        <div className="Hero__features" style={{ backgroundImage: `url("${cloudImage}")` }}>
          <div><svg className="Feature__icon" viewBox="0 0 64 64" aria-hidden="true"><circle cx="30" cy="33" r="16"/><path d="M17 23 43 43M15 29l24 19M18 43l18-20M27 49l19-20M6 17l7 1 3 7m39-8-7 1-3 7M12 50l-5 6m39-7 7 6M18 40l24-14m-20 6 16 15"/></svg><p><b>Echo a mano</b><small>Cada pieza es única y<br />tejida con dedicación</small></p></div>
          <div><svg className="Feature__icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 7h27l11 11v37H14zM41 8v12h11M24 29h14M24 36h10"/><path d="m46 34 3 7 8 1-6 5 1 8-6-4-7 4 2-8-6-5 8-1z"/></svg><p><b>Patrones con cariño</b><small>Instrucciones claras<br />paso a paso</small></p></div>
          <div><svg className="Feature__icon Feature__icon--heart" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 22 24 14a10 10 0 0 0-14 14l11 11 8-8m3-9 8-8a10 10 0 0 1 14 14L42 40M23 40l6 6a5 5 0 0 0 8-3l2 2a5 5 0 0 0 8-4 5 5 0 0 0 4-8l-5-5M16 37l-5 5 8 8 5-5m12-3-7-7a4 4 0 0 0-6 6l7 7m6-2-6-6m11 4-4-4"/></svg><p><b>Comunidad Ludria</b><small>suscribite y forma parte de<br />la comunidad</small></p></div>
        </div>
      </section>

      <section className="Products" id="productos">
        <div className="SectionTitle"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="30" cy="33" r="16"/><path d="M17 23 43 43M15 29l24 19M18 43l18-20M27 49l19-20M6 17l7 1 3 7m39-8-7 1-3 7M12 50l-5 6m39-7 7 6M18 40l24-14m-20 6 16 15"/></svg><div><h2>Nuestros productos</h2><p>Mas destacados</p></div><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="30" cy="33" r="16"/><path d="M17 23 43 43M15 29l24 19M18 43l18-20M27 49l19-20M6 17l7 1 3 7m39-8-7 1-3 7M12 50l-5 6m39-7 7 6M18 40l24-14m-20 6 16 15"/></svg></div>
        {['Productos destacados', 'Patrones destacados'].map((title, row) => <section className="ProductSection" aria-label={title} id={row === 0 ? 'patrones' : 'patrones-destacados'} key={title}><h3>{title}</h3><span className="ProductSection__arrow ProductSection__arrow--left">‹</span><span className="ProductSection__arrow ProductSection__arrow--right">›</span><div className="ProductSection__items">{productNames.map((name) => <article className="Product" key={`${title}-${name}`}><img className="Product__image" src={productImage} alt="Ramo de flores tejido en crochet" /><div className="Product__details"><small className="Product__tag">Flores</small><b>Ramo flor de rapunzel</b><small>Ramo hecho con lana papel<br />barrilete</small><strong>$17.000</strong><span className="Product__all">ver todo →</span></div><span className="Product__heart">♡</span></article>)}</div></section>)}
        <div className="PromoGrid" id="suscripciones">
          <article className="PromoCard PromoCard--free"><h3>Patrones gratuitos</h3><p>Para empezar hoy</p><a href="#patrones">ver todo　→</a><svg className="PromoCard__yarn" viewBox="0 0 64 64" aria-hidden="true"><circle cx="30" cy="33" r="16"/><path d="M17 23 43 43M15 29l24 19M18 43l18-20M27 49l19-20M6 17l7 1 3 7m39-8-7 1-3 7M12 50l-5 6m39-7 7 6M18 40l24-14m-20 6 16 15"/></svg></article>
          <article className="PromoCard PromoCard--exclusive"><h3>Info exclusiva</h3><div className="MiniProduct"><img className="Product__image" src={productImage} alt="Ramo de flores tejido" /><div><b>Ramo flor de rapunzel</b><small>Ramo hecho con lana papel<br />$17.000</small></div></div></article>
        </div>
        <article className="About" id="info"><div><h3>LLUDRIA</h3><p>Un espacio para dejar volar tu imaginación,<br />descubrir nuevos patrones y animarte a<br />probar algo diferente. Encontrá tejidos<br />únicos, aprendé nuevas técnicas, inspirate y<br />convertí cada hilo en algo hecho por vos.</p><a href="#info">ver más</a></div><img className="About__art" src={otterImage} alt="Nutria kawaii tejiendo con lanas pastel" /></article>
        <article className="Newsletter"><img src={otterImage} alt="Nutria con tejidos" /><div><h3>¿Te gustaría recibir patrones exclusivos,<br />novedades y descuentos?</h3><div className="Newsletter__form"><span>Email</span><button>¡Quiero sumarme! ⭐</button></div></div></article>
      </section>

      <footer className="Footer"><div className="Footer__social" style={{ backgroundImage: `url("${cloudImage}")` }}><span className="Footer__heart">♡</span><span>Gracias por ser parte de esta comunidad</span><span className="Footer__heart">♡</span><span className="Footer__socialItem"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14"/><path d="M10 8c-3 5 5 15 12 14l2-4-5-2-2 2c-2-1-4-3-5-5l2-2-2-4z"/></svg>2901-535032</span><span className="Footer__socialItem"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14"/><path d="M18 9h4V4h-4c-5 0-7 3-7 8v3H8v5h3v8h6v-8h4l1-5h-5v-3c0-2 0-3 1-3z"/></svg>ludria art</span><span className="Footer__socialItem"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="3" width="26" height="26" rx="7"/><circle cx="16" cy="16" r="6"/><circle cx="24" cy="8" r="1" fill="currentColor"/></svg>ludria.art</span></div></footer>
    </main>
  )
}

export default Login
