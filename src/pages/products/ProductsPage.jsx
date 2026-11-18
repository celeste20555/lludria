import './ProductsPage.css'
import { useState } from 'react'
import productCardWave from '../../img/product-card-wave.png'
import categoriesBanner from '../../img/products-categories-banner.png'

const categories = [
  ['♧', 'Amigurumis'],
  ['❀', 'Ramos y flores'],
  ['♧', 'Gorros y bufandas'],
  ['✦', 'Accesorios'],
  ['⌂', 'Hogar'],
  ['♡', 'Otros'],
]

function CategoryIcon({ index }) {
  const name = ['cat', 'flower', 'hat', 'bow', 'house', 'heart'][index]
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const shapes = {
    cat: <><path d="M5 12 4 5l7 4h2l7-4-1 7a8 8 0 1 1-14 0Z"/><path d="M9 14h.01M15 14h.01M10 18q2 2 4 0M12 16v1"/></>,
    flower: <><circle cx="12" cy="12" r="2.4"/><path d="M12 9c-3-3-1-6 0-6s3 3 0 6Zm3 3c3-3 6-1 6 0s-3 3-6 0Zm-3 3c3 3 1 6 0 6s-3-3-0-6Zm-3-3c-3 3-6 1-6 0s3-3 6 0ZM12 14v7m0-3c-2-2-4-2-5-1"/></>,
    hat: <><path d="M4 16a8 8 0 0 1 16 0v2H4v-2Z"/><path d="M3 18h18v3H3zM8 9l2 2m4-2 2 2"/></>,
    bow: <><path d="M12 12 4 6c-2-1-3 1-2 3l4 5-4 5c-1 2 0 4 2 3l8-6 8 6c2 1 3-1 2-3l-4-5 4-5c1-2 0-4-2-3l-8 6Z"/><circle cx="12" cy="13" r="2.2"/></>,
    house: <><path d="m3 11 9-8 9 8v10h-7v-6h-4v6H3z"/><path d="M1 11 12 2l11 9"/></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>{shapes[name]}</svg>
}

function BrowseProductCard({ image, onOpen }) {
  return (
    <article className="BrowseProductCard">
      <div className="BrowseProductCard__image"><img src={image} alt="Ramo de flores tejido en crochet" /><span aria-hidden="true">&#9825;</span></div>
      <div className="BrowseProductCard__details"><img className="BrowseProductCard__wave" src={productCardWave} alt="" aria-hidden="true" /><b>Ramo flor de rapunzel</b><small>Flores</small><div><strong>$17.000</strong><button type="button" className="BrowseProductCard__view" onClick={onOpen}>ver todo <span className="BrowseProductCard__arrow">&#8594;</span></button></div></div>
    </article>
  )
}

function ProductsPage({ productImage, selectedCategory, onCategoryChange, onProductSelect }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [activeFilter, setActiveFilter] = useState('Filtros')
  const [sortBy, setSortBy] = useState('Mas recientes')
  const visibleCategories = selectedCategory === 'Todo' ? categories : categories.filter(([, name]) => name === selectedCategory)

  const toggleDropdown = (name) => setOpenDropdown((current) => current === name ? null : name)

  return (
    <section className="ProductsPage">
      <header className="CategoriesBanner"><img className="CategoriesBanner__art" src={categoriesBanner} alt="Categor&#237;as. Aprendé, inspirate y descubrí todo lo que podés crear con tus manos. Cada producto está hecho con mucho amor." /></header>

      <div className="ProductsFilters">
        <div className="ProductsFilters__dropdown" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null) }}>
          <button className="ProductsFilters__trigger ProductsFilters__trigger--categories" type="button" aria-expanded={openDropdown === 'categories'} onClick={() => toggleDropdown('categories')}><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="3" width="11" height="11" rx="1"/><rect x="18" y="3" width="11" height="11" rx="1"/><rect x="3" y="18" width="11" height="11" rx="1"/><rect x="18" y="18" width="11" height="11" rx="1"/></svg><span>{selectedCategory === 'Todo' ? 'Categor\u00EDas' : selectedCategory}</span><i aria-hidden="true" /></button>
          {openDropdown === 'categories' && <div className="ProductsFilters__menu">{['Todo', ...categories.map(([, name]) => name)].map((name) => <button type="button" key={name} className="ProductsFilters__menuItem" onClick={() => { onCategoryChange(name); setOpenDropdown(null) }}>{name}</button>)}</div>}
        </div>
        <div className="ProductsFilters__dropdown" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null) }}>
          <button className="ProductsFilters__trigger ProductsFilters__trigger--filter" type="button" aria-expanded={openDropdown === 'filters'} onClick={() => toggleDropdown('filters')}><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 4h26L19 17v10l-6 3V17z"/></svg><span>{activeFilter}</span><i aria-hidden="true" /></button>
          {openDropdown === 'filters' && <div className="ProductsFilters__menu">{['Filtros', 'Más vendidos', 'Precio menor', 'Precio mayor'].map((name) => <button type="button" key={name} className="ProductsFilters__menuItem" onClick={() => { setActiveFilter(name); setOpenDropdown(null) }}>{name}</button>)}</div>}
        </div>
        <div className="ProductsFilters__dropdown ProductsFilters__sort" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null) }}>
          <button className="ProductsFilters__trigger ProductsFilters__trigger--sort" type="button" aria-expanded={openDropdown === 'sort'} onClick={() => toggleDropdown('sort')}><span>{sortBy}</span><i aria-hidden="true" /></button>
          {openDropdown === 'sort' && <div className="ProductsFilters__menu ProductsFilters__menu--right">{['Mas recientes', 'Mas antiguos', 'Menor precio', 'Mayor precio'].map((name) => <button type="button" key={name} className="ProductsFilters__menuItem" onClick={() => { setSortBy(name); setOpenDropdown(null) }}>{name}</button>)}</div>}
        </div>
      </div>

      <div className="BrowseCategoryList">{visibleCategories.map(([icon, name]) => <section className="BrowseCategory" aria-labelledby={`browse-${name}`} key={name}>
        <div className="BrowseCategory__heading"><span><CategoryIcon index={categories.findIndex(([, categoryName]) => categoryName === name)} /></span><h2 id={`browse-${name}`}>{name}</h2><div /><button type="button">ver todo&#160;<span aria-hidden="true">&#8594;</span></button></div>
        <div className="BrowseCategory__products">{Array.from({ length: 5 }, (_, index) => <BrowseProductCard image={productImage} onOpen={onProductSelect} key={`${name}-${index}`} />)}</div>
      </section>)}</div>
    </section>
  )
}

export default ProductsPage
