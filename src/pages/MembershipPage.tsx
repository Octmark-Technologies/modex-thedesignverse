import { ArrowRight, CheckCircle2 } from 'lucide-react'

const B = import.meta.env.BASE_URL

export default function MembershipPage({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem', background: 'var(--warm-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <span className="section-label">Trade Membership & Pricing</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 700, color: 'var(--teal)', marginBottom: '1.25rem' }}>
            Choose Your <em style={{ color: 'var(--brass-dark)', fontStyle: 'italic' }}>MODEX Growth Tier</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Flexible co-working, specification lounge access, physical material library privileges, and turnkey manufacturing support.
          </p>
        </div>

        {/* 4 Tier Cards with Images */}
        <div className="grid-4" style={{ marginBottom: '5rem' }}>
          {/* Hot Seat */}
          <div className="tdv-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ height: '150px', overflow: 'hidden' }}>
                <img src={`${B}Images/Hot-seats.png`} alt="Hot Seats Setup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Hot Seat</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--teal)', marginBottom: '1rem' }}>
                  ₹9,999 <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ mo</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  Ideal for solo interior designers and freelance architects needing flexible workspace & material lab access.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Flexible Work Desk Access</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> 10,000+ Material Library Access</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> High-Speed Wi-Fi & Lounge</li>
                </ul>
              </div>
            </div>
            <div style={{ padding: '0 1.5rem 1.5rem' }}>
              <button className="btn-outline" onClick={onOpenModal} style={{ width: '100%', justifyContent: 'center' }}>
                Apply for Hot Seat
              </button>
            </div>
          </div>

          {/* Dedicated Cabin */}
          <div className="tdv-card-dark" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 2, background: 'var(--brass)', color: 'var(--teal)', fontSize: '0.6rem', fontWeight: 800, padding: '0.2rem 0.5rem', borderRadius: '2px', textTransform: 'uppercase' }}>
              Popular
            </div>
            <div>
              <div style={{ height: '150px', overflow: 'hidden' }}>
                <img src={`${B}Images/Cabins.png`} alt="Dedicated Cabin Suite" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--brass)', marginBottom: '0.5rem' }}>Dedicated Cabin</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
                  ₹40,000 <span style={{ fontSize: '0.8rem', opacity: 0.7, fontWeight: 400 }}>/ mo</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(244, 247, 242, 0.8)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  For growing design studios (2–4 team members) requiring private office space and client presentation pods.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: 'rgba(244, 247, 242, 0.8)', marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--brass)" /> Lockable Private Cabin Suite</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--brass)" /> Presentation Pod Access</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--brass)" /> Priority CNC Factory Backing</li>
                </ul>
              </div>
            </div>
            <div style={{ padding: '0 1.5rem 1.5rem' }}>
              <button className="btn-primary" onClick={onOpenModal} style={{ width: '100%', justifyContent: 'center' }}>
                Apply for Cabin
              </button>
            </div>
          </div>

          {/* Premium Partnership */}
          <div className="tdv-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ height: '150px', overflow: 'hidden' }}>
                <img src={`${B}Images/material-lab.png`} alt="Material Lab & Premium Showcase" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--brass-dark)', marginBottom: '0.5rem' }}>Premium Partnership</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--teal)', marginBottom: '1rem' }}>
                  ₹80,000 <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ mo</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  For established architectural practices and general contractors seeking full trade integration & showcase booth.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Dedicated Executive Suite</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Featured Showcase Booth</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Dedicated Project Manager</li>
                </ul>
              </div>
            </div>
            <div style={{ padding: '0 1.5rem 1.5rem' }}>
              <button className="btn-outline" onClick={onOpenModal} style={{ width: '100%', justifyContent: 'center' }}>
                Apply for Premium
              </button>
            </div>
          </div>

          {/* Production Partnership */}
          <div className="tdv-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ height: '150px', overflow: 'hidden' }}>
                <img src={`${B}Images/ModKitchen.png`} alt="Turnkey Modular Production" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '0.5rem' }}>Production Partner</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--teal)', marginBottom: '1rem' }}>
                  Custom Pricing
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  Turnkey manufacturing partnership for large-scale real estate builders, hotel chains, and retail franchises.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Dedicated Factory Line</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Customized Margin Structure</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> SLA Delivery Guarantees</li>
                </ul>
              </div>
            </div>
            <div style={{ padding: '0 1.5rem 1.5rem' }}>
              <button className="btn-outline" onClick={onOpenModal} style={{ width: '100%', justifyContent: 'center' }}>
                Inquire Production
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
