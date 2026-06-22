import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '40px 0 32px',
            position: 'relative',
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 20,
                }}>
                    {/* Logo + copyright */}
                    <div>
                        <div style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 800,
                            fontSize: '1.2rem',
                            background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: 6,
                        }}>MJ.dev</div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                            © 2025 Muhammad Jawad. All rights reserved.
                        </p>
                    </div>

                    {/* Footer links */}
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookies'].map((l) => (
                            <a key={l} href="#" style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.82rem',
                                textDecoration: 'none',
                                padding: '6px 12px',
                                borderRadius: 8,
                                transition: 'color 0.2s',
                            }}
                                onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                            >
                                {l}
                            </a>
                        ))}
                    </div>

                    {/* Back to top */}
                    <Link to="hero" smooth={true} duration={800}>
                        <motion.button
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 7,
                                padding: '9px 18px',
                                background: 'rgba(0,212,255,0.08)',
                                border: '1px solid rgba(0,212,255,0.2)',
                                borderRadius: 50,
                                color: 'var(--accent-cyan)',
                                fontSize: '0.82rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: 'var(--font-main)',
                            }}
                        >
                            Back to Top <FiArrowUp />
                        </motion.button>
                    </Link>
                </div>

                {/* Decorative bottom line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    style={{
                        height: 1,
                        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), rgba(124,58,237,0.3), transparent)',
                        marginTop: 28,
                        transformOrigin: 'left',
                    }}
                />
            </div>
        </footer>
    )
}
