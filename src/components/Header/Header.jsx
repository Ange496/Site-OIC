import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Recherche:', searchQuery);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

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
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="logo">
            <Link to="/">
              <img src="/images/oic.jpg" alt="Logo OIC" />
            </Link>
          </div>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <Link 
                  to="/" 
                  className={isActive('/') || isActive('/accueil') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/a-propos" 
                  className={isActive('/a-propos') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  À propos
                </Link>
              </li>
              <li className="dropdown">
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                  Services <FontAwesomeIcon icon={faChevronDown} />
                </Link>
                <div className="dropdown-menu">
                  {services.map((service, index) => (
                    <Link key={index} to="#" onClick={() => setIsMenuOpen(false)}>
                      {service}
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <Link 
                  to="/actualites" 
                  className={isActive('/actualites') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Actualité / Événement
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={isActive('/contact') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Rechercher sur le portail..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Rechercher"
            />
            <button type="submit" title="Rechercher">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;