import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'BORDEREAU DE SUIVI DES CARGAISONS (BSC EN LIGNE)',
    'DOCUMENT UNIQUE DE TRANSPORT (DUT)',
    'PARKING DE STATIONNEMENT',
    'SUIVI DE TRAFIC',
    'L\'ENTREPÔT RÉEL SOUS DOUANE',
    'GÉOLOCALISATION',
    'SÉMINAIRE'
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>À PROPOS</h3>
          <p>
            L'Office Ivoirien des Chargeurs est l'institution de référence pour les 
            professionnels du transport et de la logistique en Côte d'Ivoire.
          </p>
          <div className="footer-social">
            <a href="#" title="Facebook" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" title="LinkedIn" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>LIENS RAPIDES</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/actualites">Actualités</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>SERVICES</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <Link to="#">{service}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>CONTACT</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 
              Rue Le Havre, Zone portuaire
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 
              (+225) 27.21.25.12.87
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> 
              ctbsc@oic.ci
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} /> 
              Lun-Ven: 8h-16h
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} OIC. Tous droits réservés. 
          <a href="https://justvyou.com/" target="_blank" rel="noopener noreferrer">
            JUSTVYOU MEDIALAB
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;