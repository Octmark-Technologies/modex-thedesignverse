import { ArrowRight, Calendar, Award } from 'lucide-react'

export default function CommunityEventsPage({ onOpenModal }: { onOpenModal: () => void }) {
  const events = [
    {
      date: 'AUG 18, 2026',
      title: 'Architectural Lighting Specification Masterclass',
      speaker: 'Ar. Rajeshwar Rao (Design Studio)',
      desc: 'Deep dive into 2700K vs 4000K LED CCT tuning, glare indices, and smart home DALI protocols.',
    },
    {
      date: 'SEP 04, 2026',
      title: 'German Modular Joinery & Hardware Expo',
      speaker: 'Hettich & Blum Technical Team',
      desc: 'Hands-on hardware assembly, motorized push-to-open systems, and pocket door fittings.',
    },
    {
      date: 'SEP 22, 2026',
      title: 'Telangana Interior Trade & Vendor Summit 2026',
      speaker: 'MODEX Leadership & Panelists',
      desc: 'Exclusive networking night connecting 300+ architects with global building material vendors.',
    },
  ]

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem', background: 'var(--warm-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <span className="section-label">Events & Trade Network</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 700, color: 'var(--teal)', marginBottom: '1.25rem' }}>
            MODEX <em style={{ color: 'var(--brass-dark)', fontStyle: 'italic' }}>Community & Trade Summits</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Connect with leading architects, top-tier interior designers, structural consultants, and global building product manufacturers.
          </p>
        </div>

        {/* Upcoming Events */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '2rem' }}>
            Upcoming Masterclasses & Workshops
          </h2>

          <div className="grid-3">
            {events.map((ev) => (
              <div key={ev.title} className="tdv-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="badge-tdv" style={{ marginBottom: '1rem' }}>
                    <Calendar size={12} /> {ev.date}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--teal)' }}>
                    {ev.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--brass-dark)', fontWeight: 700, marginBottom: '1rem' }}>
                    {ev.speaker}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {ev.desc}
                  </p>
                </div>
                <button className="btn-outline" onClick={onOpenModal} style={{ width: '100%', justifyContent: 'center' }}>
                  RSVP for Workshop
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Community Highlights */}
        <div className="tdv-card" style={{ padding: '3.5rem', textAlign: 'center', background: '#FFFFFF' }}>
          <Award size={44} color="var(--teal)" style={{ margin: '0 auto 1.25rem' }} />
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '1rem' }}>
            Join Hyderabad's Fastest-Growing Design Network
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            MODEX is an ecosystem of 500+ design professionals who collaborate, share project leads, and scale their businesses together.
          </p>
          <button className="btn-primary" onClick={onOpenModal}>
            Apply for Community Access <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
