import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
    {
        category: 'Frontend & Architecture',
        level: 95,
        color: '#00d4ff',
        glow: 'rgba(0,212,255,0.4)',
    },
    {
        category: 'Backend Systems',
        level: 88,
        color: '#0ea5e9',
        glow: 'rgba(14,165,233,0.4)',
    },
    {
        category: 'Database Design',
        level: 82,
        color: '#7c3aed',
        glow: 'rgba(124,58,237,0.4)',
    },
    {
        category: 'DevOps & Cloud',
        level: 75,
        color: '#10b981',
        glow: 'rgba(16,185,129,0.4)',
    },
]

function SkillBar({ skill, index, inView }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            style={{ marginBottom: 28 }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
            }}>
                <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                }}>
                    {skill.category}
                </span>
                <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: skill.color,
                    fontFamily: 'var(--font-mono)',
                }}>
                    {skill.level}%
                </span>
            </div>

            {/* Glassmorphic track */}
            <div style={{
                height: 10,
                borderRadius: 50,
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.07)',
                overflow: 'hidden',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
                position: 'relative',
            }}>
                {/* Animated fill bar */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.12, ease: 'easeOut' }}
                    style={{
                        height: '100%',
                        borderRadius: 50,
                        background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                        boxShadow: `0 0 12px ${skill.glow}, 0 0 24px ${skill.glow}60`,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Shimmer overlay on bar */}
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2.5, delay: 1.2 + index * 0.12, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                        }}
                    />
                </motion.div>

                {/* Endpoint dot */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.12, type: 'spring', stiffness: 300 }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        left: `calc(${skill.level}% - 6px)`,
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        background: skill.color,
                        border: '2px solid rgba(6,11,20,0.8)',
                        boxShadow: `0 0 10px ${skill.glow}`,
                    }}
                />
            </div>
        </motion.div>
    )
}

export default function Skills() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="skills" className="section" ref={ref} style={{ position: 'relative' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 80,
                    alignItems: 'start',
                }}>
                    {/* Left: Skills */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="section-title">Technical Proficiency</h2>
                            <p className="section-subtitle">
                                My core competencies and areas of expertise
                            </p>
                        </motion.div>

                        {/* Glass container for bars */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: 20,
                                padding: '32px 28px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                            }}
                        >
                            {skills.map((skill, i) => (
                                <SkillBar key={skill.category} skill={skill} index={i} inView={inView} />
                            ))}

                            {/* Bottom glow line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={inView ? { scaleX: 1 } : {}}
                                transition={{ duration: 1, delay: 0.8 }}
                                style={{
                                    height: 1,
                                    background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
                                    marginTop: 8,
                                    transformOrigin: 'left',
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Right: Professional Experience (preview) — will be full section below */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            <h2 className="section-title">Tech Highlights</h2>
                            <p className="section-subtitle">What I bring to the table</p>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {[
                                { icon: '⚡', title: 'Performance First', desc: 'Optimizing Core Web Vitals, lazy loading, and caching strategies to deliver sub-second load times.' },
                                { icon: '🌍', title: 'Global Scale', desc: 'Designed microservice architectures serving 1M+ concurrent users across 40+ countries.' },
                                { icon: '🔒', title: 'Security Expert', desc: 'JWT/OAuth2 auth, CSP headers, rate limiting, and OWASP Top 10 mitigation in every project.' },
                                { icon: '🤖', title: 'AI Integration', desc: 'Integrating LLMs (GPT, Gemini) and ML pipelines into production-grade web applications.' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                    className="glass-card"
                                    style={{ padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}
                                >
                                    <div style={{
                                        fontSize: '1.5rem',
                                        width: 44,
                                        height: 44,
                                        borderRadius: 12,
                                        background: 'rgba(0,212,255,0.08)',
                                        border: '1px solid rgba(0,212,255,0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: 4 }}>{item.title}</div>
                                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #skills .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
        </section>
    )
}
