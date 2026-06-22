import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
    {
        id: 1,
        title: 'UnSmoked — Smoking Cessation Platform',
        category: 'Full Stack',
        tag: 'HealthTech',
        tagColor: '#10b981',
        description: 'Full-stack admin dashboard + REST API for a smoking cessation app with 15,000+ active users. Features streak tracking, medals/rewards, community moderation, challenge management, and deep engagement analytics.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'OpenAI', 'JWT'],
        icon: '🚭',
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(20,184,166,0.08) 100%)',
        border: 'rgba(16,185,129,0.2)',
        live: 'https://unsmoked.vercel.app',
        github: 'https://github.com/muhammadjawadm/Un_Smoked',
    },
    {
        id: 2,
        title: 'Prvyn — Luxury Car Booking Platform',
        category: 'Full Stack',
        tag: 'TransportTech',
        tagColor: '#f59e0b',
        description: 'Full-stack luxury car booking platform for the U.S. market with separate dashboards for admins, riders, and drivers. Secure Stripe payments, real-time rider-driver chat via Socket.io, live GPS tracking, and complete booking & scheduling management.',
        tech: ['React', 'Node.js', 'Express', 'Socket.io', 'Stripe', 'Leaflet Maps', 'MongoDB'],
        icon: '🚗',
        gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(251,191,36,0.08) 100%)',
        border: 'rgba(245,158,11,0.25)',
        live: 'https://limo-services-rho.vercel.app',
        github: 'https://github.com/muhammadjawadm/limo_services',
    },
    {
        id: 3,
        title: 'Routage — 3D Interactive Web Experience',
        category: 'Frontend',
        tag: '3D / WebGL',
        tagColor: '#00d4ff',
        description: 'An immersive 3D web experience built with Next.js, React Three Fiber, and GSAP. Features postprocessing effects, smooth Lenis scroll, and high-performance 3D visuals — pushing the limits of what runs in a browser.',
        tech: ['Next.js', 'Three.js', 'React Three Fiber', 'GSAP', 'Framer Motion', 'TypeScript'],
        icon: '🌐',
        gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(14,165,233,0.08) 100%)',
        border: 'rgba(0,212,255,0.2)',
        live: 'https://routage-inky.vercel.app',
        github: 'https://github.com/muhammadjawadm/routage',
    },
    {
        id: 4,
        title: 'HeroLikeMe — Community Heroes Platform',
        category: 'Full Stack',
        tag: 'Social Good',
        tagColor: '#a855f7',
        description: 'A platform empowering community heroes and volunteers. Features CKEditor 5 rich content creation, interactive Chart.js visualizations, PDF report generation with jsPDF, and a real-time Supabase backend.',
        tech: ['React 19', 'Supabase', 'CKEditor 5', 'Chart.js', 'jsPDF', 'TypeScript', 'Tailwind CSS'],
        icon: '🦸',
        gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(139,92,246,0.08) 100%)',
        border: 'rgba(168,85,247,0.25)',
        live: 'https://herolikeme.vercel.app',
        github: 'https://github.com/muhammadjawadm/herolikeme',
    },
    {
        id: 5,
        title: 'Hire App — Recruitment Admin Dashboard',
        category: 'Admin Dashboard',
        tag: 'HRTech',
        tagColor: '#0ea5e9',
        description: 'A full-featured job recruitment admin dashboard built with TypeScript and React 19. Manage job postings, applicants pipelines, and hiring workflows — fully responsive with a clean, modern interface.',
        tech: ['TypeScript', 'React 19', 'Tailwind CSS', 'React Router v8', 'Vite'],
        icon: '💼',
        gradient: 'linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(59,130,246,0.08) 100%)',
        border: 'rgba(14,165,233,0.2)',
        live: 'https://hire-app-admin.vercel.app',
        github: 'https://github.com/muhammadjawadm/hire-app-admin',
    },
    {
        id: 6,
        title: 'Luxe Glow — Beauty Platform Admin',
        category: 'Admin Dashboard',
        tag: 'BeautyTech',
        tagColor: '#f43f5e',
        description: 'A luxury beauty & skincare platform admin with full CMS capabilities via CKEditor 5, interactive analytics via ApexCharts, PDF & ZIP export, and a Supabase real-time backend.',
        tech: ['React 19', 'Supabase', 'CKEditor 5', 'ApexCharts', 'jsPDF', 'JSZip', 'Tailwind CSS'],
        icon: '✨',
        gradient: 'linear-gradient(135deg, rgba(244,63,94,0.15) 0%, rgba(236,72,153,0.08) 100%)',
        border: 'rgba(244,63,94,0.25)',
        live: 'https://luxe-glow-seven.vercel.app',
        github: 'https://github.com/muhammadjawadm/luxe-glow',
    },
    {
        id: 7,
        title: 'Brain Code — Coding Education Platform',
        category: 'Admin Dashboard',
        tag: 'EdTech',
        tagColor: '#f59e0b',
        description: 'An educational coding platform admin dashboard with TipTap rich-text editing, interactive Recharts analytics, Excel data export, and full content & user management capabilities.',
        tech: ['React 19', 'Tailwind CSS', 'TipTap Editor', 'Recharts', 'XLSX Export', 'Vite'],
        icon: '🧠',
        gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(249,115,22,0.08) 100%)',
        border: 'rgba(245,158,11,0.25)',
        live: 'https://brain-code-app.vercel.app',
        github: 'https://github.com/muhammadjawadm/brain-code-app',
    },
    {
        id: 8,
        title: 'Properly — Real Estate Admin Dashboard',
        category: 'Admin Dashboard',
        tag: 'PropTech',
        tagColor: '#10b981',
        description: 'A comprehensive real estate property management dashboard. Visualize listings, track sales and rentals, manage clients, and monitor KPIs — all with interactive Recharts data visualization.',
        tech: ['React 19', 'Tailwind CSS', 'Recharts', 'React Router', 'Lucide Icons', 'Vite'],
        icon: '🏠',
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(34,197,94,0.08) 100%)',
        border: 'rgba(16,185,129,0.2)',
        live: 'https://properly-admin.vercel.app',
        github: 'https://github.com/muhammadjawadm/properly-admin',
    },
    {
        id: 9,
        title: 'Bubbles Carwash — Service Website',
        category: 'Frontend',
        tag: 'Local Business',
        tagColor: '#7c3aed',
        description: 'A modern car wash service website built for a real local business. Clean landing page with service pricing, booking info, and a mobile-responsive layout optimized for conversions.',
        tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
        icon: '🫧',
        gradient: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(139,92,246,0.08) 100%)',
        border: 'rgba(124,58,237,0.25)',
        live: 'https://bubbles-carwash.vercel.app',
        github: 'https://github.com/muhammadjawadm/bubbles_carwash',
    },
]

