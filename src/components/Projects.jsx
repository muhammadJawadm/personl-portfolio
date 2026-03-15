import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
    {
        id: 1,
        title: 'Pakistan Stock Intelligence Platform',
        category: 'Full Stack',
        tag: 'FinTech',
        tagColor: '#00d4ff',
        description: 'An advanced Pakistan Stock Exchange (PSX) intelligence platform delivering real-time stock tracking, deep market analytics, historical data exploration, broker comparisons, and a collaborative investor community in a modern analytics-driven environment.',
        tech: ['React', 'FastApi', 'MySQL', 'Socket.io', 'Chart.js', 'Tailwind CSS'],
        color: 'from-cyan-500 to-blue-600',
        icon: '📊',
        gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(14,165,233,0.08) 100%)',
        border: 'rgba(0,212,255,0.2)',
    },
    {
    id: 2,
    title: 'Mr-Tours — Complete Travel & Booking Platform',
    category: 'Full Stack',
    tag: 'TravelTech',
    tagColor: '#f59e0b',
    description: 'A full-featured travel and tours platform built with Next.js, offering AI-powered trip recommendations, real-time booking, secure payment integration, and a complete tour management system. Users can explore destinations, book tours, manage itineraries, and interact with a vibrant community of travelers. The platform is deployed for production with advanced analytics and scalable backend architecture.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'AI Recommendation System', 'AWS'],
    color: 'from-yellow-500 to-orange-600',
    icon: '✈️',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(249,115,22,0.08) 100%)',
    border: 'rgba(245,158,11,0.25)',
},
    {
    id: 3,
    title: 'Aura Music — Smart Music Streaming Platform',
    category: 'Mobile App',
    tag: 'Entertainment',
    tagColor: '#a855f7',
    description: 'A full-featured music streaming application built with Flutter that allows users to discover, stream, and manage their favorite music. The platform includes personalized playlists, smart recommendations, offline listening, artist profiles, and a modern audio player designed for a seamless and immersive music experience.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    color: 'from-purple-500 to-pink-600',
    icon: '🎵',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.08) 100%)',
    border: 'rgba(168,85,247,0.25)',
}
]

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [page, setPage] = useState(0)

    const visible = projects.slice(page * 3, page * 3 + 3)
    const totalPages = Math.ceil(projects.length / 3)

    return (
        <section id="projects" className="section" ref={ref} style={{ position: 'relative' }}>
            <div className="container">
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 16 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle" style={{ marginBottom: 0 }}>
                            A collection of digital products I designed, built, and shipped.
                        </p>
                    </motion.div>

                    {/* Arrow navigation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 }}
                        style={{ display: 'flex', gap: 10 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setPage(p => Math.max(0, p - 1))}
                            disabled={page === 0}
                            style={{
                                width: 42, height: 42, borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(255,255,255,0.04)',
                                color: page === 0 ? 'var(--text-muted)' : 'var(--text-primary)',
                                cursor: page === 0 ? 'not-allowed' : 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1rem',
                            }}
                        >
                            <FiArrowLeft />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                            disabled={page === totalPages - 1}
                            style={{
                                width: 42, height: 42, borderRadius: '50%',
                                border: '1px solid rgba(0,212,255,0.25)',
                                background: 'rgba(0,212,255,0.08)',
                                color: page === totalPages - 1 ? 'var(--text-muted)' : 'var(--accent-cyan)',
                                cursor: page === totalPages - 1 ? 'not-allowed' : 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1rem',
                            }}
                        >
                            <FiArrowRight />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Cards grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                    <AnimatePresence mode="wait">
                        {visible.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card"
                                style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
                            >
                                {/* Card image area */}
                                <div style={{
                                    height: 160,
                                    background: project.gradient,
                                    borderBottom: `1px solid ${project.border}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}>
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                        style={{ fontSize: '4rem' }}
                                    >
                                        {project.icon}
                                    </motion.div>
                                    {/* Top right tag */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 12,
                                        right: 12,
                                        padding: '4px 12px',
                                        borderRadius: 50,
                                        background: `${project.tagColor}20`,
                                        border: `1px solid ${project.tagColor}40`,
                                        color: project.tagColor,
                                        fontSize: '0.72rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.06em',
                                    }}>
                                        {project.tag}
                                    </div>
                                    {/* Bottom left category */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 12,
                                        left: 12,
                                        padding: '4px 10px',
                                        borderRadius: 50,
                                        background: 'rgba(0,0,0,0.4)',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                    }}>
                                        {project.category}
                                    </div>
                                </div>

                                {/* Card body */}
                                <div style={{ padding: 20 }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        marginBottom: 8,
                                        color: 'var(--text-primary)',
                                    }}>{project.title}</h3>
                                    <p style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '0.83rem',
                                        lineHeight: 1.65,
                                        marginBottom: 16,
                                    }}>{project.description}</p>

                                    {/* Tech tags */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                                        {project.tech.map(t => (
                                            <span key={t} style={{
                                                padding: '3px 10px',
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.07)',
                                                borderRadius: 50,
                                                fontSize: '0.73rem',
                                                color: 'var(--text-muted)',
                                                fontFamily: 'var(--font-mono)',
                                            }}>{t}</span>
                                        ))}
                                    </div>

                                    {/* Action links */}
                                    <div style={{ display: 'flex', gap: 12 }}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            style={{
                                                flex: 1,
                                                padding: '9px 0',
                                                background: `${project.tagColor}15`,
                                                border: `1px solid ${project.tagColor}30`,
                                                borderRadius: 8,
                                                color: project.tagColor,
                                                fontSize: '0.8rem',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                                            }}
                                        >
                                            <FiExternalLink size={13} /> Live Demo
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            style={{
                                                flex: 1,
                                                padding: '9px 0',
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                borderRadius: 8,
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.8rem',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                                            }}
                                        >
                                            <FiGithub size={13} /> Code
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          #projects .container > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          #projects .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    )
}
