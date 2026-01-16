import { motion } from 'framer-motion'
import { Award, GraduationCap, Star } from 'lucide-react'

const FounderBio = () => {
    return (
        <section className="py-24 bg-charcoal-dark overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative w-full"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                                alt="Smt. Lakshmi Prassanna Gollapudi"
                                className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Artistic border */}
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/10 -z-0 rounded-2xl"></div>
                        <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-gold/5 -z-0 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-gold font-serif italic text-xl mb-4 block">Meet Our Founder</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                            Smt. Lakshmi Prassanna Gollapudi <br />
                            <span className="text-gold/80 text-2xl font-sans uppercase tracking-widest font-light">NIFT Alumna & Creative Visionary</span>
                        </h2>

                        <p className="text-white/70 text-lg leading-relaxed mb-8 font-light italic">
                            "Fashion is not just about what we wear; it's an expression of culture, craft, and character. At Prassannaa Fashion, we weave tradition with modernity to empower the designers of tomorrow."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                            <div className="flex items-start space-x-4">
                                <div className="bg-gold/10 p-3 rounded-lg"><GraduationCap className="text-gold" /></div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">NIFT Alumni</h4>
                                    <p className="text-white/50 text-sm">Graduated from premier fashion institute with honors.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-gold/10 p-3 rounded-lg"><Star className="text-gold" /></div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">20+ Years Exp</h4>
                                    <p className="text-white/50 text-sm">Deep expertise in couture and bridal fashion.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-gold/10 p-3 rounded-lg"><Award className="text-gold" /></div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Industry Leader</h4>
                                    <p className="text-white/50 text-sm">Recognized for bridal and couture innovations.</p>
                                </div>
                            </div>
                        </div>

                        <button className="gold-text-gradient font-bold uppercase tracking-widest text-sm border-b-2 border-gold pb-1 hover:text-white transition-colors">
                            Read More About Her Journey
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default FounderBio
