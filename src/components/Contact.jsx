import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiSend, FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin } from 'react-icons/fi'

const socialLinks = [
    { icon: FiMail, label: 'Email', value: 'muhammadjawadkanyal@gmail.com', href: 'mailto:muhammadjawadkanyal@gmail.com', color: '#00d4ff' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/muhammadjawadm', href: 'https://github.com/muhammadjawadm', color: '#e2e8f0' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/muhammad-jawadk/', href: 'https://linkedin.com/in/muhammad-jawadk/', color: '#0ea5e9' },
]

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    const handleSubmit = e => {
        e.preventDefault()
        const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
        window.open(`mailto:muhammadjawadkanyal@gmail.com?subject=${subject}&body=${body}`, '_blank')
        setSent(true)
        setTimeout(() => setSent(false), 4000)
        setForm({ name: '', email: '', message: '' })
    }

    const inputStyle = {
        width: '100%',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12,
        padding: '13px 16px',
        color: 'var(--text-primary)',
        fontSize: '0.92rem',
        outline: 'none',
        transition: 'border-color 0.25s, box-shadow 0.25s',
        fontFamily: 'var(--font-main)',
    }

    return (
        <section id="contact" className="section" ref={ref} style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 52 }}
                >
                    <div className="section-badge">
                        <span className="section-badge-dot" />
                        Get In Touch
                    </div>
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-subtitle">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40 }}>
                    {/* Left: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <div style={{
                            background: 'rgba(255,255,255,0.02)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: 20,
                            padding: '36px 32px',
                        }}>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                marginBottom: 8,
                                color: 'var(--text-primary)',
                            }}>Send a Message</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: 28, lineHeight: 1.65 }}>
                                Fill in your details below and I'll get back to you as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Muhammad Jawad"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            style={inputStyle}
                                            onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.06)' }}
                                            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            style={inputStyle}
                                            onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.06)' }}
                                            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Your Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                                        onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.06)' }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary"
                                    style={{ justifyContent: 'center', fontSize: '0.95rem', padding: '14px 0', borderRadius: 12 }}
                                >
                                    {sent ? '✅ Email Client Opened!' : <><FiSend /> Send Message</>}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right: Connect + Location */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
                    >
                        {/* Connect */}
                        <div style={{
                            background: 'rgba(255,255,255,0.02)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: 20,
                            padding: '28px 24px',
                        }}>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '1rem',
                                marginBottom: 20,
                                color: 'var(--text-primary)',
                            }}>Connect</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {socialLinks.map(({ icon: Icon, label, value, href, color }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 14,
                                            padding: '12px 14px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: 12,
                                            textDecoration: 'none',
                                            transition: 'all 0.25s ease',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.background = `${color}08` }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
                                    >
                                        <div style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: 10,
                                            background: `${color}15`,
                                            border: `1px solid ${color}25`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: color,
                                            fontSize: '1rem',
                                            flexShrink: 0,
                                        }}>
                                            <Icon />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 2 }}>{label}</div>
                                            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{value}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Current Location */}
                        <div style={{
                            background: 'rgba(255,255,255,0.02)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: 20,
                            padding: '24px',
                            overflow: 'hidden',
                        }}>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '1rem',
                                marginBottom: 16,
                                color: 'var(--text-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                            }}>
                                <FiMapPin color="var(--accent-cyan)" /> Current Location
                            </h3>

                            {/* Map placeholder */}
                            <div style={{
                                borderRadius: 12,
                                overflow: 'hidden',
                                height: 140,
                                background: 'linear-gradient(135deg, #0d1420, #1a2840)',
                                border: '1px solid rgba(255,255,255,0.07)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {/* Grid lines simulating a map */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: 'linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)',
                                    backgroundSize: '20px 20px',
                                }} />
                                {/* Location pin */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                    style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
                                >
                                    <div style={{ fontSize: '2rem' }}>📍</div>
                                    <div style={{
                                        marginTop: 4,
                                        padding: '4px 12px',
                                        background: 'rgba(0,0,0,0.6)',
                                        backdropFilter: 'blur(8px)',
                                        borderRadius: 8,
                                        fontSize: '0.72rem',
                                        color: 'var(--accent-cyan)',
                                        fontWeight: 600,
                                        border: '1px solid rgba(0,212,255,0.2)',
                                    }}>
                                        Pakistan 🇵🇰
                                    </div>
                                </motion.div>
                                {/* Ripple */}
                                <motion.div
                                    animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                                    style={{
                                        position: 'absolute',
                                        width: 36,
                                        height: 36,
                                        borderRadius: '50%',
                                        border: '1px solid rgba(0,212,255,0.4)',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: 12, textAlign: 'center' }}>
                                Open to remote work worldwide
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    )
}
