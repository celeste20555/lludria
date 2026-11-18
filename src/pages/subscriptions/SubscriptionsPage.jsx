import './SubscriptionsPage.css'
import planLavenderCard from '../../img/plan-card-lavender.png'
import planCreamCard from '../../img/plan-card-cream.png'

const plans = [
  {
    name: 'Plan Básico',
    description: 'Ideal para empezar',
    price: '$4.950',
    icon: 'yarn',
    features: [['yarn', '2 patrones exclusivos por mes'], ['play', 'Acceso a tutoriales básicos'], ['tag', '5% de descuento en la página']],
  },
  {
    name: 'Plan Pro',
    description: 'Para tejedores apasionadas',
    price: '$8.200',
    icon: 'basket',
    popular: true,
    features: [['yarn', '5 patrones exclusivos por mes'], ['play', 'Acceso a todos los tutoriales'], ['tag', '10% de descuento en la página'], ['gift', 'Acceso a contenido extra']],
  },
  {
    name: 'Plan Premium',
    description: 'Todo lo nuevo y exclusivo',
    price: '$12.550',
    icon: 'yarn',
    features: [['yarn', 'Patrones exclusivos ilimitados'], ['play', 'Tutoriales en alta calidad'], ['tag', '15% de descuento en la página'], ['crown', 'Acceso anticipado a productos'], ['heart', 'Soporte personalizado']],
  },
]

function FeatureIcon({ type, yarnImage }) {
  if (type === 'yarn') return <img src={yarnImage} alt="" aria-hidden="true" />
  if (type === 'play') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13"/><path d="m13 10 10 6-10 6z"/></svg>
  if (type === 'tag') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 16 16 4h11v11L15 27z"/><circle cx="22" cy="10" r="1.5"/></svg>
  if (type === 'crown') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m4 10 7 6 5-10 5 10 7-6-3 14H7zM8 28h16"/></svg>
  if (type === 'gift') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 13h24v16H4zM3 9h26v6H3zM16 9c-8 0-10-7-5-7 4 0 5 7 5 7Zm0 0c0-8 7-9 7-4 0 3-4 4-7 4Zm0 6v14"/></svg>
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 28 5 17C-1 8 10 2 16 11 22 2 33 8 27 17z"/></svg>
}

function PlanCard({ plan, yarnImage }) {
  return (
    <article className={`PlanCard${plan.popular ? ' PlanCard--popular' : ''}`}>
      <img className="PlanCard__shape" src={plan.popular ? planLavenderCard : planCreamCard} alt="" aria-hidden="true" />
      {plan.popular && <span className="PlanCard__badge">Mas popular</span>}
      {plan.icon === 'basket' ? <svg className="PlanCard__art" viewBox="0 0 120 110" aria-hidden="true"><circle cx="47" cy="24" r="17" fill="#d9b8e4"/><circle cx="70" cy="19" r="17" fill="#f1bed1"/><circle cx="83" cy="32" r="16" fill="#f2cfae"/><path d="M18 40h84l-10 54H29z" fill="#f4d2c3" stroke="#bc8876" strokeWidth="3"/><path d="M18 40c0-9 84-9 84 0s-84 9-84 0Z" fill="#f8dfd3" stroke="#bc8876" strokeWidth="3"/><path d="M60 57c-8-12-22-5-14 5l14 13 14-13c8-10-6-17-14-5Z" fill="#dd9cb4" stroke="#bd829b" strokeWidth="2"/></svg> : <img className="PlanCard__art PlanCard__art--yarn" src={yarnImage} alt="" aria-hidden="true" />}
      <h2>{plan.name}</h2>
      <p className="PlanCard__description">{plan.description}</p>
      <p className="PlanCard__price"><strong>{plan.price}</strong><span>/mes</span></p>
      <div className="PlanCard__divider"><span>♥</span></div>
      <ul>{plan.features.map(([icon, text]) => <li key={text}><FeatureIcon type={icon} yarnImage={yarnImage} /><span>{text}</span></li>)}</ul>
      <button type="button" className="PlanCard__subscribe">♥ Suscribirme</button>
    </article>
  )
}

function SubscriptionsPage({ yarnImage }) {
  return (
    <section className="SubscriptionsPage">
      <header className="SubscriptionsPage__heading"><h1>Nuestros planes</h1><p>Encontra tu plan ideal para que empieces a tejer</p></header>
      <div className="PlanGrid">{plans.map((plan) => <PlanCard key={plan.name} plan={plan} yarnImage={yarnImage} />)}</div>
    </section>
  )
}

export default SubscriptionsPage
