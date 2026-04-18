import React, { useState } from 'react';
import { Star, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    posterUrl: string;
    genre: string;
    rating: number;
    language: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Link 
      to={`/movie/${movie.id}`} 
      className="animate-fade movie-card-hover" 
      style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        transition: 'var(--transition)',
        cursor: 'pointer',
        position: 'relative',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '2/3', overflow: 'hidden', background: '#1e293b' }}>
        {!imageLoaded && !imageError && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '30px', height: '30px', border: '3px solid var(--primary-muted)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          </div>
        )}
        <img 
          src={imageError ? 'https://images.unsplash.com/photo-1485846234645-a62644ffb467?q=80&w=2600&auto=format&fit=crop' : movie.posterUrl} 
          alt={movie.title}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
          className="hover-zoom"
        />
        
        {/* Badges */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(2, 6, 23, 0.8)',
          backdropFilter: 'blur(8px)',
          padding: '4px 10px',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--accent)',
          border: '1px solid rgba(251, 191, 36, 0.3)'
        }}>
          <Star size={14} fill="currentColor" />
          {movie.rating}
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          background: 'rgba(2, 6, 23, 0.8)',
          backdropFilter: 'blur(8px)',
          padding: '4px 10px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.75rem',
          color: 'white',
          border: '1px solid var(--glass-border)'
        }}>
          <Globe size={12} />
          {movie.language}
        </div>
      </div>
      
      <div style={{ padding: '1.25rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {movie.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{movie.genre}</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.5 }}></span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <Clock size={14} />
            <span>2h 15m</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </Link>
  );
};

export default MovieCard;
