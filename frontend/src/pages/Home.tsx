import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';
import { MovieAPI } from '../services/api';

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await MovieAPI.getAll();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
        // Fallback mock data for demo if backend is not running
        setMovies([
          { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8, language: 'English', posterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop' },
          { id: 2, title: 'The Dark Knight', genre: 'Action', rating: 9.0, language: 'English', posterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2670&auto=format&fit=crop' },
          { id: 3, title: 'Interstellar', genre: 'Adventure', rating: 8.7, language: 'English', posterUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2672&auto=format&fit=crop' },
          { id: 4, title: 'Dune: Part Two', genre: 'Sci-Fi', rating: 8.9, language: 'English', posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <MovieGrid title="Now Showing" movies={movies} />
      
      {/* Value Proposition */}
      <section className="glass-effect" style={{ margin: '4rem 0', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Ultimate Cinema Experience</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
            From IMAX to 4DX, explore the most immersive ways to watch your favorite movies. 
            Exclusive offers, seamless bookings, and the best seats in the house.
          </p>
        </div>
      </section>

      <footer className="container" style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p>© 2026 BookMyShow Clone. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
