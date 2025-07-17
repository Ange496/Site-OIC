import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBalanceScale, 
  faUserTie, 
  faHandsHelping, 
  faShieldAlt, 
  faTrophy, 
  faHandHoldingHeart, 
  faSmile,
  faEye,
  faChartLine,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  const values = [
    { icon: faBalanceScale, label: 'Équité' },
    { icon: faUserTie, label: 'Professionnalisme' },
    { icon: faHandsHelping, label: 'Respect' },
    { icon: faShieldAlt, label: 'Intégrité' },
    { icon: faTrophy, label: 'Succès' },
    { icon: faHandHoldingHeart, label: 'Partage' },
    { icon: faSmile, label: 'Bien-être' }
  ];

  const milestones = [
    { year: '1969', event: 'Création du Conseil Ivoirien des Chargeurs (CIC)' },
    { year: '1975', event: 'Transformation en Office Ivoirien des Chargeurs (OIC)' },
    { year: '2008', event: 'Lancement du portail en ligne' },
    { year: '2024', event: 'Transformation en SA avec capital de 752 740 000 FCFA' }
  ];

  return (
    <div className="about">
      <div className="hero-banner">
        <div className="hero-image" style={{ backgroundImage: "url('/images/apro.jpg')" }}>
          <div className="hero-content">
            <h1>À PROPOS DE NOUS</h1>
          </div>
        </div>
      </div>

      <section className="director-section">
        <div className="director-container">
          <img src="/images/dg.png" alt="Monsieur Sidibe Issoufou, Directeur Général de l'OIC" />
          <div className="director-content">
            <h2>MONSIEUR SIDIBE ISSOUFOU <br />Directeur Général de l'Office Ivoirien des Chargeurs</h2>
            <div className="director-message">
              <p>Chers Internautes,</p>
              <p>Je vous souhaite la bienvenue sur le site officiel de l'Office Ivoirien des Chargeurs (OIC).</p>
              <p>
                Ce portail d'informations est né de la volonté de la Direction Générale de doter notre entreprise 
                d'un outil moderne d'informations et de communication. L'objectif est d'en faire une vitrine 
                puissante pour informer sur nos missions, activités et la vie au sein de l'OIC.
              </p>
              
              <h3>Nos services en ligne</h3>
              <p>Disponible depuis le 8 février 2008, ce site permet aux opérateurs économiques d'effectuer en toute quiétude leurs opérations via internet, notamment :</p>
              <ul>
                <li>Création du Bordereau de Suivi des Cargaisons (BSC) en ligne</li>
                <li>Gestion du Document Unique de Transport routier de marchandises (DUT)</li>
              </ul>
              
              <h3>Contenu du site</h3>
              <p>Ce site rénové vous offre plusieurs rubriques :</p>
              <ul>
                <li>L'actualité des transports</li>
                <li>Les statistiques maritimes, portuaires et routières</li>
                <li>Le mouvement des navires dans le Port d'Abidjan</li>
                <li>Le programme des séminaires de formation</li>
              </ul>
              
              <p>
                Nous poursuivons nos efforts pour renforcer la visibilité de l'OIC via ce média, 
                afin d'élever l'image et la notoriété de notre structure.
              </p>
              
              <p>
                Mon ambition est de tendre vers une dématérialisation totale de nos services pour 
                faciliter vos opérations commerciales. Ce site est le vôtre - conçu pour mieux 
                vous informer et vous simplifier la vie.
              </p>
              
              <p className="signature">Agréable navigation !</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-container">
          <div className="values-column">
            <article className="value-card">
              <h3>Notre Mission</h3>
              <ul>
                <li>Améliorer l'image globale du secteur des transports</li>
                <li>Favoriser la compétitivité de chaque maillon de la chaîne logistique</li>
                <li>Proposer des solutions pour une logistique durable et innovante</li>
                <li>Améliorer les performances logistiques nationales</li>
                <li>Assister les chargeurs (importateurs/exportateurs)</li>
                <li>Représenter et défendre les intérêts des chargeurs</li>
                <li>Appuyer le développement harmonieux du commerce international</li>
              </ul>
            </article>

            <article className="value-card">
              <h3>Nos Valeurs</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-item">
                    <FontAwesomeIcon icon={value.icon} />
                    <span>{value.label}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="history-column">
            <article className="history-card">
              <h3>Notre Histoire</h3>
              <p>
                L'Office Ivoirien des Chargeurs (OIC) représente et défend les intérêts des importateurs 
                et exportateurs, usagers des services de transport pour l'acheminement de leurs marchandises.
              </p>
              
              <h4>1968-1969 : Origines</h4>
              <p>
                Suite aux recommandations de la deuxième Conférence des Nations Unies sur le Commerce et 
                le Développement (CNUCED) à New Delhi en 1968, la Côte d'Ivoire crée en juin 1969 le 
                Conseil Ivoirien des Chargeurs (CIC).
              </p>
              
              <h4>1975 : Transformation</h4>
              <p>
                Le CIC devient l'Office Ivoirien des Chargeurs (OIC), premier conseil des chargeurs 
                en Afrique subsaharienne.
              </p>
              
              <h4>Tutelles</h4>
              <p>L'OIC est placé sous les tutelles techniques et financières de :</p>
              <ul>
                <li>Ministère des Transports</li>
                <li>Ministère du Budget et des Finances</li>
                <li>Ministère du Patrimoine et des Entreprises publiques</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="evolution-section">
        <div className="evolution-container">
          <div className="evolution-content">
            <h2>Création & Évolution</h2>
            <p>
              L'OIC est aujourd'hui une Société Anonyme à Participation Financière Publique Majoritaire 
              avec un capital social de 752 740 000 FCFA depuis l'Assemblée Générale Extraordinaire du 28 mars 2024.
            </p>
            
            <div className="milestones">
              {milestones.map((milestone, index) => (
                <div key={index} className="milestone">
                  <div className="year">{milestone.year}</div>
                  <div className="event">{milestone.event}</div>
                </div>
              ))}
            </div>
            
            <a 
              href="https://www.oic.ci/portail/presentation-3/presentation-de-loic/NOTE%20DE%20PRESENTATION%20GENERALE%20DE%20L'OIC%202025-2029.pdf" 
              className="evolution-btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Télécharger la note de présentation <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
          <div className="evolution-image">
            <img src="/images/siege.jpg" alt="Siège de l'OIC" />
          </div>
        </div>
      </section>

      <section className="strategic-section">
        <div className="strategic-container">
          <article className="strategic-card vision-card">
            <h3><FontAwesomeIcon icon={faEye} /> Notre Vision</h3>
            <p>« Être le catalyseur d'une logistique nationale moderne et durable au service des chargeurs »</p>
          </article>
          
          <article className="strategic-card achievements-card">
            <h3><FontAwesomeIcon icon={faTrophy} /> Nos Réalisations</h3>
            <ul>
              <li>Amélioration de l'image globale du secteur</li>
              <li>Accompagnement d'une filière créatrice d'emplois</li>
              <li>Renforcement de la compétitivité logistique</li>
              <li>Développement de solutions innovantes</li>
              <li>Amélioration des performances logistiques</li>
              <li>Défense efficace des intérêts des chargeurs</li>
            </ul>
          </article>
          
          <article className="strategic-card prospects-card">
            <h3><FontAwesomeIcon icon={faChartLine} /> Perspectives</h3>
            <p>Projets en cours pour pérenniser nos missions :</p>
            <ul>
              <li>Bourse de fret électronique</li>
              <li>Plateformes logistiques régionales</li>
              <li>Régulation des flux portuaires</li>
              <li>Création d'un Observatoire des transports</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;