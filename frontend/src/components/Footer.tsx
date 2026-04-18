import React from 'react';
import { MessageCircle, Send, Camera, Play, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      background: '#020617', 
      borderTop: '1px solid var(--glass-border)', 
      padding: '5rem 0 2rem',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-1.5px', marginBottom: '1.5rem' }}>
              BOOK<span style={{ color: 'var(--primary)' }}>MY</span>SHOW
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              The world's leading entertainment destination. Discover the best movies, events, and experiences in your city.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[MessageCircle, Send, Camera, Play].map((Icon, i) => (
                <div key={i} style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '12px', 
                  background: 'var(--bg-card)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: '1px solid var(--glass-border)',
                  transition: 'var(--transition)'
                }} className="social-icon">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Now Showing', 'Coming Soon', 'Offers', 'Gift Cards', 'Support'].map(link => (
                <li key={link}>
                  <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Get in Touch</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
                <Mail size={20} className="text-primary" />
                <span>support@bookmyshow.com</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
                <Phone size={20} className="text-primary" />
                <span>+1 (800) SHOW-TIME</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
                <MapPin size={20} className="text-primary" />
                <span>Entertainment Ave, Hollywood, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ 
          paddingTop: '2rem', 
          borderTop: '1px solid var(--glass-border)', 
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}>
          <p>© 2026 BookMyShow Clone. Designed with passion for cinema lovers.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
            <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</Link>
            <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Cookies</Link>
          </div>
        </div>
      </div>
      
      <style>{`
        .social-icon:hover {
          background: var(--primary) !important;
          color: white !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 15px -3px rgba(225, 29, 72, 0.4);
        }
        .text-primary {
          color: var(--primary);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
