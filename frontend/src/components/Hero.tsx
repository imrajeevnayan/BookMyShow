import React from 'react';
import { Search, ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section style={{
      minHeight: '85vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '6rem 0'
    }}>
      {/* Background with advanced overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to right, #020617 35%, rgba(2, 6, 23, 0.4)), url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1
      }}></div>

      <div className="container">
        <div style={{ maxWidth: '700px' }} className="animate-fade">
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            background: 'var(--primary-muted)', 
            padding: '0.5rem 1rem', 
            borderRadius: '100px',
            border: '1px solid var(--primary)',
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '2rem'
          }}>
            <Play size={14} fill="currentColor" />
            NOW SHOWING IN CINEMAS
          </div>
          
          <h1 style={{ fontSize: '5rem', lineHeight: 1, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
            Your <span className="text-gradient">Ultimate</span> Cinema Companion
          </h1>
          <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.4 }}>
            Book tickets for the latest blockbusters, explore global events, and experience entertainment like never before.
          </p>

          <div className="glass-effect" style={{
            display: 'flex',
            padding: '0.6rem',
            borderRadius: '24px',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '600px',
            boxShadow: 'var(--shadow-premium)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, paddingLeft: '1.5rem' }}>
              <Search color="var(--text-muted)" size={20} />
              <input 
                type="text" 
                placeholder="Search movies, events, theaters..."
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.1rem',
                  width: '100%',
                  outline: 'none',
                  padding: '0.5rem 0'
                }}
              />
            </div>
            <button className="btn-primary" style={{ padding: '1rem 2rem', borderRadius: '18px' }}>
              Search Now
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
            {[
              { label: 'Users', value: '10M+' },
              { label: 'Theaters', value: '500+' },
              { label: 'Events/Year', value: '25K+' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>{stat.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
