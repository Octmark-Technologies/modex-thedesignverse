import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#f4f7f2', borderTop: '1px solid rgba(30, 57, 79, 0.1)', padding: '5rem 0 3rem' }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '3rem' }}>
          {/* Brand TEXT LOGO: MODEX by TDV */}
          <div>
            <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
              <div
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", Arial, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.3rem',
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
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--brass-dark)',
                  textTransform: 'uppercase',
                }}
              >
                by TDV
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font)', fontSize: '0.82rem', fontWeight: 400, color: 'rgba(15, 30, 41, 0.6)', lineHeight: 1.7, maxWidth: 280, marginBottom: '1.5rem' }}>
              Hyderabad's most comprehensive trade experience  , 11,500 sq ft specification centre, 10,000+ material samples, and end-to-end B2B project backing.
            </p>
            <div className="badge-tdv">
              <ShieldCheck size={14} /> Trade Only Ecosystem
            </div>
          </div>

          {/* Trade Portals */}
          <div>
            <div style={{ fontFamily: 'var(--font)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              Trade Portals
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.82rem', color: 'rgba(15, 30, 41, 0.6)' }}>
              <li><Link to="/for-interior-designers" style={{ color: 'inherit' }}>For Interior Designers</Link></li>
              <li><Link to="/for-architects" style={{ color: 'inherit' }}>For Architects</Link></li>
              <li><Link to="/for-builders-contractors" style={{ color: 'inherit' }}>For Builders & Contractors</Link></li>
              <li><Link to="/for-vendors" style={{ color: 'inherit' }}>For Vendors & Suppliers</Link></li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <div style={{ fontFamily: 'var(--font)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              B2B Ecosystem
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.82rem', color: 'rgba(15, 30, 41, 0.6)' }}>
              <li><Link to="/membership" style={{ color: 'inherit' }}>Membership Tiers</Link></li>
              <li><Link to="/experience-centre" style={{ color: 'inherit' }}>Specification Zone</Link></li>
              <li><Link to="/experience-centre" style={{ color: 'inherit' }}>Material Lab Access</Link></li>
              {/* <li><Link to="/community" style={{ color: 'inherit' }}>Events & Networking</Link></li> */}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <div style={{ fontFamily: 'var(--font)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1.25rem' }}>
              Contact MODEX
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.82rem', color: 'rgba(15, 30, 41, 0.6)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} color="var(--teal)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>3rd Floor, Apurupa Towers, Road No. 36, Jubilee Hills, Hyderabad, 500033</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="var(--teal)" />
                <a href="tel:+919182221363" style={{ color: 'inherit' }}>+91 91822 21363</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="var(--teal)" />
                <a href="mailto:modex@thedesignverse.co.in" style={{ color: 'inherit' }}>modex@thedesignverse.co.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(30, 57, 79, 0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'rgba(15, 30, 41, 0.4)',
          }}
        >
          <div>© {new Date().getFullYear()} The DesignVerse — MODEX. All rights reserved.</div>
          <div>B2B Production Ecosystem & Trade Hub</div>
        </div>
      </div>
    </footer>
  )
}
