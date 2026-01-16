import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.jpg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Register', path: '/register' },
        { name: 'Admin', path: '/admin' },
    ]

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal/95 backdrop-blur-md border-b border-gold/20 py-2' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} alt="Logo" className="h-12 w-auto rounded" />
                        <div className="flex flex-col">
                            <span className="font-serif text-xl font-bold gold-text-gradient uppercase leading-none">PRASSANNAA</span>
                            <span className="text-[10px] text-white/40 tracking-widest uppercase font-bold">Fashion Institute</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-xs uppercase tracking-widest font-bold hover:text-gold transition-colors ${location.pathname === link.path ? 'text-gold' : 'text-white/60'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/register"
                            className="bg-gold text-charcoal px-8 py-3 rounded-full font-black hover:bg-white transition-all transform hover:scale-105 active:scale-95 text-xs uppercase tracking-widest flex items-center gap-2"
                        >
                            <GraduationCap size={16} />
                            Enroll Now
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-charcoal border-b border-gold/20"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-sm font-bold uppercase tracking-widest ${location.pathname === link.path ? 'text-gold' : 'text-white/60'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/register"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-gold text-charcoal py-4 rounded-xl font-bold uppercase tracking-widest text-sm"
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
