import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section style={{
      height: '80vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      paddingBottom: '2rem'
    }}>
      {/* Background with overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to right, var(--bg-dark) 20%, transparent), url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1
      }}></div>

      <div className="container">
        <div style={{ maxWidth: '600px' }} className="animate-fade">
          <h1 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Book Your <span style={{ color: 'var(--primary)' }}>Memories</span> In Just A Click
          </h1>
          <p style={{ fontSize: '1.2rem', color: var(--text-muted), marginBottom: '2rem' }}>
            Experience the latest blockbusters in the highest quality theaters across the country.
          </p>

          <div className="glass-effect" style={{
            display: 'flex',
            padding: '0.5rem',
            borderRadius: '16px',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '500px'
          }}>
            <Search color="var(--text-muted)" style={{ marginLeft: '1rem' }} />
            <input 
              type="text" 
              placeholder="Search for movies, events, plays..."
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1rem',
                flex: 1,
                outline: 'none',
                padding: '0.5rem 0'
              }}
            />
            <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Search <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
