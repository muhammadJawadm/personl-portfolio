import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiArrowRight, FiMail } from 'react-icons/fi'

const codeLines = [
    { indent: 0, text: 'const developer = {', color: '#e2e8f0' },
    { indent: 1, text: "  name: 'Muhammad Jawad',", color: '#7dd3fc' },
    { indent: 1, text: "  role: 'Full Stack Developer',", color: '#7dd3fc' },
    { indent: 1, text: "  stack: ['React', 'Node', 'Next.js'],", color: '#86efac' },
    { indent: 1, text: '  available: true,', color: '#fbbf24' },
    { indent: 0, text: '}', color: '#e2e8f0' },
    { indent: 0, text: '', color: '' },
    { indent: 0, text: 'developer.buildAmazing()', color: '#00d4ff' },
]

const Particle = ({ style }) => (
    <div style={{
        position: 'absolute',
        width: 3,
        height: 3,
        borderRadius: '50%',
        background: 'var(--accent-cyan)',
        animation: `particle-float ${3 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`,
        ...style,
    }} />
)

export default function Hero() {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${3 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 5}s`,
    }))

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    }
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    }

    return (
        <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 100 }}>
            {/* Particles */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {particles.map((p, i) => <Particle key={i} style={p} />)}
            </div>

            {/* Background orb */}
            <div style={{
                position: 'absolute',
                width: 800,
                height: 800,
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>
                {/* Left: Text content */}
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    {/* Badge */}
                    <motion.div variants={itemVariants} style={{ marginBottom: 24 }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '6px 16px',
                            background: 'rgba(0,212,255,0.06)',
                            border: '1px solid rgba(0,212,255,0.2)',
                            borderRadius: 50,
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: 'var(--accent-cyan)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                        }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'glow-pulse 2s ease-in-out infinite' }} />
                            Available for new projects
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1 variants={itemVariants} style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: 20,
                        letterSpacing: '-0.03em',
                    }}>
                        Muhammad{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #00d4ff 0%, #0ea5e9 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Jawad</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p variants={itemVariants} style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: 12,
                        letterSpacing: '0.01em',
                    }}>
                        Full Stack Developer | React &amp; Node Specialist
                    </motion.p>

                    {/* Description */}
                    <motion.p variants={itemVariants} style={{
                        fontSize: '1rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.7,
                        marginBottom: 36,
                        maxWidth: 480,
                    }}>
                        Building high-end digital experiences with modern tech stacks and futuristic aesthetics. Turning complex problems into elegant, scalable solutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                        <Link to="projects" smooth={true} duration={600} offset={-70}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn-primary"
                            >
                                View Projects <FiArrowRight />
                            </motion.button>
                        </Link>
                        <Link to="contact" smooth={true} duration={600} offset={-70}>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn-secondary"
                            >
                                <FiMail /> Get in Touch
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: 32, marginTop: 48 }}>
                        {[
                            { value: '2+', label: 'Years Exp.' },
                            { value: '10+', label: 'Projects' },
                            { value: '15K+', label: 'Users Served' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>{stat.value}</div>
                                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right: Code editor mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                    style={{ animation: 'float 6s ease-in-out infinite', position: 'relative' }}
                >
                    {/* Glow underneath */}
                    <div style={{
                        position: 'absolute',
                        inset: -20,
                        background: 'radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, transparent 70%)',
                        borderRadius: 28,
                        pointerEvents: 'none',
                    }} />

                    {/* Editor window */}
                    <div style={{
                        background: 'rgba(13,20,32,0.9)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 20,
                        overflow: 'hidden',
                        boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.08)',
                    }}>
                        {/* Title bar */}
                        <div style={{
                            padding: '14px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            background: 'rgba(255,255,255,0.03)',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                        }}>
                            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
                            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
                            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
                            <div style={{ flex: 1, textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                                developer.js
                            </div>
                        </div>
                        {/* Code lines */}
                        <div style={{ padding: '24px 24px 24px 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.9 }}>
                            {codeLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                                    style={{ display: 'flex', paddingLeft: 20 }}
                                >
                                    <span style={{ width: 32, color: 'var(--text-muted)', userSelect: 'none', textAlign: 'right', marginRight: 20, opacity: 0.5 }}>{i + 1}</span>
                                    <span style={{ color: line.color }}>{line.text}</span>
                                </motion.div>
                            ))}
                            {/* Cursor */}
                            <div style={{ display: 'flex', paddingLeft: 20, alignItems: 'center' }}>
                                <span style={{ width: 32, color: 'var(--text-muted)', textAlign: 'right', marginRight: 20, opacity: 0.5 }}>{codeLines.length + 1}</span>
                                <span style={{ display: 'inline-block', width: 9, height: 18, background: 'var(--accent-cyan)', animation: 'blink 1s ease-in-out infinite', borderRadius: 2 }} />
                            </div>
                        </div>
                    </div>

                    {/* Floating badge – bottom right */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                        style={{
                            position: 'absolute',
                            bottom: -16,
                            right: -16,
                            background: 'rgba(16,185,129,0.15)',
                            border: '1px solid rgba(16,185,129,0.3)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: 14,
                            padding: '10px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                        }}
                    >
                        <span style={{ fontSize: '1.2rem' }}>✅</span>
                        <div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981' }}>Build Success</div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>0 errors · 0 warnings</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                style={{
                    position: 'absolute',
                    bottom: 32,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                    color: 'var(--text-muted)',
                    fontSize: '0.75rem',
                }}
            >
                <span style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        width: 24, height: 36,
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: 12,
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: 6,
                    }}
                >
                    <div style={{ width: 4, height: 8, background: 'var(--accent-cyan)', borderRadius: 2 }} />
                </motion.div>
            </motion.div>

            <style>{`
        @media (max-width: 768px) {
          #hero .container { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
        </section>
    )
}
