import './InfoPage.css'
import titleArtwork from '../../img/conoce-lludria-title.png'
import infoLogo from '../../img/info-lludria-amigurumis.png'
import thanksArtwork from '../../img/info-gracias-artesanal.png'
import aboutDoodles from '../../img/info-about-doodles.svg'

function InfoPage() {
  return (
    <section className="InfoPage">
      <header className="InfoPage__title"><img className="InfoPage__title-art" src={titleArtwork} alt="Conocé Lludria. Nuestra historia y el amor por lo hecho a mano." /></header>

      <section className="InfoStory" aria-labelledby="info-story-title">
        <div><h2 id="info-story-title">Nuestra historia</h2><p>Fue creado en el año 2023 ya que por un equipo de amigas las cuales sabían tejer y quería tener su emprendimiento. Ahora el emprendimiento pertenece a una sola amiga, la cual siguió sola con el emprendimiento y vende tejidos a dos agujas y a crochet para la gente.</p></div>
        <img src={infoLogo} alt="Logo de Lludria Amigurumis" />
      </section>

      <section className="InfoValues" aria-labelledby="info-values-title">
        <h2 id="info-values-title"><span>Nuestra historia</span></h2>
        <div className="InfoValues__grid">
          <article className="InfoValueCard"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 55 10 34C-2 18 17 7 31 23 45 7 64 18 54 34z"/></svg><h3>Misión</h3><p>Crear tejidos que transmitan alegría, calidad y amor, acompañando a cada persona en sus momentos especiales.</p></article>
          <article className="InfoValueCard"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M4 32s10-18 28-18 28 18 28 18S50 50 32 50 4 32 4 32Z"/><circle cx="32" cy="32" r="9"/></svg><h3>Visión</h3><p>Seguir creciendo y llegar a más personas, llevando nuestros tejidos a cada rincón y construyendo una comunidad unida que valore lo artesanal.</p></article>
          <article className="InfoValueCard"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 57V32M32 32C13 33 11 17 12 9c10 0 21 4 20 23ZM32 32c0-15 9-23 21-24 1 13-4 23-21 24ZM21 57h22M17 21l15 11m10-13L32 32"/></svg><h3>Valores</h3><p>• Calidad<br />• Compromiso<br />• Creatividad<br />• Respeto<br />• Amor por lo que hacemos</p></article>
        </div>
      </section>

      <section className="InfoName" aria-labelledby="info-name-title">
        <div className="InfoName__copy"><h2 id="info-name-title">¿El nombre Lludria de dónde proviene?</h2><p>El nombre Lludria surgió en base a que buscamos varios nombre para el emprendimiento y se nos vino a la cabeza nutria y lo buscamos en diferentes idiomas y en catalán se dice Llúdria es con tilde cuando nosotras creamos la cuenta nos olvidamos la tilde y quedó así de ahí proviene el nombre Lludria.</p></div>
        <aside className="InfoName__quote"><img src={thanksArtwork} alt="Gracias por apoyar el trabajo artesanal y ser parte de Lludria" /></aside>
      </section>

      <section className="InfoAbout" aria-labelledby="info-about-title">
        <div><h2 id="info-about-title">¿Qué es Lludria?</h2><p>Lludria es un emprendimiento dedicado a la creación de tejidos artesanales, donde cada pieza se hace con amor y dedicación. Nos especializamos en amigurumis, prendas, accesorios y detalles personalizados. Creemos en el valor de lo hecho a mano, en la belleza de lo simple y en la magia de los pequeños detalles.</p></div>
        <img src={aboutDoodles} alt="Dibujos de una nutria, un moño, flores y un gato" />
      </section>
    </section>
  )
}

export default InfoPage
