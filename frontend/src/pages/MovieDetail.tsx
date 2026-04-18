import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MovieAPI } from '../services/api';
import Navbar from '../components/Navbar';
import { Calendar, Clock, MapPin, Play, Star } from 'lucide-react';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await MovieAPI.getById(Number(id));
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
        // Mock fallback
        setMovie({
          id: id,
          title: 'Dune: Part Two',
          description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
          genre: 'Sci-Fi',
          rating: 8.9,
          durationMinutes: 166,
          language: 'English',
          releaseDate: '2024-03-01',
          posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop'
        });
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading || !movie) return <div>Loading...</div>;

  return (
    <main>
      <Navbar />
      {/* Backdrop */}
      <div style={{
        height: '60vh',
        width: '100%',
        position: 'relative',
        backgroundImage: `linear-gradient(to top, var(--bg-dark), transparent), url(${movie.posterUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
      }}>
        <div className="container" style={{ position: 'absolute', bottom: '2rem', display: 'flex', gap: '2.5rem', alignItems: 'flex-end' }}>
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            style={{ width: '240px', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)', border: '4px solid var(--glass-border)' }} 
          />
          <div style={{ paddingBottom: '1rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{movie.title}</h1>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Star fill="var(--accent)" color="var(--accent)" size={18} /> {movie.rating}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={18} /> {movie.durationMinutes} min</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={18} /> {movie.releaseDate}</span>
              <span className="glass-effect" style={{ padding: '2px 10px', borderRadius: '4px' }}>{movie.genre}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', padding: '4rem 0' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Synopsis</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            {movie.description}
          </p>

          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Cast & Crew</h2>
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '1rem' }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ textAlign: 'center', minWidth: '100px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-card)', margin: '0 auto 0.75rem' }}></div>
                <div style={{ fontSize: '0.9rem' }}>Cast {i}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-effect" style={{ padding: '2rem', borderRadius: '24px', height: 'fit-content', position: 'sticky', top: '100px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Book Tickets</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to={`/book/${id}`} className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', textAlign: 'center', textDecoration: 'none' }}>
              Select Showtimes
            </Link>
            <button className="glass-effect" style={{ width: '100%', padding: '1rem', color: 'white' }}>
              Watch Trailer <Play size={16} inline style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            Available at 12 theaters in your city
          </p>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;
