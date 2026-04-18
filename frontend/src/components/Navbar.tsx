import React from 'react';
import { Link } from 'react-router-dom';
import { User, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="glass-effect" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '0.75rem 0',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ 
          fontSize: '1.75rem', 
          fontWeight: 900, 
          color: 'var(--text-main)', 
          letterSpacing: '-1.5px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center'
        }}>
          BOOK<span style={{ color: 'var(--primary)' }}>MY</span>SHOW
        </Link>
        
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2rem' }} className="nav-links">
            <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', opacity: 0.8 }}>Movies</Link>
            <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', opacity: 0.8 }}>Theaters</Link>
            <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', opacity: 0.8 }}>Events</Link>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to="/login" className="btn-primary" style={{ padding: '0.6rem 1.5rem', borderRadius: '100px', textDecoration: 'none' }}>
              <User size={18} />
              Login
            </Link>
            <button style={{ background: 'none', color: 'white', display: 'none' }} className="mobile-menu">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
