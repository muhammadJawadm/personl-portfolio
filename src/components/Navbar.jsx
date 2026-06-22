import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Education', to: 'education' },
    { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('hero')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '0 32px',
                height: 70,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: scrolled ? 'rgba(6,11,20,0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
                transition: 'all 0.4s ease',
            }}
        >
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} style={{ cursor: 'pointer' }}>
                <span style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.3rem',
                    background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em',
                }}>MJ.dev</span>
            </motion.div>

            {/* Desktop Links */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="nav-desktop">
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        spy={true}
                        smooth={true}
                        duration={600}
                        offset={-70}
                        onSetActive={() => setActive(link.to)}
                    >
                        <motion.div
                            whileHover={{ color: '#00d4ff' }}
                            style={{
                                padding: '8px 18px',
                                borderRadius: 50,
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: active === link.to ? '#00d4ff' : 'var(--text-secondary)',
                                background: active === link.to ? 'rgba(0,212,255,0.08)' : 'transparent',
                                border: active === link.to ? '1px solid rgba(0,212,255,0.2)' : '1px solid transparent',
                                transition: 'all 0.3s ease',
                                letterSpacing: '0.01em',
                            }}
                        >
                            {link.label}
                        </motion.div>
                    </Link>
                ))}

                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary"
                    style={{ marginLeft: 8, fontSize: '0.85rem', padding: '10px 22px' }}
                >
                    Hire Me
                </motion.a>
            </div>

            {/* Mobile hamburger */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    display: 'none',
                    padding: 4,
                }}
                className="nav-mobile-btn"
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </motion.button>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            position: 'absolute',
                            top: 70,
                            left: 0,
                            right: 0,
                            background: 'rgba(6,11,20,0.97)',
                            backdropFilter: 'blur(20px)',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            padding: '20px 32px 28px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={600}
                                offset={-70}
                                onClick={() => setMenuOpen(false)}
                            >
                                <div style={{
                                    padding: '12px 0',
                                    color: 'var(--text-secondary)',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s',
                                }}>
                                    {link.label}
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
        </motion.nav>
    )
}
