import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/cam.jpg',
      title: 'BOURSE DE FRET DE CÔTE D\'IVOIRE',
      description: 'Une solution numérique pour faciliter l\'accès au fret',
      link: 'https://boursedefret.ci/'
    },
    {
      image: '/images/inc.jpg',
      title: '6E ÉDITION DU PRIX D\'EXCELLENCE DES ENTREPRISES PUBLIQUES',
      description: 'L\'Office Ivoirien des Chargeurs (OIC) remporte "LE SUPER PRIX D\'EXCELLENCE"',
      link: 'https://www.oic.ci/'
    },
    {
      image: '/images/inc3.jpg',
      title: 'DUT: DOCUMENT UNIQUE DES TRANSPORTEURS DE MARCHANDISE',
      description: 'Une solution numérique pour améliorer la traçabilité des flux de marchandise',
      link: 'https://dut-oic.ci/'
    },
    {
      image: '/images/logi.jpg',
      title: 'BSC: BORDEREAU DE SUIVI DE CARGAISONS',
      description: 'Suivre l\'ensemble des mouvements d\'import et export',
      link: 'https://bsci.sgs.com/'
    }
  ];

  const partners = [
    { image: '/images/logo_part.png', alt: 'Partenaire 1' },
    { image: '/images/logo3part.jpg', alt: 'Partenaire 2' },
    { image: '/images/part.png', alt: 'Partenaire 3' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home">
      <div className="welcome-message">
        BIENVENUE SUR LE PORTAIL DE L'OFFICE IVOIRIEN DES CHARGEURS (OIC)
      </div>
      
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <div className="slide-text">{slide.title}</div>
              <div className="slide-desc">{slide.description}</div>
              <a href={slide.link} className="slide-btn" target="_blank" rel="noopener noreferrer">
                Découvrir
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="button-container">
        <a href="https://bsci.sgs.com/" className="button" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} /> Site de BSC
        </a>
        <a href="https://dut-oic.ci/" className="button" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} /> Site de DUT
        </a>
      </div>
      
      <div className="partners-section">
        <h2 className="section-title">NOS PARTENAIRES</h2>
        <div className="partners-carousel">
          <div className="partners-track">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.image} alt={partner.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <section className="engagement">
        <div className="engagement-container">
          <h2>NOTRE ENGAGEMENT</h2>
          <p>
            À travers le Plan Stratégique de Développement, notre entreprise s'est engagée dans une ambition 
            qui traduit la volonté de ses dirigeants de conduire résolument l'Office Ivoirien des Chargeurs 
            dans une perspective nouvelle avec pour vision d'« Être le catalyseur d'une logistique nationale 
            moderne et durable au service des chargeurs ».
          </p>
          <p>
            Les axes et objectifs qui sous-tendent cette Vision sont les suivants : les ACTEURS de la LOGISTIQUE, 
            les ACTIONNAIRES, le PERSONNEL et les PARTENAIRES.
          </p>
          <p>
            Les valeurs d'ÉQUITÉ, de PROFESSIONNALISME, de RESPECT, d'INTÉGRITÉ, de SUCCÈS, de PARTAGE et 
            BIEN-ÊTRE cadrent l'action commune vers l'accomplissement de cette Vision.
          </p>
          
          <div className="engagement-stats">
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Partenaires</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Membres</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Ans d'expérience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Formations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;