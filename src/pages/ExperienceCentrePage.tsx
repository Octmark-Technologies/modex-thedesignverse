import { useState } from 'react'
import { ArrowRight, MapPin, ShieldCheck, Maximize2, Layers, Zap, Award } from 'lucide-react'

const B = import.meta.env.BASE_URL

const galleryImages = [
  { src: `${B}Images/Expereince-centre.png`, alt: 'Experience Centre Showcase' },
  { src: `${B}Images/Experiance-Center-1.jpg`, alt: 'Live Display Lounge' },
  { src: `${B}Images/Experiance-Center-2.jpg`, alt: 'Material Sampling Bay' },
  { src: `${B}Images/Experiance-Center-3.jpg`, alt: 'Specification Studio' },
  { src: `${B}Images/Experiance-Center-4.jpg`, alt: 'Client Presentation Suite' },
  { src: `${B}Images/Experiance-Center-5.jpg`, alt: 'Modular Kitchen Mockup' },
  { src: `${B}Images/Experiance-Center-6.jpg`, alt: 'Architectural Joinery Showcase' },
  { src: `${B}Images/Experiance-Center-7.jpg`, alt: 'Trade Co-working Suite' },
]

export default function ExperienceCentrePage({ onOpenModal }: { onOpenModal: () => void }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem', background: 'var(--warm-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
          <span className="section-label">Physical Infrastructure</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 700, color: 'var(--teal)', marginBottom: '1.25rem' }}>
            11,500 SQ FT <em style={{ color: 'var(--brass-dark)', fontStyle: 'italic' }}>Specification Hub</em> & Experience Centre
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Designed exclusively for trade professionals. Touch 10,000+ real material samples, review CAD specifications, host high-value clients, and access live modular mockup displays in Jubilee Hills.
          </p>
        </div>

        {/* Experience Centre Main Showcase Image */}
        <div style={{ marginBottom: '4rem' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(30, 57, 79, 0.12)',
              marginBottom: '1rem',
              height: '480px',
              background: '#e4e9e0',
            }}
          >
            <img
              src={galleryImages[activeImage].src}
              alt={galleryImages[activeImage].alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'all 0.4s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem 2rem',
                background: 'linear-gradient(to top, rgba(15, 30, 41, 0.85) 0%, transparent 100%)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{galleryImages[activeImage].alt}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>3rd Floor, Apurupa Towers, Road No. 36, Jubilee Hills, Hyderabad</div>
              </div>
              <span className="badge-brass">Photo {activeImage + 1} of {galleryImages.length}</span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '0.75rem' }}>
            {galleryImages.map((img, i) => (
              <button
                key={img.alt}
                onClick={() => setActiveImage(i)}
                style={{
                  border: activeImage === i ? '2px solid var(--teal)' : '1px solid rgba(30, 57, 79, 0.15)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  padding: 0,
                  cursor: 'pointer',
                  opacity: activeImage === i ? 1 : 0.65,
                  transition: 'all 0.2s ease',
                  height: '75px',
                }}
              >
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </button>
            ))}
          </div>
        </div>

        {/* 4 Core Features */}
        <div className="grid-4" style={{ marginBottom: '5rem' }}>
          <div className="tdv-card">
            <Maximize2 size={24} color="var(--teal)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--teal)', marginBottom: '0.5rem' }}>11,500 SQ FT Floor</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Sprawling experience floor with live installations and curated specification zones.
            </p>
          </div>

          <div className="tdv-card">
            <Layers size={24} color="var(--teal)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--teal)', marginBottom: '0.5rem' }}>10,000+ Material Samples</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Touch and feel veneers, quartz, acrylics, and hardware before specifying.
            </p>
          </div>

          <div className="tdv-card">
            <Zap size={24} color="var(--teal)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--teal)', marginBottom: '0.5rem' }}>3D VR Studio</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Walk clients through immersive 3D space renders before material purchasing.
            </p>
          </div>

          <div className="tdv-card">
            <Award size={24} color="var(--teal)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--teal)', marginBottom: '0.5rem' }}>Trade Support Team</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              On-floor technical experts available 7 days a week for specification guidance.
            </p>
          </div>
        </div>

        {/* Location Card */}
        <div className="tdv-card" style={{ padding: '3rem', marginBottom: '5rem', background: '#FFFFFF' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label" style={{ marginBottom: '0.5rem' }}>Hub Location</span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--teal)', marginBottom: '1rem' }}>
                Visit MODEX Experience HQ
              </h2>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={16} color="var(--teal)" /> 3rd Floor, Apurupa Towers, Road No. 36, Jubilee Hills, Hyderabad
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={16} color="var(--brass-dark)" /> Timings: Mon – Sun | 10:00 AM – 7:00 PM (Trade Access Only)
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button className="btn-primary" onClick={onOpenModal}>
                Schedule Specification Tour <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
