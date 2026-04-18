import { Star } from 'lucide-react';
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
  return (
    <Link to={`/movie/${movie.id}`} className="animate-fade" style={{
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      transition: 'var(--transition)',
      cursor: 'pointer',
      position: 'relative',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block'
    }}>
      <div style={{ position: 'relative', aspectRatio: '2/3', overflow: 'hidden' }}>
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }}
          className="hover-zoom"
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          padding: '4px 8px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.85rem'
        }}>
          <Star size={14} fill="var(--accent)" color="var(--accent)" />
          {movie.rating}
        </div>
      </div>
      
      <div style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {movie.title}
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{movie.genre}</span>
          <span style={{ 
            fontSize: '0.75rem', 
            padding: '2px 8px', 
            borderRadius: '4px', 
            background: 'var(--glass)',
            border: '1px solid var(--glass-border)'
          }}>
            {movie.language}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
