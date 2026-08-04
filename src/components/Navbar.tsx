import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight, Building2, Store, Factory, Hammer } from 'lucide-react'

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [personaDropdown, setPersonaDropdown] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobilePersonaOpen, setMobilePersonaOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setPersonaDropdown(false)
    setServicesDropdown(false)
  }, [location])

  const serviceCategories = [
    {
      title: 'Coworking',
      icon: <Building2 size={16} className="service-icon" />,
      items: [
        { name: 'Cabins', path: '/services/coworking/cabins' },
        { name: 'Hotseats', path: '/services/coworking/hotseats' },
      ],
    },
    {
      title: 'Experience Centre',
      icon: <Store size={16} className="service-icon" />,
      items: [
        { name: 'Kitchens', path: '/services/experience-centre/kitchens' },
        { name: 'Wardrobes', path: '/services/experience-centre/wardrobes' },
        { name: 'Textures & Samples', path: '/services/experience-centre/textures-samples' },
        { name: 'Hardware', path: '/services/experience-centre/hardware' },
        { name: 'Furniture', path: '/services/experience-centre/furniture' },
        { name: 'Decor', path: '/services/experience-centre/decor' },
        { name: 'Home Automation', path: '/services/experience-centre/home-automation' },
      ],
    },
    {
      title: 'Production',
      icon: <Factory size={16} className="service-icon" />,
      items: [
        { name: 'Factory Support', path: '/services/production/factory-support' },
        { name: 'Procurement', path: '/services/production/procurement' },
        { name: 'Transportation', path: '/services/production/transportation' },
      ],
    },
    {
      title: 'Execution',
      icon: <Hammer size={16} className="service-icon" />,
      items: [
        { name: 'Carpentry Teams', path: '/services/execution/carpentry-teams' },
      ],
    },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        right: '1rem',
        zIndex: 1000,
        borderRadius: '4px',
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(30, 57, 79, 0.12)',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '64px',
        }}
      >
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
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
          {/* Our Services Dropdown */}
          <div style={{ position: 'relative' }} onMouseLeave={() => setServicesDropdown(false)}>
            <button
              onMouseEnter={() => setServicesDropdown(true)}
              onClick={() => setServicesDropdown(!servicesDropdown)}
              style={{
                background: 'none',
                border: 'none',
                color: location.pathname.startsWith('/services') ? 'var(--teal)' : 'rgba(15, 30, 41, 0.75)',
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
              Our Services <ChevronDown size={14} style={{ transform: servicesDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {servicesDropdown && (
              <div
                className="services-megamenu"
                onMouseEnter={() => setServicesDropdown(true)}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-180px',
                  width: '880px',
                  maxWidth: 'calc(100vw - 40px)',
                  background: 'rgba(255, 255, 255, 0.99)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(30, 57, 79, 0.14)',
                  borderRadius: '6px',
                  padding: '1.25rem',
                  boxShadow: '0 20px 45px rgba(15, 30, 41, 0.14)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1.25rem',
                }}
              >
                {serviceCategories.map((cat) => (
                  <div key={cat.title} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--teal)',
                        paddingBottom: '0.4rem',
                        borderBottom: '1.5px solid rgba(206, 212, 129, 0.5)',
                      }}
                    >
                      {cat.icon}
                      {cat.title}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{
                            padding: '0.35rem 0.5rem',
                            borderRadius: '3px',
                            fontSize: '0.78rem',
                            color: 'rgba(15, 30, 41, 0.85)',
                            fontWeight: 500,
                            display: 'block',
                            transition: 'all 0.15s ease',
                          }}
                          className="dropdown-subitem"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

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
              For Professionals <ChevronDown size={14} style={{ transform: personaDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {personaDropdown && (
              <div
                onMouseEnter={() => setPersonaDropdown(true)}
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
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn-primary" onClick={onOpenModal} style={{ fontSize: '0.75rem', padding: '0.6rem 1.2rem' }}>
            Book your Tour <ArrowRight size={14} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--teal)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.25rem',
            }}
            className="mobile-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid rgba(30, 57, 79, 0.1)',
            padding: '1rem',
            background: '#ffffff',
            maxHeight: 'calc(85vh - 70px)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {/* Mobile Our Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: location.pathname.startsWith('/services') ? 'var(--teal)' : 'var(--text-dark)',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Our Services
              <ChevronDown size={16} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {mobileServicesOpen && (
              <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '0.75rem', borderLeft: '2px solid var(--brass)' }}>
                {serviceCategories.map((cat) => (
                  <div key={cat.title}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.35rem' }}>
                      {cat.title}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingLeft: '0.5rem' }}>
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile For Professionals Accordion */}
          <div>
            <button
              onClick={() => setMobilePersonaOpen(!mobilePersonaOpen)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: location.pathname.startsWith('/for-') ? 'var(--teal)' : 'var(--text-dark)',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              For Professionals
              <ChevronDown size={16} style={{ transform: mobilePersonaOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {mobilePersonaOpen && (
              <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid var(--brass)' }}>
                <Link to="/for-interior-designers" style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: 600 }}>Interior Designers</Link>
                <Link to="/for-architects" style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: 600 }}>Architects</Link>
                <Link to="/for-builders-contractors" style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: 600 }}>Builders & Contractors</Link>
                <Link to="/for-vendors" style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: 600 }}>Vendors & Suppliers</Link>
              </div>
            )}
          </div>

          <Link to="/membership" style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>Membership & Pricing</Link>
          <Link to="/experience-centre" style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>Experience Centre</Link>
          <a href="https://thedesignverse.co.in/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--brass-dark)' }}>Homeowner Site ↗</a>
        </div>
      )}

      <style>{`
        .dropdown-item:hover {
          background: rgba(30, 57, 79, 0.05);
          color: var(--teal) !important;
        }
        .dropdown-subitem:hover {
          background: rgba(30, 57, 79, 0.06);
          color: var(--teal) !important;
          padding-left: 0.75rem !important;
        }
        @media (max-width: 1200px) {
          .services-megamenu {
            width: 640px !important;
            left: -80px !important;
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .desktop-nav {
            gap: 1rem !important;
          }
        }
        @media (max-width: 1080px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  )
}

