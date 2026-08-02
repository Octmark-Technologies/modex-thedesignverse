import { ArrowRight, Building, Factory, TrendingUp } from 'lucide-react'

export default function BuildersPage({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem', background: 'var(--warm-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <span className="section-label">For Builders & Contractors</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 700, color: 'var(--teal)', marginBottom: '1.25rem' }}>
            Win High-Value Projects & Execute with <em style={{ color: 'var(--brass-dark)', fontStyle: 'italic' }}>Bulk Material Backing</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            MODEX equips general contractors and commercial builders with direct factory pricing, project pipeline matching, and precision pre-laminated modular panels.
          </p>
        </div>

        {/* 3 Value Propositions */}
        <div className="grid-3" style={{ marginBottom: '5rem' }}>
          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(30, 57, 79, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <TrendingUp size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Project Pipeline Matching</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Get matched with vetted commercial interior contracts, villa fit-out tenders, and corporate workspace developments in Telangana & AP.
            </p>
          </div>

          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(206, 212, 129, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <Factory size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Bulk Trade Rates</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Source ply, hardware (Hettich/Blum), laminates, and acrylics at factory-direct bulk prices with guaranteed 48-hour site dispatch.
            </p>
          </div>

          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(30, 57, 79, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <Building size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Showroom Backing</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Bring your real estate clients to our 11,500 sq ft Jubilee Hills experience lounge as if it were your own flagship showroom.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn-primary" onClick={onOpenModal}>
            Apply for Builder Partner Access <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
