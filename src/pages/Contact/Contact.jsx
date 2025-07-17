import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    alert('Message envoyé avec succès !');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <div className="hero-banner">
        <div className="hero-image" style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}>
          <div className="hero-content">
            <h1>CONTACTEZ-NOUS</h1>
            <p>Nous sommes à votre écoute pour répondre à toutes vos questions</p>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Informations de Contact</h2>
            <p>N'hésitez pas à nous contacter pour toute information ou assistance.</p>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-details">
                <h3>Adresse</h3>
                <p>Rue Le Havre, Zone portuaire<br />Abidjan, Côte d'Ivoire</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-details">
                <h3>Téléphone</h3>
                <p>(+225) 27.21.25.12.87</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>ctbsc@oic.ci</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="contact-details">
                <h3>Horaires</h3>
                <p>Lundi - Vendredi: 8h - 16h<br />Samedi - Dimanche: Fermé</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Envoyez-nous un Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet de votre message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FontAwesomeIcon icon={faPaperPlane} />
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <h2>Notre Localisation</h2>
          <div className="map-placeholder">
            <p>Carte interactive - Zone portuaire d'Abidjan</p>
            <p>Rue Le Havre, Zone portuaire</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;