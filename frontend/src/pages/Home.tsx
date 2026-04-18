import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';
import Footer from '../components/Footer';
import { MovieAPI } from '../services/api';
import { Shield, Zap, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await MovieAPI.getAll();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
        // Fallback mock data if backend is not running
        setMovies([
          { id: 1, title: 'Pushpa 2: The Rule', genre: 'Action/Thriller', rating: 9.2, language: 'Telugu', posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2670&auto=format&fit=crop' },
          { id: 2, title: 'Kalki 2898 AD', genre: 'Sci-Fi/Action', rating: 8.9, language: 'Hindi', posterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop' },
          { id: 3, title: 'Leo', genre: 'Action/Crime', rating: 8.7, language: 'Tamil', posterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2670&auto=format&fit=crop' },
          { id: 4, title: 'Dune: Part Two', genre: 'Sci-Fi/Drama', rating: 9.0, language: 'English', posterUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2672&auto=format&fit=crop' },
        ]);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      
      <div style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <MovieGrid title="Now Showing" movies={movies} />
      </div>
      
      {/* Value Proposition */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(to bottom, transparent, rgba(225, 29, 72, 0.05))' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>The Ultimate Cinema Experience</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              From IMAX to 4DX, explore the most immersive ways to watch your favorite movies. 
              Exclusive offers, seamless bookings, and the best seats in the house.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: Shield, title: 'Secure Booking', desc: 'Verified theaters and secure payment gateways for a worry-free experience.' },
              { icon: Zap, title: 'Instant Confirmation', desc: 'Get your m-ticket instantly on your phone with no physical printing needed.' },
              { icon: Heart, title: 'Exclusive Rewards', desc: 'Earn points on every booking and redeem them for free tickets and popcorn.' },
            ].map((feature, i) => (
              <div key={i} className="glass-effect" style={{ padding: '2.5rem', borderRadius: '24px', transition: 'var(--transition)' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  background: 'var(--primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: 'white'
                }}>
                  <feature.icon size={30} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
