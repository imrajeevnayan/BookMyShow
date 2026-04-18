import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MovieAPI } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, Play, Star, ChevronLeft, Send, ThumbsUp, Share2 } from 'lucide-react';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMovie = async () => {
      try {
        const data = await MovieAPI.getById(Number(id));
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
        // Mock fallback
        setMovie({
          id: id,
          title: 'Pushpa 2: The Rule',
          description: "Pushpa Raj, who is now the ruler of the red sandalwood syndicate, must face his sworn enemy, SP Bhanwar Singh Shekhawat, in an epic showdown that will determine the fate of his empire and his legacy.",
          genre: 'Action/Thriller',
          rating: 9.6,
          durationMinutes: 175,
          language: 'Telugu',
          releaseDate: '2024-12-05',
          posterUrl: 'https://images.unsplash.com/photo-1542204112-3004351658b1?q=80&w=2670&auto=format&fit=crop'
        });
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading || !movie) return (
    <div style={{ background: 'var(--bg-dark)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '40px', height: '40px', border: '4px solid var(--primary-muted)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    </div>
  );

  const cast = [
    { name: 'Allu Arjun', role: 'Pushpa Raj', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop' },
    { name: 'Rashmika Mandanna', role: 'Srivalli', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop' },
    { name: 'Fahadh Faasil', role: 'Bhanwar Singh', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop' },
    { name: 'Dhanunjay', role: 'Jolly Reddy', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2570&auto=format&fit=crop' },
  ];

  return (
    <main>
      <Navbar />
      
      {/* Dynamic Hero Section */}
      <div style={{ position: 'relative', width: '100%', minHeight: '80vh', display: 'flex', alignItems: 'flex-end', paddingTop: '100px' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to top, var(--bg-dark) 0%, rgba(2, 6, 23, 0.6) 50%, rgba(2, 6, 23, 0.4) 100%), url(${movie.posterUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          filter: 'blur(0px)',
          zIndex: -1
        }}></div>

        <div className="container" style={{ paddingBottom: '4rem' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', opacity: 0.8, fontWeight: 500 }} className="hover-push">
            <ChevronLeft size={20} /> Back to Movies
          </Link>
          
          <div style={{ display: 'flex', gap: '3.5rem', alignItems: 'flex-end' }} className="movie-header">
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="animate-fade"
                style={{ 
                  width: '300px', 
                  borderRadius: '20px', 
                  boxShadow: 'var(--shadow-premium)', 
                  border: '1px solid var(--glass-border)',
                  aspectRatio: '2/3',
                  objectFit: 'cover'
                }} 
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '15px', 
                right: '15px', 
                background: 'var(--primary)', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 800
              }}>
                ULTRA HD
              </div>
            </div>

            <div style={{ paddingBottom: '1rem', flex: 1 }} className="animate-fade">
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                {movie.genre.split('/').map((g: string) => (
                  <span key={g} style={{ border: '1px solid var(--primary)', color: 'var(--primary)', padding: '2px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600 }}>{g}</span>
                ))}
              </div>
              <h1 style={{ fontSize: '4.5rem', lineHeight: 1, marginBottom: '1.5rem', letterSpacing: '-2px' }}>{movie.title}</h1>
              
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: 'var(--accent)', color: 'var(--bg-dark)', padding: '4px 8px', borderRadius: '6px', fontWeight: 800, fontSize: '1.1rem' }}>
                    <Star size={14} fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                    {movie.rating}
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>(12.4K Reviews)</span>
                </div>
                
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}><Clock size={20} className="text-primary" /> {Math.floor(movie.durationMinutes / 60)}h {movie.durationMinutes % 60}m</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}><Calendar size={20} className="text-primary" /> {new Date(movie.releaseDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span style={{ fontSize: '1.1rem', background: 'var(--glass)', padding: '4px 12px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>{movie.language}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '5rem', padding: '6rem 0' }}>
        <div className="animate-fade">
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>Synopsis</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {movie.description}
            </p>
          </section>

          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.25rem', letterSpacing: '-1px' }}>Cast & Crew</h2>
              <button style={{ color: 'var(--primary)', background: 'none', fontWeight: 600 }}>View All</button>
            </div>
            
            <div style={{ display: 'flex', gap: '2.5rem', overflowX: 'auto', paddingBottom: '1.5rem' }}>
              {cast.map((person, i) => (
                <div key={i} style={{ textAlign: 'center', minWidth: '120px' }}>
                  <div style={{ 
                    width: '120px', 
                    height: '120px', 
                    borderRadius: '24px', 
                    overflow: 'hidden', 
                    marginBottom: '1rem',
                    border: '1px solid var(--glass-border)'
                   }}>
                    <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{person.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{person.role}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div>
          <div className="glass-effect" style={{ 
            padding: '2.5rem', 
            borderRadius: '32px', 
            height: 'fit-content', 
            position: 'sticky', 
            top: '120px',
            boxShadow: 'var(--shadow-premium)'
          }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              Book Tickets
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <Link to={`/book/${id}`} className="btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.2rem', textAlign: 'center', textDecoration: 'none', borderRadius: '16px' }}>
                Select Showtimes
              </Link>
              <button className="btn-glass" style={{ width: '100%', padding: '1.25rem', borderRadius: '16px', fontSize: '1.1rem' }}>
                Watch Trailer <Play size={18} fill="currentColor" />
              </button>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <button className="btn-glass" style={{ padding: '0.75rem', fontSize: '0.9rem', width: '100%' }}>
                <ThumbsUp size={16} /> 24K
              </button>
              <button className="btn-glass" style={{ padding: '0.75rem', fontSize: '0.9rem', width: '100%' }}>
                <Share2 size={16} /> Share
              </button>
            </div>
            
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
               <Zap size={14} className="text-primary" /> Available at 12 theaters
            </p>
          </div>
        </div>
      </div>

      <Footer />
      
      <style>{`
        .movie-header {
          @media (max-width: 968px) {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        .text-primary { color: var(--primary); }
        .hover-push:hover { transform: translateX(-5px); }
      `}</style>
    </main>
  );
};

export default MovieDetail;
