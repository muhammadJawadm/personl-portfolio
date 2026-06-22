import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    SiNextdotjs, SiVuedotjs, SiTypescript, SiExpress, SiMongodb,
    SiMysql, SiTailwindcss, SiDocker, SiNodedotjs,
    SiFlutter
} from 'react-icons/si'
import { FaAws } from "react-icons/fa";

import { FiDownload } from 'react-icons/fi'
import { label } from 'framer-motion/client'

const techStack = [
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: SiVuedotjs, label: 'React.js' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: SiExpress, label: 'Express' },
    { icon: SiMongodb, label: 'MongoDB' },
    { icon: SiNodedotjs, label: 'Node.js' },
    { icon: SiFlutter, label: 'Flutter' },
]
const dbStack = [
    { icon: SiMysql, label: 'MySql' },
    { icon: SiTailwindcss, label: 'TailwindCSS' },
    { icon: SiDocker, label: 'Docker' },
    {icon: FaAws, label: 'AWS'},
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="section" ref={ref} style={{ position: 'relative' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.4fr',
                    gap: 80,
                    alignItems: 'center',
                }}>
                    {/* Left: Profile image */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ position: 'relative' }}
                    >
                        {/* Decorative ring */}
                        <div style={{
                            position: 'absolute',
                            inset: -12,
                            borderRadius: 24,
                            background: 'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(124,58,237,0.3), transparent)',
                            zIndex: 0,
                        }} />
                        <div style={{
                            position: 'relative',
                            zIndex: 1,
                            borderRadius: 18,
                            overflow: 'hidden',
                            background: 'linear-gradient(135deg, #0d1420 0%, #1a2840 100%)',
                            border: '1px solid rgba(0,212,255,0.15)',
                            aspectRatio: '4/5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {/* Placeholder profile silhouette */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 16,
                                padding: 40,
                            }}>
                                <div style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))',
                                    border: '2px solid rgba(0,212,255,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                }}>
                                    👨‍💻
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 4 }}>Muhammad Jawad</div>
                                    <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600 }}>Full Stack Developer</div>
                                </div>
                                {/* Floating skill dots */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                    style={{
                                        display: 'flex',
                                        gap: 8,
                                        marginTop: 8,
                                    }}
                                >
                                    {['#00d4ff', '#7c3aed', '#10b981', '#f59e0b'].map((c, i) => (
                                        <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8 }} />
                                    ))}
                                </motion.div>
                            </div>

                            {/* Corner glow */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: 120,
                                background: 'linear-gradient(to top, rgba(0,212,255,0.08), transparent)',
                                pointerEvents: 'none',
                            }} />
                        </div>

                        {/* Floating card – experience */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : {}}
                            transition={{ delay: 0.6, type: 'spring', stiffness: 180 }}
                            style={{
                                position: 'absolute',
                                top: -16,
                                right: -24,
                                background: 'rgba(0,212,255,0.08)',
                                border: '1px solid rgba(0,212,255,0.2)',
                                backdropFilter: 'blur(16px)',
                                borderRadius: 14,
                                padding: '12px 16px',
                                textAlign: 'center',
                                zIndex: 2,
                            }}
                        >
                            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>2+</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Years Exp.</div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Bio */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <motion.div variants={itemVariants}>
                            <div className="section-badge">
                                <span className="section-badge-dot" />
                                About Me
                            </div>
                            <h2 className="section-title">
                                The <span style={{
                                    background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>Visionary</span> Behind the Code
                            </h2>
                        </motion.div>

                        <motion.p variants={itemVariants} style={{
                            color: 'var(--text-secondary)',
                            lineHeight: 1.85,
                            fontSize: '1rem',
                            marginBottom: 20,
                        }}>
                            I'm a passionate Full Stack Developer with 2+ years of experience crafting scalable web applications. Based in Islamabad and working globally — I combine deep technical skill with an eye for design to build products that feel as good as they perform.
                        </motion.p>

                        <motion.p variants={itemVariants} style={{
                            color: 'var(--text-secondary)',
                            lineHeight: 1.85,
                            fontSize: '1rem',
                            marginBottom: 32,
                        }}>
                            Specialized in modern JavaScript ecosystems, cloud infrastructure, and real-time systems. I transform complex business requirements into elegant, high-performance applications that scale — from startup MVPs to production platforms serving thousands of users.
                        </motion.p>

                        {/* Tech stack */}
                        <motion.div variants={itemVariants} style={{ marginBottom: 16 }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                                Primary Stack
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {techStack.map(({ icon: Icon, label }) => (
                                    <motion.div
                                        key={label}
                                        whileHover={{ scale: 1.08, borderColor: 'var(--accent-cyan)' }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 7,
                                            padding: '7px 14px',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: 50,
                                            fontSize: '0.83rem',
                                            fontWeight: 600,
                                            color: 'var(--text-secondary)',
                                            cursor: 'default',
                                            transition: 'all 0.25s ease',
                                        }}
                                    >
                                        <Icon size={15} color="var(--accent-cyan)" />
                                        {label}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} style={{ marginBottom: 36 }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                                Database &amp; Cloud
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {dbStack.map(({ icon: Icon, label }) => (
                                    <motion.div
                                        key={label}
                                        whileHover={{ scale: 1.08 }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 7,
                                            padding: '7px 14px',
                                            background: 'rgba(124,58,237,0.08)',
                                            border: '1px solid rgba(124,58,237,0.2)',
                                            borderRadius: 50,
                                            fontSize: '0.83rem',
                                            fontWeight: 600,
                                            color: 'var(--text-secondary)',
                                            cursor: 'default',
                                            transition: 'all 0.25s ease',
                                        }}
                                    >
                                        <Icon size={15} color="#7c3aed" />
                                        {label}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <motion.a
                                href="/Muhammad_Jawad_Resume.pdf"
                                download="Muhammad_Jawad_Resume.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn-primary"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
                            >
                                <FiDownload /> Download Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
        </section>
    )
}
