import { ArrowRight, CheckCircle2, Shield, Clock, FileCheck } from 'lucide-react'

const B = import.meta.env.BASE_URL

export default function ArchitectsPage({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem', background: 'var(--warm-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <span className="section-label">For Architects</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 700, color: 'var(--teal)', marginBottom: '1.25rem' }}>
            Your Reliable <em style={{ color: 'var(--brass-dark)', fontStyle: 'italic' }}>Turnkey Execution</em> & Technical Specification Partner
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Translate architectural drawings into millimeter-precise realities with our technical specification zone, certified trade fabricators, and structural engineering backing.
          </p>
        </div>

        {/* 3D Visualization Banner */}
        <div style={{ marginBottom: '5rem', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 16px 36px rgba(30, 57, 79, 0.12)', height: '400px' }}>
          <img src={`${B}Images/3D.png`} alt="Architectural 3D VR & Specification Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* 3 Value Propositions */}
        <div className="grid-3" style={{ marginBottom: '5rem' }}>
          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(206, 212, 129, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <FileCheck size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Specification Zone</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Review technical material data sheets, fire ratings, structural acoustic panels, and architectural hardware specifications in one dedicated hub.
            </p>
          </div>

          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(30, 57, 79, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <Shield size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Guaranteed Compliance</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              All joinery, glass facades, and interior fit-outs strictly adhere to IS standards with structural warranties backed by TDV.
            </p>
          </div>

          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(206, 212, 129, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <Clock size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>40% Faster Turnaround</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Off-site CNC manufacturing cuts site mess and reduces overall project completion schedules significantly.
            </p>
          </div>
        </div>

        {/* Architect Case Study */}
        <div className="tdv-card" style={{ padding: '3.5rem', marginBottom: '5rem' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge-tdv" style={{ marginBottom: '1rem' }}>Architectural Case Study</span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--teal)', marginBottom: '1rem' }}>
                "Cutting Commercial Fit-Out Timelines by 40% for Benchmark Towers"
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                "For our 18,000 sq ft commercial office project, MODEX managed off-site modular fabrication and material specifications. We handed over the site 45 days ahead of schedule with zero defect re-works."
              </p>
              <div style={{ fontWeight: 700, color: 'var(--teal)' }}>Ar. Vikramaditya Rao</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Principal Architect, V-Rao Associates</div>
            </div>

            <div style={{ background: 'var(--warm-white)', padding: '2rem', borderRadius: '4px', border: '1px solid rgba(30, 57, 79, 0.1)' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '1rem' }}>Project Metrics</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--teal)" /> 18,000 SQ FT Commercial Execution</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--teal)" /> 45 Days Time Saved via Off-site CNC</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--teal)" /> 100% CAD/CAM Spec Precision</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn-primary" onClick={onOpenModal}>
            Book Specification Tour <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
