import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Armchair, ChevronLeft, CreditCard, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SeatSelection: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <main style={{ background: 'var(--bg-dark)', minHeight: '100vh', paddingBottom: '10rem' }}>
      <Navbar />
      
      <div className="container" style={{ paddingTop: '8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
          <button onClick={() => navigate(-1)} style={{ color: 'white', background: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, opacity: 0.8 }}>
            <ChevronLeft size={20} /> Back
          </button>
          
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', letterSpacing: '-1px', marginBottom: '0.5rem' }}>Pushpa 2: The Rule</h1>
            <p style={{ color: 'var(--text-muted)' }}>PVR: Vegas, Dwarka | Today, 07:30 PM</p>
          </div>
          
          <div style={{ width: '80px' }}></div> {/* Spacer */}
        </div>

        {/* Screen */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{
            width: '85%',
            height: '8px',
            background: 'linear-gradient(to right, transparent, var(--primary), transparent)',
            boxShadow: '0 15px 30px rgba(225, 29, 72, 0.5)',
            margin: '0 auto 1.5rem',
            borderRadius: '100%'
          }}></div>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '4px', fontWeight: 600 }}>SCREEN THIS WAY</span>
        </div>

        {/* Seat Grid */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem', 
          alignItems: 'center',
          padding: '2rem',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '32px',
          border: '1px solid var(--glass-border)'
        }}>
          {rows.map(row => (
            <div key={row} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ width: '2rem', color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.9rem' }}>{row}</span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {cols.map(col => {
                  const seatId = `${row}${col}`;
                  const isSelected = selectedSeats.includes(seatId);
                  const isOccupied = (row.charCodeAt(0) + col) % 6 === 0; // Better mock occupied

                  return (
                    <button
                      key={col}
                      disabled={isOccupied}
                      onClick={() => toggleSeat(seatId)}
                      title={seatId}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: isOccupied ? '#1e293b' : isSelected ? 'var(--primary)' : 'transparent',
                        border: isOccupied ? 'none' : isSelected ? 'none' : '1px solid var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'var(--transition)',
                        cursor: isOccupied ? 'not-allowed' : 'pointer',
                        transform: isSelected ? 'scale(1.1)' : 'scale(1)'
                      }}
                      className={!isOccupied ? "hover-scale" : ""}
                    >
                      <Armchair size={18} color={isOccupied ? '#475569' : (isSelected ? 'white' : 'var(--text-muted)')} />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '5rem' }}>
          {[
            { label: 'Available', color: 'transparent', border: '1px solid var(--glass-border)' },
            { label: 'Selected', color: 'var(--primary)', border: 'none' },
            { label: 'Occupied', color: '#1e293b', border: 'none' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: item.color, border: item.border }}></div>
              <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-muted)' }}>{item.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '3rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
          <Info size={14} />
          <span>Tickets once booked cannot be cancelled or refunded.</span>
        </div>
      </div>

      {/* Summary Footer bar */}
      {selectedSeats.length > 0 && (
        <div className="glass-effect animate-fade" style={{
          position: 'fixed',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(90%, 800px)',
          padding: '1.25rem 2.5rem',
          borderRadius: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: 'var(--shadow-premium)',
          zIndex: 1001,
          border: '1px solid rgba(225, 29, 72, 0.3)'
        }}>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{selectedSeats.length} Seats</div>
              <div style={{ maxHeight: '40px', overflowX: 'auto', display: 'flex', gap: '0.5rem', color: 'white', fontWeight: 600 }}>
                {selectedSeats.join(', ')}
              </div>
            </div>
            <div style={{ height: '40px', width: '1px', background: 'var(--glass-border)' }}></div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Total Amount</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>₹{selectedSeats.length * 280}</div>
            </div>
          </div>
          
          <button className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', borderRadius: '16px' }}>
            Proceed to Pay
            <CreditCard size={20} />
          </button>
        </div>
      )}
      
      <style>{`
        .hover-scale:hover {
          background: var(--primary-muted) !important;
          border-color: var(--primary) !important;
          transform: scale(1.15) translateY(-2px);
        }
      `}</style>
    </main>
  );
};

export default SeatSelection;
