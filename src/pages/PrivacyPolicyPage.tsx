import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: '#050B0E', minHeight: '100vh', color: '#F4F7F2', fontFamily: '"Outfit", sans-serif', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(206,212,129,0.1)', padding: '0.4rem 1rem', borderRadius: 99, marginBottom: '1.5rem', color: '#CED481', fontSize: '0.8rem', fontWeight: 600 }}>
            <Shield size={14} />
            Data Protection
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, margin: '0 0 1rem 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Privacy Policy</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(244,247,242,0.6)', marginBottom: '3rem', lineHeight: 1.6 }}>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div style={{ background: 'rgba(20, 38, 54, 0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#CED481', marginBottom: '0.75rem' }}>1. Information We Collect</h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(244,247,242,0.7)', lineHeight: 1.7, margin: 0 }}>
                We collect professional details including your name, company name, phone number, email address, and specific business requirements when you register for the Modex B2B Trade Portal or submit enquiries.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#CED481', marginBottom: '0.75rem' }}>2. How We Use Your Information</h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(244,247,242,0.7)', lineHeight: 1.7, margin: 0 }}>
                Your information is used strictly to verify your B2B credentials, provide access to trade pricing, facilitate manufacturing orders, and communicate important updates regarding your projects and our services. We do not sell or rent your business data to any third party.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#CED481', marginBottom: '0.75rem' }}>3. Data Storage and Security</h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(244,247,242,0.7)', lineHeight: 1.7, margin: 0 }}>
                Membership applications and project enquiries are securely stored within our internal systems. We retain this data as long as your B2B account remains active to provide continuous support and trade benefits. We employ robust security measures to safeguard your proprietary project details.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#CED481', marginBottom: '0.75rem' }}>4. Communications</h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(244,247,242,0.7)', lineHeight: 1.7, margin: 0 }}>
                By joining the Modex network, you consent to receive business communications from our team via phone, WhatsApp, or email regarding order status, material availability, and exclusive trade events. You can manage your communication preferences by contacting your dedicated account manager.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#CED481', marginBottom: '0.75rem' }}>5. Third-Party Services</h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(244,247,242,0.7)', lineHeight: 1.7, margin: 0 }}>
                We may use trusted third-party services for CRM and communication infrastructure. These services adhere to strict data protection standards and are only utilized to enhance your B2B experience with us.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#CED481', marginBottom: '0.75rem' }}>6. Contact Us</h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(244,247,242,0.7)', lineHeight: 1.7, margin: 0 }}>
                For any privacy-related concerns, account updates, or questions about this B2B policy, please email us at <strong>info@thedesignverse.co.in</strong> or call <strong>+91 95501 56644</strong>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
