import { useLocation } from 'react-router-dom'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

export default function ServicePage({ onOpenModal }: { onOpenModal: () => void }) {
  const location = useLocation()
  
  // Format slug from path
  const pathParts = location.pathname.split('/').filter(Boolean)
  const serviceCategory = pathParts[1] ? pathParts[1].replace(/-/g, ' ') : 'Service'
  const serviceName = pathParts[2] ? pathParts[2].replace(/-/g, ' ') : 'Overview'

  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Header Badge */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="badge-tdv" style={{ textTransform: 'capitalize' }}>
            <Sparkles size={14} /> Our Services / {serviceCategory}
          </span>
        </div>

        {/* Title Section */}
        <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--teal)',
              textTransform: 'capitalize',
              marginBottom: '1rem',
            }}
          >
            {serviceName}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Comprehensive MODEX infrastructure & support tailored for {serviceName}. Content and detailed specifications for this service will be loaded here.
          </p>
        </div>

        {/* Placeholder Features Card */}
        <div
          className="tdv-card"
          style={{
            background: '#ffffff',
            padding: '2.5rem',
            borderRadius: '6px',
            border: '1px solid rgba(30, 57, 79, 0.12)',
            marginBottom: '3rem',
          }}
        >
          <h3 style={{ fontSize: '1.2rem', color: 'var(--teal)', marginBottom: '1.5rem', fontWeight: 700 }}>
            What MODEX Offers for {serviceName}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              'Premium Shared & Dedicated Facilities',
              'Integrated Logistics & Support',
              'Direct Access to Trade Network',
              'On-demand Team Expansion',
            ].map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--brass-dark)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 600 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="tdv-card-dark"
          style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', color: '#ffffff' }}>Explore {serviceName} at MODEX</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '550px', fontSize: '0.95rem' }}>
            Book a tour or connect with our team to learn more about how our {serviceCategory} solutions elevate your business operations.
          </p>
          <button className="btn-primary" onClick={onOpenModal}>
            Book a Tour <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