const TABS = ['All', 'Full Stack', 'Admin Dashboard', 'Frontend']
const PER_PAGE = 3

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [activeTab, setActiveTab] = useState('All')
    const [page, setPage] = useState(0)

    const filtered = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab)
    const totalPages = Math.ceil(filtered.length / PER_PAGE)
    const visible = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

    const handleTabChange = (tab) => {
        setActiveTab(tab)
        setPage(0)
    }

    return (
        <section id="projects" className="section" ref={ref} style={{ position: 'relative' }}>
            <div className="container">
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 16 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-badge">
                            <span className="section-badge-dot" />
                            My Work
                        </div>
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle" style={{ marginBottom: 0 }}>
                            Real products I designed, built, and shipped — live on the web.
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
                            disabled={page >= totalPages - 1}
                            style={{
                                width: 42, height: 42, borderRadius: '50%',
                                border: '1px solid rgba(0,212,255,0.25)',
                                background: 'rgba(0,212,255,0.08)',
                                color: page >= totalPages - 1 ? 'var(--text-muted)' : 'var(--accent-cyan)',
                                cursor: page >= totalPages - 1 ? 'not-allowed' : 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1rem',
                            }}
                        >
                            <FiArrowRight />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}
                >
                    {TABS.map(tab => (
                        <motion.button
                            key={tab}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => handleTabChange(tab)}
                            style={{
                                padding: '7px 18px',
                                borderRadius: 50,
                                border: activeTab === tab
                                    ? '1px solid rgba(0,212,255,0.5)'
                                    : '1px solid rgba(255,255,255,0.08)',
                                background: activeTab === tab
                                    ? 'rgba(0,212,255,0.12)'
                                    : 'rgba(255,255,255,0.03)',
                                color: activeTab === tab ? 'var(--accent-cyan)' : 'var(--text-muted)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                letterSpacing: '0.02em',
                            }}
                        >
                            {tab}
                            <span style={{
                                marginLeft: 6,
                                fontSize: '0.7rem',
                                opacity: 0.7,
                            }}>
                                {tab === 'All' ? projects.length : projects.filter(p => p.category === tab).length}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Page indicator dots */}
                {totalPages > 1 && (
                    <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                style={{
                                    width: i === page ? 20 : 6,
                                    height: 6,
                                    borderRadius: 3,
                                    background: i === page ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.15)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Cards grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                    <AnimatePresence mode="wait">
                        {visible.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                                className="glass-card"
                                style={{ padding: 0, overflow: 'hidden' }}
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
                                        fontSize: '0.95rem',
                                        marginBottom: 8,
                                        color: 'var(--text-primary)',
                                        lineHeight: 1.3,
                                    }}>{project.title}</h3>
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.83rem',
                                        lineHeight: 1.7,
                                        marginBottom: 14,
                                    }}>{project.description}</p>

                                    {/* Tech tags */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
                                        {project.tech.map(t => (
                                            <span key={t} style={{
                                                padding: '3px 9px',
                                                background: 'rgba(255,255,255,0.06)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: 50,
                                                fontSize: '0.7rem',
                                                color: 'var(--text-muted)',
                                                fontFamily: 'var(--font-mono)',
                                            }}>{t}</span>
                                        ))}
                                    </div>

                                    {/* Action links */}
                                    <div style={{ display: 'flex', gap: 10 }}>
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.04 }}
                                            style={{
                                                flex: 1,
                                                padding: '9px 0',
                                                background: `${project.tagColor}15`,
                                                border: `1px solid ${project.tagColor}30`,
                                                borderRadius: 8,
                                                color: project.tagColor,
                                                fontSize: '0.79rem',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <FiExternalLink size={12} /> Live Demo
                                        </motion.a>
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.04 }}
                                            style={{
                                                flex: 1,
                                                padding: '9px 0',
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                borderRadius: 8,
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.79rem',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <FiGithub size={12} /> Code
                                        </motion.a>
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
