import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="glass-effect" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-1px' }}>
          BOOK<span style={{ color: 'var(--primary)' }}>MY</span>SHOW
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Movies</a>
          <a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Theaters</a>
          <a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Events</a>
          <button className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
