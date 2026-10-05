import { assets, imagePath, products, reasons, site, statistics, team } from "@/data/site";
import { Booking } from "@/components/booking";
import { DecorativeMeetButton } from "@/components/decorative-meet-button";
import { LocalImage, VisualButton, VisualCard, VisualLink } from "@/components/visual-elements";

const logoAlt = "Minitube Human ART logo";

function Header() {
  return (
    <header className="container-fluid header-block">
      <LocalImage file={assets.headerDecoration} alt="" width={966} height={212} className="header-block__decoration" priority />
      <div className="container header-block__container">
        <div className="row header-block__row">
          <div className="col-12 header-block__col">
            <div className="header-block__logos">
              <VisualLink className="header-block__logo-link"><LocalImage file={assets.logo} alt={logoAlt} width={160} height={160} className="header-block__logo" priority /></VisualLink>
              <VisualLink className="header-block__logo-link"><LocalImage file={assets.exhibitor} alt="ESHRE 2026 Exhibitor" width={160} height={160} className="header-block__logo" priority /></VisualLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="container-fluid hero-block">
      <div className="hero-block__media-wrapper">
        <div className="hero-block__poster" style={{ backgroundImage: `url("${imagePath(assets.heroPoster)}")` }} />
        <video className="hero-block__video" src={`/videos/${assets.heroVideo}`} autoPlay muted loop playsInline poster={imagePath(assets.heroPoster)} aria-hidden="true" />
        <div className="hero-block__overlay" style={{ opacity: 0.2 }} />
      </div>
      <div className="container hero-block__container">
        {/*<div className="hero-block__decorative-wrapper">*/}
        {/*  <LocalImage file={assets.heroCircle} alt="Microscopic illustration of sperm cells in a turquoise circle" width={400} height={400} className="hero-block__decorative-image" priority />*/}
        {/*</div>*/}
        <div className="row hero-block__row">
          <div className="col-12 hero-block__col">
            <div className="hero-block__content">
              <h1 id="hero-heading" className="hero-block__headline">{site.headline}</h1>
              <div className="hero-block__subheadline-wrapper">
                <p className="hero-block__subheadline">{site.subheadline}</p>
                <div className="hero-block__action">
                  <DecorativeMeetButton label={site.meetLabel} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Booth() {
  return (
    <section id="booth_info" aria-labelledby="booth_info-heading" className="container-fluid booth-info-block">
      <div className="container booth-info-block__container">
        <div className="row booth-info-block__header-row">
          <div className="col-12 booth-info-block__header-col">
            <h2 id="booth_info-heading" className="booth-info-block__headline">{site.boothHeadline}</h2>
            <div className="booth-info-block__number">{site.boothNumber}</div>
          </div>
        </div>
        <div className="row booth-info-block__content-row align-items-start">
          <div className="col-12 col-lg-auto booth-info-block__content-col">
            <div className="booth-info-block__content">
              <div className="booth-info-block__description">
                <div className="rich-text"><div className="payload-richtext">
                  <p>{site.boothDescription}</p><p><br /></p>
                  <p>The ESHRE Annual Meeting will take place at:</p>
                  <p><strong>Excel London</strong></p>
                  <p><strong>Royal Victoria Dock, 1 Western Gateway</strong></p>
                  <p><strong>London E16 1XL</strong></p>
                  <p><strong>United Kingdom</strong></p>
                </div></div>
              </div>
              <div className="booth-info-block__cta"><VisualButton> Venue and exhibition floor plans</VisualButton></div>
            </div>
          </div>
          <div className="col-12 col-lg booth-info-block__image-col">
            <div className="booth-info-block__image-container">
              <LocalImage file={assets.floorPlan} alt="ESHRE floor plan with an orange Minitube location pin marking booth D37" className="fill-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reasons() {
  return (
    <section id="reasons" aria-labelledby="reasons-heading" className="container-fluid icon-cards-block">
      <div className="container icon-cards-block__container">
        <div className="row icon-cards-block__header-row"><div className="col-12"><h2 id="reasons-heading" className="icon-cards-block__headline">{site.reasonsHeadline}</h2></div></div>
        <div className="row icon-cards-block__content-row">
          {reasons.map((reason) => (
            <div className="col-12 col-md-4 icon-cards-block__col" key={reason.headline}>
              <VisualCard
                className="icon-cards-block__card"
                media={<div className="icon-cards-block__icon-wrapper"><div className="icon-cards-block__icon" aria-hidden="true" style={{ maskImage: `url("${imagePath(reason.icon)}")` }} /></div>}
                headline={<h3 className="icon-cards-block__card-headline">{reason.headline}</h3>}
              >
                <p className="icon-cards-block__card-description">{reason.description}</p>
              </VisualCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlight() {
  return (
    <section aria-labelledby="video-highlight-heading" className="highlight-block">
      <div className="highlight-block__container">
        <div className="highlight-block__top-image-wrapper"><LocalImage file={assets.highlightDecoration} alt="Turquoise microscopic sperm cell illustration in a semicircle" width={1400} height={700} className="highlight-block__top-image" /></div>
        <div className="highlight-block__layout">
          <div className="highlight-block__logo-container"><LocalImage file={assets.logo} alt={logoAlt} width={200} height={50} className="highlight-block__logo" rendition="highlightLogo" /></div>
          <div className="highlight-block__content">
            <div className="highlight-block__content-wrapper">
              <header className="highlight-block__header">
                <h2 id="video-highlight-heading" className="highlight-block__headline">{site.highlightHeadline}</h2>
                <div className="highlight-block__description"><div className="rich-text"><div className="payload-richtext"><p>{site.highlightDescription}</p></div></div></div>
              </header>
              <div className="highlight-block__cards">
                {statistics.map((statistic) => (
                  <div className="highlight-block__card-item" key={statistic.headline}>
                    <div className="highlight-block__card"><h3 className="highlight-block__card-headline">{statistic.headline}</h3><p className="highlight-block__card-description">{statistic.description}</p></div>
                  </div>
                ))}
              </div>
              <div className="highlight-block__video">
                <div className="highlight-block__facade">
                  <LocalImage file={assets.videoPoster} alt={logoAlt} className="fill-image highlight-block__poster" rendition="poster" />
                  <button className="highlight-block__play-button" type="button" aria-label="Play video (visual only)" aria-disabled="true" tabIndex={-1}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expert() {
  return (
    <section id="client-statements" aria-labelledby="client-statements-heading" className="container-fluid client-statements-block">
      <div className="container client-statements-block__container">
        <div className="row client-statements-block__header-row"><div className="col-12"><h2 id="client-statements-heading" className="client-statements-block__headline">{site.expertHeadline}</h2></div></div>
        <div className="row client-statements-block__content-row"><div className="col-12">
          <div className="client-statements-block__slider-container"><div className="client-statements-block__slider"><div className="client-statements-block__item">
            <div className="client-statements-block__content-wrapper">
              <div className="client-statements-block__image-wrapper"><LocalImage file={assets.expert} alt="Paul Gassner smiling while talking on an office phone" className="fill-image client-statements-block__image" rendition="expert" /></div>
              <div className="client-statements-block__text-wrapper">
                <h3>“{site.quote}”</h3>
                <div className="client-statements-block__author-info"><p className="client-statements-block__author-name">Paul Gassner</p><p className="client-statements-block__author-role">Head of Minitube Human ART</p></div>
              </div>
            </div>
          </div></div></div>
        </div></div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" aria-labelledby="products-heading" className="container-fluid products-block theme--dark">
      <div className="products-block__background-layer">
        <div className="products-block__zone products-block__zone--black-middle" />
        <div className="products-block__decorative products-block__decorative--left"><LocalImage file={assets.productsLeft} alt="" width={400} height={800} /></div>
        <div className="products-block__decorative products-block__decorative--right"><LocalImage file={assets.productsRight} alt="" width={400} height={800} /></div>
      </div>
      <div className="container products-block__container">
        <div className="row products-block__header-row products-block__header-row--centered"><div className="col-12 products-block__header-col products-block__header-col--centered"><div className="products-block__header products-block__header--centered"><h2 id="products-heading" className="products-block__headline">{site.productsHeadline}</h2></div></div></div>
        {products.map((product) => (
          <div className="row products-block__item-row" key={product.headline}><div className="col-12 products-block__item-col"><div className="products-block__item">
            <h3 className="products-block__item-headline">{product.headline}</h3>
            <div className="products-block__image-container"><LocalImage file={product.image} alt={product.alt} width={1400} height={800} className="products-block__image" rendition="product" /></div>
            <p className="products-block__caption">{product.caption}</p>
            <div className="products-block__cta"><VisualButton>{product.buttonLabel}</VisualButton></div>
          </div></div></div>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team-members" aria-labelledby="team-members-heading" className="container-fluid team-members-block">
      <div className="container team-members-block__container">
        <div className="row team-members-block__header-row"><div className="col-12 col-lg-8"><h2 id="team-members-heading" className="team-members-block__headline">{site.teamHeadline}</h2></div></div>
        <div className="row team-members-block__content-row">
          {team.map((member) => (
            <div className="col-12 col-md-6 col-xl-3 team-members-block__col" key={member.name}>
              <VisualCard className="team-members-block__card" media={<LocalImage file={member.image} alt={`Portrait of ${member.name}`} width={400} height={711} className="team-members-block__image" rendition="team" />} headline={<h3 className="team-members-block__name">{member.name}</h3>}>
                <p className="team-members-block__position">{member.position}</p>
              </VisualCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section aria-labelledby="distributor-selection-heading" className="container-fluid distributor-selection" data-theme="dark">
      <LocalImage file={assets.contactMap} alt="" className="fill-image distributor-selection__map-bg" />
      <div className="container distributor-selection__container"><div className="row distributor-selection__content-row">
        <div className="col-12 col-xl-5 distributor-selection__content-col"><div className="distributor-selection__content-card"><h2 id="distributor-selection-heading" className="distributor-selection__headline">{site.contactHeadline}</h2><p className="distributor-selection__description">{site.contactDescription}</p></div></div>
        <div className="col-12 col-xl-7 distributor-selection__selection-col"><div className="distributor-selection__selection-card"><div className="distributor-selection__results"><div className="distributor-selection__details">
          <h3 className="distributor-selection__company-name">{site.company}</h3>
          <div className="distributor-selection__website"><VisualLink className="distributor-selection__website-link">{site.website}</VisualLink></div>
          <div className="distributor-selection__info-grid">
            <div className="distributor-selection__info-item"><span className="distributor-selection__info-label">E-mail</span><div className="distributor-selection__info-value">
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 64 64" fill="none" className="distributor-selection__icon" aria-hidden="true"><path d="M54 18.8C54 16.38 52.02 14.4 49.6 14.4H14.4C11.98 14.4 10 16.38 10 18.8V45.2C10 47.62 11.98 49.6 14.4 49.6H49.6C52.02 49.6 54 47.62 54 45.2V18.8ZM49.6 18.8L32 29.778L14.4 18.8H49.6ZM49.6 45.2H14.4V23.2L32 34.2L49.6 23.2V45.2Z" fill="currentColor" /></svg>
              <VisualLink>{site.email}</VisualLink>
            </div></div>
            <div className="distributor-selection__info-item"><span className="distributor-selection__info-label">Phone</span><div className="distributor-selection__info-value">
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 64 64" fill="none" className="distributor-selection__icon" aria-hidden="true"><path d="M20.4733 17.2222C20.6 19.1011 20.9167 20.9378 21.4233 22.69L18.89 25.2233C18.0244 22.69 17.4756 20.0089 17.2856 17.2222H20.4733ZM41.2889 42.5978C43.0833 43.1044 44.92 43.4211 46.7778 43.5478V46.6933C43.9911 46.5033 41.31 45.9544 38.7556 45.11L41.2889 42.5978ZM22.5 13H15.1111C13.95 13 13 13.95 13 15.1111C13 34.9344 29.0656 51 48.8889 51C50.05 51 51 50.05 51 48.8889V41.5211C51 40.36 50.05 39.41 48.8889 39.41C46.2711 39.41 43.7167 38.9878 41.3522 38.2067C41.1411 38.1222 40.9089 38.1011 40.6978 38.1011C40.1489 38.1011 39.6211 38.3122 39.1989 38.7133L34.5544 43.3578C28.58 40.2967 23.6822 35.42 20.6422 29.4456L25.2867 24.8011C25.8778 24.21 26.0467 23.3867 25.8144 22.6478C25.0333 20.2833 24.6111 17.75 24.6111 15.1111C24.6111 13.95 23.6611 13 22.5 13Z" fill="currentColor" /></svg>
              <VisualLink>{site.phone}</VisualLink>
            </div></div>
          </div>
        </div></div></div></div>
      </div></div>
    </section>
  );
}

function Disclaimer() {
  return <section className="container-fluid content-block" aria-label="Product notices"><div className="container content-block__container"><div className="row content-block__content-row"><div className="col-12 content-block__col"><div className="rich-text"><div className="payload-richtext"><p>AndroVision® med: Not for clinical use. Product not commercially available.</p><p>sFlow: Not for clinical use. Product not commercially available.</p></div></div></div></div></div></section>;
}

function Footer() {
  return (
    <footer className="container-fluid footer-block"><div className="container footer-block__container"><div className="row footer-block__row">
      <div className="col-12 col-md-5 footer-block__left-col"><LocalImage file={assets.logo} alt={logoAlt} width={150} height={50} className="footer-block__logo" rendition="footerLogo" /></div>
      <div className="col-12 col-md-7 footer-block__right-col">
        <h2 className="footer-block__headline">Stay in touch</h2>
        <div className="footer-block__middle-row">
          <div className="footer-block__socials"><VisualLink className="footer-block__social-link"><LocalImage file={assets.youtube} alt="YouTube" width={24} height={24} className="footer-block__social-icon" /></VisualLink><VisualLink className="footer-block__social-link"><LocalImage file={assets.linkedin} alt="LinkedIn" width={24} height={24} className="footer-block__social-icon" /></VisualLink></div>
          <VisualLink className="footer-block__button">Subscribe to newsletter</VisualLink>
        </div>
        <div className="footer-block__legal-row"><VisualLink className="footer-block__legal-link">Legal Notice</VisualLink><VisualLink className="footer-block__legal-link">Privacy Policy</VisualLink></div>
      </div>
    </div></div></footer>
  );
}

export default function Home() {
  return <><Header /><main><article><Hero /><Booth /><Reasons /><Highlight /><Expert /><Products /><Team /><Booking /><Contact /><Disclaimer /></article></main><Footer /></>;
}
