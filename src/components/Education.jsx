import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

const certifications = [
    {
        title: 'Meta Front-End Developer',
        issuer: 'Meta (Coursera)',
        date: 'Jun 2025',
        color: '#0ea5e9',
        bg: 'rgba(14,165,233,0.06)',
        border: 'rgba(14,165,233,0.2)',
        icon: '🏆',
    },
    {
        title: 'Intro to Frontend Development with React',
        issuer: 'Meta (Coursera)',
        date: 'Jan 2023',
        color: '#7c3aed',
        bg: 'rgba(124,58,237,0.06)',
        border: 'rgba(124,58,237,0.2)',
        icon: '⚛️',
    },
]

const coursework = [
    'Full Stack Web Development',
    'Mobile App Development',
    'Artificial Intelligence',
    'Data Science',
    'Database Systems',
    'Data Pre-processing',
    'Compiler Construction',
    'Visual Programming',
    'Parallel & Distributed Computing',
]

export default function Education() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="education" className="section" ref={ref} style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 52 }}
                >
                    <div className="section-badge">
                        <span className="section-badge-dot" />
                        Education
                    </div>
                    <h2 className="section-title">Education &amp; Certifications</h2>
                    <p className="section-subtitle">Academic background and professional credentials</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'start' }}>

                    {/* Left: Degree */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <div style={{ marginBottom: 10, fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Degree
                        </div>

                        <div
                            className="glass-card"
                            style={{
                                padding: '28px 32px',
                                background: 'rgba(0,212,255,0.04)',
                                borderColor: 'rgba(0,212,255,0.15)',
                                marginBottom: 32,
                            }}
                        >
                            {/* University header */}
                            <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', marginBottom: 20 }}>
                                <div style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 14,
                                    background: 'rgba(0,212,255,0.1)',
                                    border: '1px solid rgba(0,212,255,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.6rem',
                                    flexShrink: 0,
                                }}>
                                    🎓
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        color: 'var(--text-primary)',
                                        marginBottom: 4,
                                    }}>
                                        Bachelor in Computer Sciences
                                    </h3>
                                    <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8 }}>
                                        Air University
                                    </div>
                                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                            <FiMapPin size={12} /> Islamabad, Pakistan
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                                            <FiCalendar size={12} /> Sep 2021 – Jun 2025
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div style={{ height: 1, background: 'rgba(0,212,255,0.1)', marginBottom: 20 }} />

                            {/* Relevant Coursework */}
                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    marginBottom: 12,
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--text-muted)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                }}>
                                    <FiBook size={12} /> Relevant Coursework
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                                    {coursework.map((course) => (
                                        <motion.span
                                            key={course}
                                            whileHover={{ borderColor: 'rgba(0,212,255,0.4)', color: 'var(--accent-cyan)' }}
                                            style={{
                                                padding: '5px 12px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.07)',
                                                borderRadius: 50,
                                                fontSize: '0.75rem',
                                                color: 'var(--text-muted)',
                                                fontWeight: 500,
                                                cursor: 'default',
                                                transition: 'all 0.25s ease',
                                            }}
                                        >
                                            {course}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div style={{ marginBottom: 10, fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Certifications
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {certifications.map((cert, i) => (
                                <motion.div
                                    key={cert.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                                    className="glass-card"
                                    style={{
                                        padding: '20px 22px',
                                        background: cert.bg,
                                        borderColor: cert.border,
                                        display: 'flex',
                                        gap: 16,
                                        alignItems: 'center',
                                    }}
                                >
                                    <div style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 12,
                                        background: cert.bg,
                                        border: `1px solid ${cert.border}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.4rem',
                                        flexShrink: 0,
                                    }}>
                                        {cert.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            fontFamily: 'var(--font-display)',
                                            fontWeight: 700,
                                            fontSize: '0.9rem',
                                            color: 'var(--text-primary)',
                                            marginBottom: 4,
                                            lineHeight: 1.3,
                                        }}>
                                            {cert.title}
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
                                            <span style={{ color: cert.color, fontSize: '0.8rem', fontWeight: 600 }}>
                                                {cert.issuer}
                                            </span>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 4,
                                                color: 'var(--text-muted)',
                                                fontSize: '0.75rem',
                                                fontFamily: 'var(--font-mono)',
                                            }}>
                                                <FiAward size={11} /> {cert.date}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Skills highlight from resume */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.45 }}
                                className="glass-card"
                                style={{ padding: '20px 22px' }}
                            >
                                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                                    Languages &amp; Tools
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'Dart', 'Git', 'MySQL'].map(lang => (
                                        <span key={lang} style={{
                                            padding: '4px 10px',
                                            background: 'rgba(124,58,237,0.08)',
                                            border: '1px solid rgba(124,58,237,0.2)',
                                            borderRadius: 50,
                                            fontSize: '0.73rem',
                                            color: 'var(--text-secondary)',
                                            fontFamily: 'var(--font-mono)',
                                            fontWeight: 500,
                                        }}>
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #education .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    )
}
