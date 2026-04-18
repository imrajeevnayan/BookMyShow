import React from 'react';
import MovieCard from './MovieCard';

interface MovieGridProps {
  title: string;
  movies: any[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ title, movies }) => {
  return (
    <section className="container" style={{ padding: '4rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem' }}>{title}</h2>
        <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>View All</a>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '2rem'
      }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;
