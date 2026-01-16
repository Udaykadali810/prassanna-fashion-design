import { motion } from 'framer-motion'
import { ArrowRight, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full -mr-64 -mt-64 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full -ml-64 -mb-64"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="p-2 border border-gold/30 rounded-full bg-white/5 backdrop-blur-sm">
                        <img src={logo} alt="Prassannaa Fashion Logo" className="h-24 w-auto rounded-full shadow-gold/20 shadow-2xl" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-serif font-black mb-6 gold-text-gradient uppercase tracking-tight leading-none"
                >
                    Prassannaa <br /> Fashion
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 font-light leading-relaxed px-4"
                >
                    Excellence in Fashion Education & Couture. Founded by NIFT Alumna, shaping the next generation of global fashion leaders.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        to="/register"
                        className="group relative px-10 py-4 bg-gold text-charcoal font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-lg shadow-gold/20 w-full sm:w-auto"
                    >
                        <span className="relative z-10 uppercase tracking-widest">Enroll Now</span>
                        <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" size={20} />
                    </Link>

                    <Link
                        to="/register"
                        className="group px-10 py-4 bg-white/5 border border-gold/30 text-gold font-bold rounded-full overflow-hidden transition-all hover:bg-gold hover:text-charcoal active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        <Video size={20} />
                        Join Free Webinar
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent"></div>
            </motion.div>
        </div>
    )
}

export default Hero
