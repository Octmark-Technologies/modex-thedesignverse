import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [personaDropdown, setPersonaDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        right: '1rem',
        zIndex: 1000,
        borderRadius: '4px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(30, 57, 79, 0.12)',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* TEXT LOGO: MODEX by TDV */}
        <Link to="/" style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', textDecoration: 'none' }}>
          <div
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", Arial, sans-serif',
              fontWeight: 800,
              fontSize: '1.25rem',
              color: 'var(--teal)',
              lineHeight: 1.1,
              letterSpacing: '0.04em',
            }}
          >
            MODEX
          </div>
          <div
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", Arial, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--brass-dark)',
              textTransform: 'uppercase',
            }}
          >
            by TDV
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          <Link
            to="/"
            style={{
              color: location.pathname === '/' ? 'var(--teal)' : 'rgba(15, 30, 41, 0.75)',
              fontSize: '0.82rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Home
          </Link>

          {/* Persona Dropdown */}
          <div style={{ position: 'relative' }} onMouseLeave={() => setPersonaDropdown(false)}>
            <button
              onMouseEnter={() => setPersonaDropdown(true)}
              onClick={() => setPersonaDropdown(!personaDropdown)}
              style={{
                background: 'none',
                border: 'none',
                color: location.pathname.startsWith('/for-') ? 'var(--teal)' : 'rgba(15, 30, 41, 0.75)',
                fontSize: '0.82rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer',
                padding: '0.5rem 0',
                fontFamily: 'var(--font)',
              }}
            >
              For Professionals <ChevronDown size={14} />
            </button>

            {personaDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '260px',
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(30, 57, 79, 0.12)',
                  borderRadius: '4px',
                  padding: '0.5rem',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                }}
              >
                <Link
                  to="/for-interior-designers"
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '3px',
                    fontSize: '0.82rem',
                    color: 'var(--teal)',
                    display: 'block',
                  }}
                  className="dropdown-item"
                >
                  <div style={{ fontWeight: 700 }}>Interior Designers</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Scale ops & production</div>
                </Link>

                <Link
                  to="/for-architects"
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '3px',
                    fontSize: '0.82rem',
                    color: 'var(--teal)',
                    display: 'block',
                  }}
                  className="dropdown-item"
                >
                  <div style={{ fontWeight: 700 }}>Architects</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Material lab & specs</div>
                </Link>

                <Link
                  to="/for-builders-contractors"
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '3px',
                    fontSize: '0.82rem',
                    color: 'var(--teal)',
                    display: 'block',
                  }}
                  className="dropdown-item"
                >
                  <div style={{ fontWeight: 700 }}>Builders & Contractors</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Win & execute projects</div>
                </Link>

                <Link
                  to="/for-vendors"
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '3px',
                    fontSize: '0.82rem',
                    color: 'var(--teal)',
                    display: 'block',
                  }}
                  className="dropdown-item"
                >
                  <div style={{ fontWeight: 700 }}>Vendors & Suppliers</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Daily trade exposure</div>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/membership"
            style={{
              color: location.pathname === '/membership' ? 'var(--teal)' : 'rgba(15, 30, 41, 0.75)',
              fontSize: '0.82rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Membership & Pricing
          </Link>

          <Link
            to="/experience-centre"
            style={{
              color: location.pathname === '/experience-centre' ? 'var(--teal)' : 'rgba(15, 30, 41, 0.75)',
              fontSize: '0.82rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Experience Centre
          </Link>

          <a
            href="https://thedesignverse.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--brass-dark)',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}
          >
            Homeowner Site ↗
          </a>

          {/* <Link
            to="/community"
            style={{
              color: location.pathname === '/community' ? 'var(--teal)' : 'rgba(15, 30, 41, 0.75)',
              fontSize: '0.82rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Events & Community
          </Link> */}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn-primary" onClick={onOpenModal} style={{ fontSize: '0.75rem', padding: '0.6rem 1.2rem' }}>
            Book your Tour <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--teal)',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <style>{`
        .dropdown-item:hover {
          background: rgba(30, 57, 79, 0.05);
          color: var(--teal) !important;
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  )
}
