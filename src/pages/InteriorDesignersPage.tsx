import { ArrowRight, CheckCircle2, Zap, Layers, Users, TrendingUp, ShieldCheck } from 'lucide-react'

export default function InteriorDesignersPage({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem', background: 'var(--warm-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <span className="section-label">For Interior Designers</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 700, color: 'var(--teal)', marginBottom: '1.25rem' }}>
            Scale Your Design Studio <em style={{ color: 'var(--brass-dark)', fontStyle: 'italic' }}>Without Hiring</em> Extra Operations Staff
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Focus 100% on creative concept design while MODEX handles site execution, 10,000+ material sampling, factory-finish modular production, and vendor logistics.
          </p>
        </div>

        {/* 3 Value Propositions */}
        <div className="grid-3" style={{ marginBottom: '5rem' }}>
          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(30, 57, 79, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <Zap size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Factory-Finish Execution</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Deliver precision German modular cabinetry, wardrobes, and custom metalwork manufactured backed by our state-of-the-art facility.
            </p>
          </div>

          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(206, 212, 129, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <Layers size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Physical Material Lab</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Host clients at our Jubilee Hills Experience Centre with 10,000+ tactile material samples, mood board tables, and VR walkthrough suites.
            </p>
          </div>

          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(30, 57, 79, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <Users size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Dedicated Project Backing</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Get a dedicated MODEX project manager on site to handle vendor coordination, quality checks, and client site updates.
            </p>
          </div>
        </div>

        {/* Case Study Feature */}
        <div className="tdv-card" style={{ padding: '3.5rem', marginBottom: '5rem' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge-brass" style={{ marginBottom: '1rem' }}>Success Story</span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--teal)', marginBottom: '1rem' }}>
                "How Studio Aura Scaled from 3 to 9 Luxury Projects Monthly"
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                "Before MODEX, 70% of my week went into vendor chasing and material sampling. Joining MODEX gave me a 10,000-sample material lab in Jubilee Hills and factory execution support. My design capacity tripled in 4 months."
              </p>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--teal)' }}>Priya Sharma</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Lead Designer, Studio Aura</div>
              </div>
            </div>

            <div style={{ background: 'var(--warm-white)', padding: '2rem', borderRadius: '4px', border: '1px solid rgba(30, 57, 79, 0.1)' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '1rem' }}>Impact Summary</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><TrendingUp size={16} color="var(--teal)" /> 200% Increase in Monthly Project Volume</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--teal)" /> Zero Additional In-house Hires Needed</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} color="var(--teal)" /> 100% On-time Site Delivery Guaranteed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn-primary" onClick={onOpenModal}>
            Apply for Designer Membership <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
