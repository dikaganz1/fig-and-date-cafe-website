'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Clock3, MapPin, Menu, Phone, Star, X } from 'lucide-react'

const menuItems = [
  { name: 'House Lasagna', description: 'Rich, slow-baked layers with a comforting house-style finish.', category: 'From the kitchen' },
  { name: 'Slow-Cooked Pork Belly', description: 'Tender pork belly with carefully selected accompaniments.', category: 'From the kitchen' },
  { name: 'Long Black', description: 'Bold, balanced and made for taking your time.', category: 'Coffee' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85', alt: 'Warmly lit cafe interior', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85', alt: 'Coffee being poured', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85', alt: 'Fresh cafe dish', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85', alt: 'Cafe atmosphere', size: 'large' },
]

export default function Page() {
  const [open, setOpen] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <a href="#top" className="brand">FIG <span>&</span> DATE</a>
          <div className={`nav-links ${open ? 'is-open' : ''}`}>
            {['Menu', 'About', 'Gallery', 'Visit'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
            <a className="nav-cta" href="#menu" onClick={() => setOpen(false)}>View menu <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Fig & Date Cafe · Buderim</p>
          <h1>Good food.<br /><em>Good coffee.</em><br />Good moments.</h1>
          <p className="hero-copy">A warm and welcoming cafe experience in the heart of Buderim.</p>
          <div className="hero-actions"><a className="button button-light" href="#menu">Explore our menu <ArrowUpRight aria-hidden="true" /></a><a className="text-link light-link" href="#visit">Visit us <span>↗</span></a></div>
        </div>
        <a className="scroll-cue" href="#story"><span>Scroll</span><ArrowDown aria-hidden="true" /></a>
      </section>

      <section id="story" className="story section-pad">
        <div className="story-image image-frame"><img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85" alt="Sunlit cafe table with coffee and food" /></div>
        <div className="story-copy"><p className="eyebrow dark-eyebrow">The Fig & Date feeling</p><h2>A place to slow down, gather and enjoy.</h2><p>Fig and Date Cafe brings together great coffee, comforting food and a relaxed cafe atmosphere in Buderim. Whether you&apos;re joining us for breakfast, meeting friends for coffee or simply taking a moment for yourself, our space is designed to make every visit feel special.</p><a className="text-link dark-link" href="#about">Our story <span>↗</span></a></div>
      </section>

      <section className="experience section-pad"><div className="section-heading"><p className="eyebrow dark-eyebrow">Made for moments</p><h2>The simple things, done beautifully.</h2></div><div className="experience-grid"><article><span className="feature-number">01</span><h3>Freshly prepared</h3><p>Thoughtfully prepared dishes made for relaxed cafe moments.</p></article><article><span className="feature-number">02</span><h3>Great coffee</h3><p>Quality coffee served with care, from the first sip to the last.</p></article><article><span className="feature-number">03</span><h3>A warm welcome</h3><p>A relaxed space for breakfast, lunch, coffee and conversation.</p></article></div></section>

      <section id="menu" className="menu-section section-pad"><div className="menu-intro"><div><p className="eyebrow gold-eyebrow">A taste of Fig & Date</p><h2>Cafe favourites.</h2></div><p>Discover a considered selection of comforting dishes and quality coffee, served with a little warmth.</p></div><div className="menu-list">{menuItems.map((item, index) => <article className="menu-item" key={item.name}><span className="menu-index">0{index + 1}</span><div><p className="menu-category">{item.category}</p><h3>{item.name}</h3><p>{item.description}</p></div><ArrowUpRight aria-hidden="true" /></article>)}</div><a className="button button-outline" href="#visit">View full menu <ArrowUpRight aria-hidden="true" /></a></section>

      <section id="gallery" className="gallery-section section-pad"><div className="gallery-heading"><p className="eyebrow dark-eyebrow">A glimpse inside</p><h2>Good food.<br /><em>Good company.</em></h2><p>Come as you are. Stay for the moment.</p></div><div className="gallery-grid">{galleryImages.map((image) => <button className={`gallery-image ${image.size}`} key={image.src} onClick={() => setLightbox(image.src)}><img src={image.src} alt={image.alt} /><span>View</span></button>)}</div></section>

      <section id="about" className="about-banner"><div className="about-overlay" /><div className="about-content"><p className="eyebrow">The heart of Buderim</p><h2>Come for the coffee.<br /><em>Stay for the moment.</em></h2></div></section>

      <section id="visit" className="visit section-pad"><div className="visit-info"><p className="eyebrow gold-eyebrow">Visit Fig & Date</p><h2>Your next cafe moment starts here.</h2><p className="visit-copy">Find us on King Street in Buderim for good food, great coffee and a warm atmosphere.</p><div className="contact-lines"><p><MapPin aria-hidden="true" />102 King St<br />Buderim QLD 4556, Australia</p><p><Phone aria-hidden="true" /><a href="tel:+61754452181">+61 7 5445 2181</a></p></div><div className="hero-actions"><a className="button button-gold" href="https://www.google.com/maps/search/?api=1&query=102+King+St+Buderim+QLD+4556" target="_blank" rel="noreferrer">Get directions <ArrowUpRight aria-hidden="true" /></a><a className="text-link cream-link" href="tel:+61754452181">Call us <span>↗</span></a></div></div><div className="hours-card"><div className="hours-top"><Clock3 aria-hidden="true" /><p>Opening hours</p></div><h3>Opening hours may vary.</h3><p>Please check Google or contact us before visiting.</p><div className="rating"><Star fill="currentColor" aria-hidden="true" /><strong>4.5</strong><span>from 76 Google reviews</span></div></div></section>

      <footer><div className="footer-top"><a href="#top" className="brand">FIG <span>&</span> DATE</a><p>A modern Australian cafe<br />in the heart of Buderim.</p><div className="footer-links"><a href="#menu">Menu</a><a href="#about">About</a><a href="#gallery">Gallery</a><a href="#visit">Visit</a></div><a href="https://instagram.com" className="social" aria-label="Instagram"><span aria-hidden="true" className="social-mark">ig</span></a></div><div className="footer-bottom"><span>© 2026 Fig & Date Cafe</span><span>102 King St · Buderim, QLD</span><span>figanddatecafe.com.au</span></div></footer>

      <div className="mobile-actions"><a href="#menu">Menu</a><a href="https://www.google.com/maps/search/?api=1&query=102+King+St+Buderim+QLD+4556">Directions</a><a href="tel:+61754452181">Call</a></div>
      {lightbox && <button className="lightbox" aria-label="Close image" onClick={() => setLightbox(null)}><img src={lightbox} alt="Expanded gallery view" /><X aria-hidden="true" /></button>}
    </main>
  )
}
