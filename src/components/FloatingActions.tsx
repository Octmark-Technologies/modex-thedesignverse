import { useState } from 'react'
import { Phone, MessageCircle, Calendar } from 'lucide-react'

export default function FloatingActions({ onOpenModal }: { onOpenModal: () => void }) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.75rem',
      }}
    >
      {/* Floating Tooltip */}
      {hovered && (
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(30, 57, 79, 0.15)',
            borderRadius: '4px',
            padding: '0.5rem 0.85rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            fontFamily: 'var(--font)',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: 'var(--teal)',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {hovered === 'whatsapp' && 'Chat with MODEX on WhatsApp'}
          {hovered === 'phone' && 'Call MODEX: +91 91822 21363'}
          {hovered === 'modal' && 'Book Tour & Apply for Access'}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        {/* Call Button */}
        <a
          href="tel:+919182221363"
          onMouseEnter={() => setHovered('phone')}
          onMouseLeave={() => setHovered(null)}
          aria-label="Call MODEX"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'var(--teal)',
            color: 'var(--brass)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(30, 57, 79, 0.3)',
            transition: 'all 0.2s ease',
            textDecoration: 'none',
          }}
        >
          <Phone size={20} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919182221363"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered('whatsapp')}
          onMouseLeave={() => setHovered(null)}
          aria-label="WhatsApp MODEX"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: '#25D366',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
            transition: 'all 0.2s ease',
            textDecoration: 'none',
          }}
        >
          <MessageCircle size={22} />
        </a>

        {/* Membership Application Float Pill */}
        <button
          onClick={onOpenModal}
          onMouseEnter={() => setHovered('modal')}
          onMouseLeave={() => setHovered(null)}
          className="btn-primary"
          style={{
            height: '46px',
            borderRadius: '23px',
            padding: '0 1.25rem',
            fontSize: '0.78rem',
            boxShadow: '0 8px 24px rgba(206, 212, 129, 0.4)',
          }}
        >
          <Calendar size={16} /> Book your Tour
        </button>
      </div>
    </div>
  )
}
