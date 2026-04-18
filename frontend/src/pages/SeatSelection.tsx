import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Armchair } from 'lucide-react';

const SeatSelection: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  // Mock grid 10x15
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const cols = Array.from({ length: 15 }, (_, i) => i + 1);

  const toggleSeat = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <main style={{ background: '#020617', minHeight: '100vh', paddingBottom: '4rem' }}>
      <Navbar />
      
      <div className="container" style={{ paddingTop: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            width: '80%',
            height: '4px',
            background: 'linear-gradient(to right, transparent, var(--primary), transparent)',
            boxShadow: '0 10px 20px var(--primary)',
            margin: '0 auto 1rem',
            borderRadius: '100%'
          }}></div>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '2px' }}>SCREEN THIS WAY</span>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem', 
          alignItems: 'center' 
        }}>
          {rows.map(row => (
            <div key={row} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ width: '2rem', color: 'var(--text-muted)', fontWeight: 600 }}>{row}</span>
              {cols.map(col => {
                const seatId = `${row}${col}`;
                const isSelected = selectedSeats.includes(seatId);
                const isOccupied = col % 7 === 0; // Mock occupied

                return (
                  <button
                    key={col}
                    disabled={isOccupied}
                    onClick={() => toggleSeat(seatId)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      background: isOccupied ? '#1e293b' : isSelected ? 'var(--primary)' : 'transparent',
                      border: isOccupied ? 'none' : isSelected ? 'none' : '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'var(--transition)',
                      color: isOccupied ? '#475569' : 'white'
                    }}
                  >
                    <Armchair size={16} color={isOccupied ? '#475569' : (isSelected ? 'white' : 'var(--text-muted)')} />
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: '1px solid var(--glass-border)' }}></div>
            <span style={{ fontSize: '0.85rem' }}>Available</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--primary)' }}></div>
            <span style={{ fontSize: '0.85rem' }}>Selected</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#1e293b' }}></div>
            <span style={{ fontSize: '0.85rem' }}>Occupied</span>
          </div>
        </div>
      </div>

      {/* Summary Footer bar */}
      {selectedSeats.length > 0 && (
        <div className="glass-effect animate-fade" style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          padding: '1.5rem 2rem',
          borderRadius: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{selectedSeats.length} Seats Selected</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>₹{selectedSeats.length * 250}</div>
          </div>
          <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Pay Now
          </button>
        </div>
      )}
    </main>
  );
};

export default SeatSelection;
