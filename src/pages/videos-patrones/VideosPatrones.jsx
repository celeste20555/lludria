import './VideosPatrones.css'

const videos = [
  'Punto básico paso a paso',
  'Cómo empezar a tejer un proyecto',
  'Tipos de puntas que existen',
  'Tips para que tus tejidos no se vean flojos',
  'Punto básico paso a paso',
]
const videoTags = ['puntos', 'proyectos', 'materiales', 'tips', 'puntos']

const lessons = [
  ['yarn', 'Materiales', 'Qué necesitas para empezar'],
  ['stitches', 'Puntos', 'Aprende los puntos más usados'],
  ['measure', 'Medidas', 'Guía de talles y proporciones'],
  ['care', 'Cuidados', 'Para que tus tejidos duren más'],
]

function PatternCard({ image, index }) {
  return (
    <article className="VideoSaleCard">
      <div className="VideoSaleCard__image"><img src={image} alt="Ramo de flores tejido en crochet" /><span className="VideoSaleCard__heart" aria-hidden="true">♡</span></div>
      <div className="VideoSaleCard__details"><h4>{index === 0 ? 'Ramo flor de rapunzel' : index === 1 ? 'Ramo de flores silvestres' : 'Patrón Primavera'}</h4><small>Flores</small><button type="button">Comprar</button></div>
    </article>
  )
}

function VideosPatrones({ productImage, heroImage, yarnImage, otterImage }) {
  const videoImages = [productImage, heroImage, otterImage, productImage, heroImage]
  return (
    <section className="Products VideosPage">
      <section className="VideosHero">
        <span className="VideosHero__play" aria-hidden="true">▷</span>
        <div><h1>Videos</h1><p>Aprendé, inspirate y descubrí<br />todo lo que podés crear con tus manos.</p></div>
        <img src={otterImage} alt="Nutria tejiendo" />
      </section>

      <section className="VideosFeatured" aria-labelledby="videos-featured-title">
        <div className="VideosSectionTitle"><span className="VideosSectionTitle__play" aria-hidden="true">▷</span><h2 id="videos-featured-title">Videos destacados</h2><span className="VideosSectionTitle__line" /><a href="#videos-featured-title">ver todo →</a></div>
        <div className="VideoGrid">{videos.map((title, index) => <article className="VideoCard" key={`${title}-${index}`}><div className="VideoCard__image"><img src={videoImages[index]} alt="Vista previa de un video de tejido" /><span aria-hidden="true">▷</span></div><div className="VideoCard__details"><h3>{title}</h3><small>{videoTags[index]}</small></div></article>)}</div>
      </section>

      <section className="LessonPanel" aria-labelledby="lesson-title">
        <h2 id="lesson-title"><svg viewBox="0 0 64 52" aria-hidden="true"><path d="M3 6c12-4 21-1 29 5v36C23 41 14 39 3 43zM61 6c-12-4-21-1-29 5v36c9-6 18-8 29-4z"/><path d="M32 11v36"/></svg> Información para tejer mejor</h2>
        <div className="LessonPanel__grid">{lessons.map(([icon, title, copy]) => <article className="LessonCard" key={title}>
          {icon === 'yarn' ? <img className="LessonCard__icon" src={yarnImage} alt="" aria-hidden="true" /> : <svg className="LessonCard__icon" viewBox="0 0 80 80" aria-hidden="true">{icon === 'stitches' ? <g><path d="M17 16h46M17 26h46M17 36h46M17 46h46M17 56h46M17 66h46"/><path d="M22 12v10m12-10v10m12-10v10m12-10v10M28 22v10m12-10v10m12-10v10m-30 0v10m12-10v10m12-10v10m12-10v10M28 42v10m12-10v10m12-10v10m-30 0v10m12-10v10m12-10v10m12-10v10M28 62v10m12-10v10m12-10v10"/></g> : icon === 'measure' ? <g><path d="M17 50 47 20c6-6 16-6 21 0s6 15 0 21L38 71c-5 5-13 5-18 0s-8-15-3-21Z"/><path d="m37 30 8 8m-14-2 6 6m-14 1 8 8m20-30 8 8m-13-1 4 4m-1 15 7 7"/><path d="M47 20c6-6 16-6 21 0s6 15 0 21"/></g> : <g><path d="M40 31c-4-10-19-8-18 3 1 8 11 14 18 20 7-6 17-12 18-20 1-11-14-13-18-3Z"/><path d="M18 47c-5 1-8 5-7 10l5 12c1 3 4 5 7 5h15c3 0 5-2 5-5V57c0-3-2-5-5-5H27l-5-4M62 47c5 1 8 5 7 10l-5 12c-1 3-4 5-7 5H42M20 57l5 8m8-9v9m27-8-5 8m-8-9v9"/></g>}</svg>}
          <h3>{title}</h3><p>{copy}</p>
        </article>)}</div>
      </section>

      <header className="SectionTitle VideosPatternTitle"><img className="SectionTitle__yarn" src={yarnImage} alt="" aria-hidden="true" /><div><h2>Patrones</h2><p>Patrones gratuitos y a la venta</p></div><img className="SectionTitle__yarn" src={yarnImage} alt="" aria-hidden="true" /></header>

      <section className="ProductSection VideoPatternsSection VideoPatternsSection--free" aria-labelledby="free-patterns-title">
        <h3 id="free-patterns-title">Patrones gratis</h3><span className="ProductSection__arrow ProductSection__arrow--left" aria-hidden="true">‹</span><span className="ProductSection__arrow ProductSection__arrow--right" aria-hidden="true">›</span>
        <div className="ProductSection__items">{[0, 1, 2].map((index) => <article className="Product" key={index}><img className="Product__image" src={productImage} alt="Ramo de flores tejido en crochet" /><div className="Product__details"><small className="Product__tag">Flores</small><b>Ramo flor de rapunzel</b><small>Ramo hecho con lana papel<br />barrilete</small><strong>$17.000</strong><span className="Product__all">ver todo <span className="Product__all-arrow">→</span></span></div><span className="Product__heart">♡</span></article>)}</div>
      </section>

      <section className="ProductSection VideoPatternsSection VideoPatternsSection--paid" aria-labelledby="paid-patterns-title">
        <h3 id="paid-patterns-title">Patrones a la venta</h3><a className="VideoPatternsSection__all" href="#paid-patterns-title">ver todo →</a><span className="ProductSection__arrow ProductSection__arrow--left" aria-hidden="true">‹</span><span className="ProductSection__arrow ProductSection__arrow--right" aria-hidden="true">›</span>
        <div className="VideoPatternsGrid VideoPatternsGrid--paid">{[0, 1, 2, 0, 1].map((index, item) => <PatternCard image={productImage} index={index} key={item} />)}</div>
      </section>
    </section>
  )
}

export default VideosPatrones
