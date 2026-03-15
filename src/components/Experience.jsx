import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experience = [
    {
        id: 1,
        title: 'Full Stack Developer',
        company: 'Duseca Software',
        location: 'Islamabad, Pakistan',
        period: 'Nov 2025 – Present',
        current: true,
        description: 'Leading the development and architecture of scalable SaaS products. Scaled platform for 500k+ users with zero downtime deployments and microservice migration.',
        achievements: ['Led team of 5+ Projects', 'Platform scaled to 500k users', 'Reduced API latency by 60%'],
        color: '#00d4ff',
        bg: 'rgba(0,212,255,0.06)',
        border: 'rgba(0,212,255,0.15)',
    },
    {
        id: 2,
        title: 'Full Stack Developer',
        company: 'Neuron Solution',
        location: 'Remote - Pakistan',
        period: 'Mar 2025 – Present',
        current: false,
        description: 'Architected and led front-end modules for high-traffic e-commerce platform. Designed component library now is the driving mobile experience for the first time.',
        achievements: ['Built 40+ reusable components', 'Improved performance 45%', '99.9% uptime maintained'],
        color: '#7c3aed',
        bg: 'rgba(124,58,237,0.06)',
        border: 'rgba(124,58,237,0.15)',
    },
    {
        id: 3,
        title: 'Junior Web Developer',
        company: 'Freelance',
        location: 'Remote',
        period: 'Jun 2021 – Present',
        current: false,
        description: 'Experienced in front-end development, working with JavaScript, React, and Flutter to build robust applications across multiple platforms and languages.',
        achievements: ['20+ client projects', 'Full-stack delivery', 'WP & custom platforms'],
        color: '#10b981',
        bg: 'rgba(16,185,129,0.06)',
        border: 'rgba(16,185,129,0.15)',
    },
]

export default function Experience() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="experience" className="section" ref={ref} style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 52 }}
                >
                    <h2 className="section-title">Professional Experience</h2>
                    <p className="section-subtitle">My journey of building impactful products</p>
                </motion.div>

                {/* Timeline */}
                <div style={{ position: 'relative' }}>
                    {/* Vertical timeline line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        style={{
                            position: 'absolute',
                            left: 19,
                            top: 0,
                            bottom: 0,
                            width: 2,
                            background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple), var(--accent-green))',
                            opacity: 0.25,
                            transformOrigin: 'top',
                        }}
                    />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                        {experience.map((exp, i) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -40 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                style={{ display: 'flex', gap: 28 }}
                            >
                                {/* Timeline dot */}
                                <div style={{ position: 'relative', flexShrink: 0 }}>
                                    <motion.div
                                        animate={exp.current ? { scale: [1, 1.2, 1] } : {}}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            background: exp.bg,
                                            border: `2px solid ${exp.border}`,
                                            backdropFilter: 'blur(10px)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: exp.color,
                                            fontSize: '1rem',
                                            boxShadow: exp.current ? `0 0 20px ${exp.bg}` : 'none',
                                        }}
                                    >
                                        <FiBriefcase />
                                    </motion.div>
                                    {exp.current && (
                                        <div style={{
                                            position: 'absolute',
                                            top: -2,
                                            right: -2,
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            background: '#10b981',
                                            border: '2px solid var(--bg-primary)',
                                            animation: 'glow-pulse 2s ease-in-out infinite',
                                        }} />
                                    )}
                                </div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    className="glass-card"
                                    style={{
                                        flex: 1,
                                        padding: '24px 28px',
                                        background: exp.bg,
                                        borderColor: exp.border,
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                                        <div>
                                            <h3 style={{
                                                fontFamily: 'var(--font-display)',
                                                fontWeight: 700,
                                                fontSize: '1.05rem',
                                                color: 'var(--text-primary)',
                                                marginBottom: 4,
                                            }}>{exp.title}</h3>
                                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                                <span style={{ color: exp.color, fontWeight: 600, fontSize: '0.88rem' }}>{exp.company}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                                                    <FiMapPin size={12} /> {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 5,
                                                fontSize: '0.78rem',
                                                color: 'var(--text-muted)',
                                                fontFamily: 'var(--font-mono)',
                                                whiteSpace: 'nowrap',
                                            }}>
                                                <FiCalendar size={11} /> {exp.period}
                                            </span>
                                            {exp.current && (
                                                <span style={{
                                                    padding: '2px 10px',
                                                    background: 'rgba(16,185,129,0.12)',
                                                    border: '1px solid rgba(16,185,129,0.25)',
                                                    borderRadius: 50,
                                                    fontSize: '0.7rem',
                                                    color: '#10b981',
                                                    fontWeight: 600,
                                                }}>● Current</span>
                                            )}
                                        </div>
                                    </div>

                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 16, marginTop: 12 }}>
                                        {exp.description}
                                    </p>

                                    {/* Achievements */}
                                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                        {exp.achievements.map(a => (
                                            <span key={a} style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                padding: '4px 12px',
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.07)',
                                                borderRadius: 50,
                                                fontSize: '0.75rem',
                                                color: 'var(--text-muted)',
                                                fontWeight: 500,
                                            }}>✓ {a}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
