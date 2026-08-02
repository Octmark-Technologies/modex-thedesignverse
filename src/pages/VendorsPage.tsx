import { ArrowRight, Factory, Eye, TrendingUp, CheckCircle2 } from 'lucide-react'

export default function VendorsPage({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem', background: 'var(--warm-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <span className="section-label">For Vendors & Suppliers</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 700, color: 'var(--teal)', marginBottom: '1.25rem' }}>
            Put Your Products directly in front of <em style={{ color: 'var(--brass-dark)', fontStyle: 'italic' }}>500+ Active Architects</em> Daily
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Showcase your laminates, lighting fixtures, sanitaryware, or hardware inside MODEX's 11,500 sq ft Jubilee Hills Material Hub.
          </p>
        </div>

        {/* 3 Value Propositions */}
        <div className="grid-3" style={{ marginBottom: '5rem' }}>
          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(206, 212, 129, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <Eye size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Daily Trade Footfall</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Over 500+ interior designers, architects, and high-net-worth homeowners browse sample units and specify materials inside MODEX daily.
            </p>
          </div>

          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(30, 57, 79, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <TrendingUp size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Direct Specification Placement</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Your brand is embedded into MODEX's digital catalog & 3D visualization render libraries used by our network of interior designers.
            </p>
          </div>

          <div className="tdv-card">
            <div style={{ width: 42, height: 42, borderRadius: 3, background: 'rgba(206, 212, 129, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              <Factory size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--teal)', marginBottom: '0.75rem' }}>Automated Re-Ordering</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Receive direct purchase orders as soon as architects finalize specifications inside the MODEX Material Specification Zone.
            </p>
          </div>
        </div>

        {/* Vendor Tiers */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Partnership Options</span>
            <h2 style={{ fontSize: '2rem', color: 'var(--teal)' }}>Vendor Showcase Tiers</h2>
          </div>

          <div className="grid-3">
            <div className="tdv-card">
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Approved Vendor</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--teal)', marginBottom: '1rem' }}>Catalog Placement</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Digital Material Library Listing</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Direct Procurement Enquiries</li>
              </ul>
            </div>

            <div className="tdv-card" style={{ border: '1px solid var(--brass-dark)' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--brass-dark)', marginBottom: '0.5rem' }}>Partner Network</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--teal)', marginBottom: '1rem' }}>Physical Display Booth</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Dedicated Material Display Unit</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> QR-based Spec Sheets & QR Orders</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Monthly Trade Analytics Report</li>
              </ul>
            </div>

            <div className="tdv-card">
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '0.5rem' }}>Featured Partner</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--teal)', marginBottom: '1rem' }}>Flagship Experience</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Full Room Mockup Display</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Host Exclusive Launch Workshops</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--teal)" /> Preferred Brand Specification Status</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn-primary" onClick={onOpenModal}>
            Apply for Vendor Partner Display <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
