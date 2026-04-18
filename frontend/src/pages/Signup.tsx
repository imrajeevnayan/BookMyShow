import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Signup: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '8rem 2rem 4rem',
        background: 'radial-gradient(circle at top right, rgba(225, 29, 72, 0.05), transparent 40%), radial-gradient(circle at bottom left, rgba(225, 29, 72, 0.05), transparent 40%)'
      }}>
        <div className="glass-effect animate-fade" style={{ 
          width: '100%', 
          maxWidth: '500px', 
          padding: '3rem', 
          borderRadius: '32px',
          boxShadow: 'var(--shadow-premium)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem', letterSpacing: '-1px' }}>Create Account</h1>
            <p style={{ color: 'var(--text-muted)' }}>Join thousands of cinema lovers today</p>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-muted)', marginLeft: '0.5rem' }}>Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  style={{ 
                    width: '100%', 
                    padding: '1rem 1rem 1rem 3.5rem', 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '16px', 
                    color: 'white',
                    outline: 'none',
                    transition: 'var(--transition)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-muted)', marginLeft: '0.5rem' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  style={{ 
                    width: '100%', 
                    padding: '1rem 1rem 1rem 3.5rem', 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '16px', 
                    color: 'white',
                    outline: 'none',
                    transition: 'var(--transition)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-muted)', marginLeft: '0.5rem' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  style={{ 
                    width: '100%', 
                    padding: '1rem 1rem 1rem 3.5rem', 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '16px', 
                    color: 'white',
                    outline: 'none',
                    transition: 'var(--transition)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem', marginLeft: '0.5rem' }}>
              <input type="checkbox" id="terms" style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }} />
              <label htmlFor="terms" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                I agree to the <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Terms of Service</Link> and <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Privacy Policy</Link>
              </label>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', borderRadius: '16px', justifyContent: 'center' }}>
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>OR SIGN UP WITH</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-glass" style={{ flex: 1, borderRadius: '16px', padding: '0.75rem' }}>
              <Globe size={18} />
              GitHub
            </button>
            <button className="btn-glass" style={{ flex: 1, borderRadius: '16px', padding: '0.75rem' }}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" width="18" height="18" alt="Google" />
              Google
            </button>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Already have an account? <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Sign in</Link>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Signup;
