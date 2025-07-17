import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <div className="hero-banner">
        <div className="hero-image" style={{ backgroundImage: "url('/images/service-hero.jpg')" }}>
          <div className="hero-content">
            <h1>NOS SERVICES</h1>
            <p>Découvrez l'ensemble de nos services dédiés aux professionnels du transport et de la logistique</p>
          </div>
        </div>
      </div>

      <section className="services-section">
        <div className="section-title">
          <h2>Services Disponibles</h2>
          <p>L'OIC met à votre disposition une gamme complète de services pour faciliter vos opérations</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <h3>BORDEREAU DE SUIVI DES CARGAISONS (BSC EN LIGNE)</h3>
            <p>Service de suivi en ligne des cargaisons pour un meilleur contrôle de vos marchandises.</p>
            <a href="https://bsci.sgs.com/" className="service-link" target="_blank" rel="noopener noreferrer">
              Accéder au service
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>DOCUMENT UNIQUE DE TRANSPORT (DUT)</h3>
            <p>Gestion simplifiée du document unique de transport routier de marchandises.</p>
            <a href="https://dut-oic.ci/" className="service-link" target="_blank" rel="noopener noreferrer">
              Accéder au service
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-parking"></i>
            </div>
            <h3>PARKING DE STATIONNEMENT</h3>
            <p>Services de parking sécurisé pour les véhicules de transport de marchandises.</p>
            <a href="#" className="service-link">
              En savoir plus
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>SUIVI DE TRAFIC</h3>
            <p>Monitoring et analyse du trafic des marchandises pour optimiser les flux logistiques.</p>
            <a href="#" className="service-link">
              En savoir plus
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-warehouse"></i>
            </div>
            <h3>L'ENTREPÔT RÉEL SOUS DOUANE</h3>
            <p>Services d'entreposage sous douane pour faciliter vos opérations d'import-export.</p>
            <a href="#" className="service-link">
              En savoir plus
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>GÉOLOCALISATION</h3>
            <p>Services de géolocalisation pour le suivi en temps réel de vos marchandises.</p>
            <a href="#" className="service-link">
              En savoir plus
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>SÉMINAIRE</h3>
            <p>Formations et séminaires spécialisés dans le domaine du transport et de la logistique.</p>
            <a href="#" className="service-link">
              En savoir plus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;