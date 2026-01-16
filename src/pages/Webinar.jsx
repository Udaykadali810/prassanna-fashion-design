import { motion } from 'framer-motion'
import { Play, Calendar, Video, Download, ShieldCheck } from 'lucide-react'

const Webinar = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-charcoal">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full text-gold text-xs uppercase tracking-[0.2em] font-bold mb-6"
                    >
                        <ShieldCheck size={14} /> Student Portal Access Granted
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                        The Designers' <br /> <span className="gold-text-gradient">Inner Circle</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Exclusive live session with Smt. Lakshmi Prassanna Gollapudi. Get insights into the upcoming season's couture trends.
                    </p>
                </div>

                {/* Webinar Card */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-charcoal-dark border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
                    >
                        {/* Left: Visual */}
                        <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                alt="Webinar"
                            />
                            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-2xl shadow-gold/40 text-charcoal border-[6px] border-charcoal"
                                >
                                    <Play size={28} fill="currentColor" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold">
                                        <Calendar size={14} /> Upcoming Session
                                    </div>
                                    <div className="text-white text-xl font-bold">Sunday, 5:00 PM</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold">
                                        <Video size={14} /> Platform
                                    </div>
                                    <div className="text-white text-xl font-bold">Zoom Pro Live</div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif text-white font-bold mb-4">Topic: Mastering Silk Bridal Embroidery</h3>
                            <p className="text-white/50 mb-10 leading-relaxed font-light">
                                In this 90-minute masterclass, we will explore the nuances of Zardosi and Aari work combined with modern digital printing techniques.
                            </p>

                            <div className="space-y-4">
                                <button className="w-full bg-gold text-charcoal flex items-center justify-center gap-3 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gold-dark transition-all transform active:scale-[0.98]">
                                    <Video size={18} /> Join Live Session Now
                                </button>
                                <button className="w-full bg-white/5 border border-white/10 text-white/70 flex items-center justify-center gap-3 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                                    <Download size={18} /> Download Resource Kit
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Social Link */}
                <div className="mt-20 text-center">
                    <p className="text-white/30 text-sm uppercase tracking-widest mb-4">Need help with the connection?</p>
                    <a href="#" className="text-gold border-b border-gold/30 pb-1 hover:text-white transition-colors font-bold">
                        Contact Technical Support
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Webinar
