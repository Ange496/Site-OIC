import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationCircle, 
  faArrowRight, 
  faArrowUp,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import './News.css';

const News = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const newsData = [
    {
      id: 1,
      image: '/images/6e-edition-du-prix-dexcellence-des-entreprises-publiques-oic.jpg',
      date: '2 OCT 2024',
      category: 'ÉVÉNEMENT',
      title: '6E EDITION DU PRIX D\'EXCELLENCE DES ENTREPRISES PUBLIQUES: L\'OFFICE IVOIRIEN DES CHARGEURS (OIC) REMPORTE LE SUPER PRIX D\'EXCELLENCE – OCTOBRE 2024',
      description: 'Les lauréats de la 6e édition du Prix d\'excellence de la gouvernance et de la performance des entreprises publiques ont été désignés et distingués ce mercredi 2 octobre 2024 à Abidjan, au palais des congrès du Sofitel Abidjan hôtel Ivoire.',
      link: 'https://www.oic.ci/portail/trophe/index.html'
    },
    {
      id: 2,
      image: '/images/ag.jpg',
      date: 'DECEMBRE 2023',
      title: 'REMISE DU PRIX DU MEILLEUR AGENT OIC – DECEMBRE 2023',
      description: 'Dans le cadre de la nouvelle gouvernance instituée au sein de l\'Office Ivoirien des Chargeurs (OIC), conformément à la mise en œuvre du Plan Stratégique de Développement (PSD) 2016-2022 et la vision de voir grandir l\'OIC...',
      link: 'https://www.oic.ci/portail/remise-du-prix-du-meilleur-agent-oic-decembre-2023/index.html'
    },
    {
      id: 3,
      image: '/images/master.jpg',
      date: '10 OCT 2023',
      category: 'FORMATION',
      title: 'FORMATION MASTER CLASS AVEC LE Dr YANN ALIX – FEVRIER 2025',
      description: 'Le Mardi 04 Février 2025, s\'est déroulé à la salle de conférence de l\'Office Ivoirien des Chargeurs (OIC), une master class sur le thème : « Evolution des stratégies maritimes, portuaires et logistiques internationales...',
      link: 'https://www.oic.ci/portail/2025/index.html'
    },
    {
      id: 4,
      image: '/images/fou.jpg',
      date: '10 JAN',
      title: 'AVIS AUX FOURNISSEURS – NOTES N° 001/DG/DAF/SJC/Ds',
      description: 'L\'Office Ivoirien des Chargeurs (OIC) informe les Prestataires de Services désirant faire partie de son Fichier Fournisseurs pour les années 2024 à 2026, de l\'ouverture du retrait des dossiers techniques de soumission.',
      link: 'https://www.oic.ci/portail/avis-aux-fournisseurs-notes-n-001-dg-daf-sjc-ds/index.html'
    },
    {
      id: 5,
      image: '/images/impo.jpg',
      date: '7 MARS 2024',
      title: 'AVIS AUX IMPORTATEURS ET EXPORTATEURS',
      description: 'Objet : Levée de la mesure de suspension temporaire d\'exportation de la banane plantain, du manioc et ses dérivés ainsi que de l\'igname.',
      link: 'https://www.oic.ci/portail/avis-aux-importateurs-et-exportateurs/index.html'
    },
    {
      id: 6,
      image: '/images/SEMINAIRE DAC- EDITION 1.jpg',
      date: '10 FEVRIER 2025',
      title: 'SEMINAIRE DE FORMATION DES CHARGEURS',
      description: 'L\'Office Ivoirien des Chargeurs (OIC), dans le cadre de sa mission d\'assistance aux opérateurs économiques sur la chaîne des Transports, a organisé du 25 au 26 mars 2025 à Ivotel Plateau, un séminaire de formation à l\'endroit des chargeurs.',
      link: 'https://www.oic.ci/portail/2025/seminaire.html'
    }
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Recherche:', searchQuery);
  };

  return (
    <div className="news">
      <div className="hero-banner">
        <div className="hero-image" style={{ backgroundImage: "url('/images/lo.jpg')" }}>
          <div className="hero-content">
            <h1>ACTUALITÉS & ÉVÉNEMENTS</h1>
            <p>Découvrez les dernières nouvelles et événements de l'Office Ivoirien des Chargeurs</p>
          </div>
        </div>
      </div>

      <section className="news-section">
        <div className="section-title">
          <h2>Nos Dernières Actualités</h2>
          <p>Restez informés des dernières nouvelles et événements marquants de notre organisation</p>
        </div>

        <div className="alert-box">
          <div className="alert-content">
            <div className="alert-icon">
              <FontAwesomeIcon icon={faExclamationCircle} />
            </div>
            <div className="alert-text">
              <h3>Avis au Chargeurs du 02 au 03 Juin 2025 pour colloque international du CNCC des 25 au 27 Juin 2025</h3>
              <p>Nouvelle grille Tarifaire BSC et Coordonnée bancaire</p>
              <br />
              <a 
                href="https://www.oic.ci/portail/wp-content/uploads/2025/AvisauChargeurs02.pdf" 
                className="alert-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cliquer ici pour plus de détails
              </a>
            </div>
          </div>
        </div>

        <div className="news-grid">
          {newsData.map((news, index) => (
            <div key={news.id} className="news-card" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
              <div className="news-img">
                <img src={news.image} alt={news.title} loading="lazy" />
                <div className="date-badge">{news.date}</div>
              </div>
              <div className="news-content">
                {news.category && <span className="news-category">{news.category}</span>}
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <a 
                  href={news.link} 
                  className="read-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lire plus <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button
        className={`back-to-top-news ${isBackToTopVisible ? 'active' : ''}`}
        onClick={scrollToTop}
        title="Retour en haut"
        aria-label="Retour en haut"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default News;