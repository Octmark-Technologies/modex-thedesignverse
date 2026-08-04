import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Building, Factory, Compass, CheckCircle2, ChevronRight } from 'lucide-react'

const B = import.meta.env.BASE_URL

export default function HomePage({ onOpenModal }: { onOpenModal: () => void }) {
  const [activeTab, setActiveTab] = useState(0)

  const serviceCategories = [
    {
      title: 'Coworking',
      icon: <Building size={20} />,
      desc: 'Premium shared and private workspaces built for solo architects and expanding design studios.',
      items: [
        { name: 'Cabins', path: '/services/coworking/cabins' },
        { name: 'Hotseats', path: '/services/coworking/hotseats' },
      ],
    },
    {
      title: 'Experience Centre',
      icon: <Layers size={20} />,
      desc: 'Physical spaces to specify finishes, touch 10,000+ real samples, and host client presentations.',
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
      icon: <Factory size={20} />,
      desc: 'German modular manufacturing backing, material procurement, and shipping logistics.',
      items: [
        { name: 'Factory Support', path: '/services/production/factory-support' },
        { name: 'Procurement', path: '/services/production/procurement' },
        { name: 'Transportation', path: '/services/production/transportation' },
      ],
    },
    {
      title: 'Execution',
      icon: <Compass size={20} />,
      desc: 'Highly trained carpentry and assembly teams to ensure flawless modular installations.',
      items: [
        { name: 'Carpentry Teams', path: '/services/execution/carpentry-teams' },
      ],
    },
  ]

  return (
    <div style={{ paddingTop: '90px' }}>
      {/* Hero Section */}
      <section style={{ padding: '6rem 0 5rem', background: 'var(--warm-white)', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">The Production Ecosystem for Design Professionals</span>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--teal)',
                marginBottom: '1.5rem',
              }}
            >
              Scale Your Design Practice with <em style={{ color: 'var(--brass-dark)', fontStyle: 'italic' }}>Factory Precision</em> & Shared Infrastructure
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '740px',
                margin: '0 auto 2.5rem',
              }}
            >
              MODEX by The DesignVerse provides interior designers, architects, builders, and trade vendors with an 11,500 sq ft physical material lab, co-working suites, and turnkey manufacturing execution in Hyderabad.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={onOpenModal}>
                Apply for Membership <ArrowRight size={15} />
              </button>
              <Link to="/experience-centre" className="btn-outline">
                Book Space & Material Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services (New responsive & mobile-optimised) */}
      <section style={{ padding: '5rem 0', background: '#F8FAF7', borderBottom: '1px solid rgba(30, 57, 79, 0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">MODEX Infrastructure</span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--teal)', fontWeight: 700 }}>Our Services & Solutions</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
              Touch material libraries, occupy lockable studio cabins, and leverage modular factory assembly lines.
            </p>
          </div>

          {/* Desktop/Tablet Grid View */}
          <div className="services-desktop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {serviceCategories.map((cat, idx) => (
              <div
                key={cat.title}
                className="tdv-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#ffffff',
                  padding: '1.75rem',
                  border: '1px solid rgba(30, 57, 79, 0.08)',
                  borderRadius: '6px',
                  boxShadow: '0 4px 12px rgba(30, 57, 79, 0.02)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--teal)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      fontSize: '0.85rem',
                      letterSpacing: '0.05em',
                      marginBottom: '1rem',
                    }}
                  >
                    <span style={{ color: 'var(--brass-dark)' }}>{cat.icon}</span>
                    {cat.title}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    {cat.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(30, 57, 79, 0.06)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {cat.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.8rem',
                          color: 'var(--teal)',
                          fontWeight: 600,
                          padding: '0.3rem 0',
                          transition: 'color 0.2s',
                        }}
                        className="service-link"
                      >
                        {item.name}
                        <ChevronRight size={14} className="link-arrow" style={{ opacity: 0.6, transition: 'transform 0.2s' }} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Tab Switcher (Cuts scrolling) */}
          <div className="services-mobile-tabs" style={{ display: 'none' }}>
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                overflowX: 'auto',
                paddingBottom: '0.75rem',
                marginBottom: '1.25rem',
                scrollbarWidth: 'none',
              }}
            >
              {serviceCategories.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.6rem 1rem',
                    borderRadius: '20px',
                    border: activeTab === idx ? '1px solid var(--teal)' : '1px solid rgba(30, 57, 79, 0.12)',
                    background: activeTab === idx ? 'var(--teal)' : '#ffffff',
                    color: activeTab === idx ? '#ffffff' : 'var(--teal)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                  }}
                >
                  {cat.icon}
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Selected Category Content */}
            <div
              className="tdv-card"
              style={{
                background: '#ffffff',
                padding: '1.5rem',
                borderRadius: '6px',
                border: '1px solid rgba(30, 57, 79, 0.08)',
              }}
            >
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {serviceCategories[activeTab].desc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid rgba(30, 57, 79, 0.06)', paddingTop: '1rem' }}>
                {serviceCategories[activeTab].items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: 'var(--teal)',
                      fontWeight: 700,
                      padding: '0.5rem 0',
                    }}
                  >
                    {item.name}
                    <ChevronRight size={16} style={{ color: 'var(--brass-dark)' }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .service-link:hover {
            color: var(--brass-dark) !important;
          }
          .service-link:hover .link-arrow {
            transform: translateX(3px);
            color: var(--brass-dark);
          }
          @media (max-width: 991px) {
            .services-desktop-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            .services-desktop-grid {
              display: none !important;
            }
            .services-mobile-tabs {
              display: block !important;
            }
          }
        `}</style>
      </section>

      {/* Experience Centre Feature Banner */}
      <section style={{ padding: '4rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">Experience Centre · Jubilee Hills</span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--teal)', marginBottom: '1rem' }}>
                11,500 SQ FT Physical Specification Lounge
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Bring your clients to our flagship Experience Centre on Road No. 36, Jubilee Hills. Explore 10,000+ real material samples, live German modular kitchens, and sound-insulated presentation suites.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--teal)', fontSize: '1.4rem' }}>11,500</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>SQ FT Space</div>
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--teal)', fontSize: '1.4rem' }}>10,000+</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Material Samples</div>
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--teal)', fontSize: '1.4rem' }}>7 Days</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Open Weekly</div>
                </div>
              </div>
              <Link to="/experience-centre" className="btn-teal">
                Explore Experience Centre <ArrowRight size={15} />
              </Link>
            </div>

            <div
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 16px 36px rgba(30, 57, 79, 0.12)',
                height: '380px',
              }}
            >
              <img
                src={`${B}Images/Expereince-centre.png`}
                alt="The DesignVerse Experience Centre"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '3rem 0', background: 'var(--teal)', color: 'var(--warm-white)' }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--brass)' }}>11,500 SQ FT</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>Specification Hub</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF' }}>10,000+</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>Material Samples</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--brass)' }}>5,000+</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>Trade Vendor Network</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF' }}>1,500+</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>Trade Executions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quad Persona Portals */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">Trade Portals</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--teal)' }}>Built Specifically For Your Trade</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.5rem auto 0', lineHeight: 1.6 }}>
              Tailored operational solutions designed to solve the execution and sourcing bottlenecks of each discipline.
            </p>
          </div>

          <div className="grid-4">
            {/* Designers */}
            <div className="tdv-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '160px', overflow: 'hidden' }}>
                <img src={`${B}Images/ModBedroom.png`} alt="Interior Designers Portal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--teal)', marginBottom: '0.5rem' }}>Interior Designers</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Scale from 3 to 10 projects/month without adding operational overhead or manufacturing risk.
                </p>
                <Link to="/for-interior-designers" style={{ color: 'var(--teal)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  Explore Portal <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Architects */}
            <div className="tdv-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '160px', overflow: 'hidden' }}>
                <img src={`${B}Images/3D.png`} alt="Architects Portal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--teal)', marginBottom: '0.5rem' }}>Architects</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Access a dedicated material lab, technical specification zone, and reliable execution teams.
                </p>
                <Link to="/for-architects" style={{ color: 'var(--teal)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  Explore Portal <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Builders */}
            <div className="tdv-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '160px', overflow: 'hidden' }}>
                <img src={`${B}Images/ModKitchen.png`} alt="Builders & Contractors Portal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--teal)', marginBottom: '0.5rem' }}>Builders & Contractors</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Gain access to commercial project pipelines, factory-finish modular production, and material bulk rates.
                </p>
                <Link to="/for-builders-contractors" style={{ color: 'var(--teal)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  Explore Portal <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Vendors */}
            <div className="tdv-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '160px', overflow: 'hidden' }}>
                <img src={`${B}Images/material-lab.png`} alt="Vendors & Suppliers Portal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--teal)', marginBottom: '0.5rem' }}>Vendors & Suppliers</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Place your physical product samples directly in front of 500+ active architects and designers daily.
                </p>
                <Link to="/for-vendors" style={{ color: 'var(--teal)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  Explore Portal <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pricing Overview */}
      <section style={{ padding: '6rem 0', background: 'var(--warm-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">Transparent Pricing</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--teal)' }}>MODEX Membership Tiers</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Choose the co-working, specification, and manufacturing support tier that fits your growth stage.
            </p>
          </div>

          <div className="grid-3">
            {/* Hot Seat */}
            <div className="tdv-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ height: '160px', overflow: 'hidden' }}>
                  <img src={`${B}Images/Hot-seats.png`} alt="Hot Seats Workspace" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Hot Seat</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--teal)', marginBottom: '1.25rem' }}>
                    ₹9,999 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ month</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--teal)" /> Flexible Work Desk Access</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--teal)" /> 10,000+ Material Library Access</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--teal)" /> High-Speed Fiber Wi-Fi & Lounge</li>
                  </ul>
                </div>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <button className="btn-outline" onClick={onOpenModal} style={{ width: '100%', justifyContent: 'center' }}>
                  Select Hot Seat
                </button>
              </div>
            </div>

            {/* Dedicated Cabin */}
            <div className="tdv-card-dark" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2, background: 'var(--brass)', color: 'var(--teal)', fontSize: '0.65rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '2px', textTransform: 'uppercase' }}>
                Most Popular
              </div>
              <div>
                <div style={{ height: '160px', overflow: 'hidden' }}>
                  <img src={`${B}Images/Cabins.png`} alt="Dedicated Cabin Suite" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--brass)', marginBottom: '0.5rem' }}>Dedicated Cabin</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                    ₹40,000 <span style={{ fontSize: '0.85rem', opacity: 0.7, fontWeight: 400 }}>/ month</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'rgba(244, 247, 242, 0.8)', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brass)" /> Lockable Private Cabin Suite</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brass)" /> Client Presentation Pod Access</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--brass)" /> Priority Production Desk Access</li>
                  </ul>
                </div>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <button className="btn-primary" onClick={onOpenModal} style={{ width: '100%', justifyContent: 'center' }}>
                  Select Dedicated Cabin
                </button>
              </div>
            </div>

            {/* Premium Partnership */}
            <div className="tdv-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ height: '160px', overflow: 'hidden' }}>
                  <img src={`${B}Images/material-lab.png`} alt="Material Lab & Premium Partnership" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--brass-dark)', marginBottom: '0.5rem' }}>Premium Partnership</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--teal)', marginBottom: '1.25rem' }}>
                    ₹80,000 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ month</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--teal)" /> Full Suite + Factory Backing</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--teal)" /> Featured Material Showcase Booth</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={15} color="var(--teal)" /> Dedicated Project Manager</li>
                  </ul>
                </div>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <button className="btn-outline" onClick={onOpenModal} style={{ width: '100%', justifyContent: 'center' }}>
                  Select Premium Tier
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
