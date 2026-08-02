import { useState } from 'react'
import { X, CheckCircle, Send } from 'lucide-react'

export default function MembershipModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: 'Interior Designer',
    tier: 'Hot Seat',
    company: '',
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(15, 30, 41, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          padding: '2.5rem',
          position: 'relative',
          background: '#FFFFFF',
          border: '1px solid rgba(30, 57, 79, 0.15)',
          borderRadius: '4px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-dark)',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle size={52} color="var(--teal)" style={{ margin: '0 auto 1.25rem' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '0.75rem' }}>Application Submitted</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you, {formData.name}! Our MODEX Trade Relations team will review your application for the <strong>{formData.tier}</strong> tier and get in touch within 24 hours.
            </p>
            <button className="btn-primary" onClick={() => { setSubmitted(false); onClose(); }}>
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="section-label" style={{ marginBottom: '0.4rem' }}>MODEX B2B Access</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--teal)' }}>Apply for Membership</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Join Hyderabad's premier production & trade hub for design professionals.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ar. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--warm-white)',
                    border: '1px solid rgba(30, 57, 79, 0.15)',
                    borderRadius: '2px',
                    color: 'var(--text-dark)',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font)',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--warm-white)',
                      border: '1px solid rgba(30, 57, 79, 0.15)',
                      borderRadius: '2px',
                      color: 'var(--text-dark)',
                      fontSize: '0.88rem',
                      fontFamily: 'var(--font)',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--warm-white)',
                      border: '1px solid rgba(30, 57, 79, 0.15)',
                      borderRadius: '2px',
                      color: 'var(--text-dark)',
                      fontSize: '0.88rem',
                      fontFamily: 'var(--font)',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    Profession *
                  </label>
                  <select
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--warm-white)',
                      border: '1px solid rgba(30, 57, 79, 0.15)',
                      borderRadius: '2px',
                      color: 'var(--text-dark)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font)',
                    }}
                  >
                    <option value="Interior Designer">Interior Designer</option>
                    <option value="Architect">Architect</option>
                    <option value="Builder / Contractor">Builder / Contractor</option>
                    <option value="Vendor / Supplier">Vendor / Supplier</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    Membership Tier *
                  </label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--warm-white)',
                      border: '1px solid rgba(30, 57, 79, 0.15)',
                      borderRadius: '2px',
                      color: 'var(--text-dark)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font)',
                    }}
                  >
                    <option value="Hot Seat">Hot Seat (₹9,999/mo)</option>
                    <option value="Dedicated Cabin">Dedicated Cabin (₹40,000/mo)</option>
                    <option value="Premium Partnership">Premium Partnership (₹80,000/mo)</option>
                    <option value="Production Partnership">Production Partnership (Custom)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Studio / Firm Name
                </label>
                <input
                  type="text"
                  placeholder="Design Studio Pvt Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--warm-white)',
                    border: '1px solid rgba(30, 57, 79, 0.15)',
                    borderRadius: '2px',
                    color: 'var(--text-dark)',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font)',
                  }}
                />
              </div>

              <button className="btn-primary" type="submit" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
                Submit Membership Application <Send size={15} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
