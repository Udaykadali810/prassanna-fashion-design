import Hero from '../components/Hero'
import FounderBio from '../components/FounderBio'
import CourseCard from '../components/CourseCard'
import { motion } from 'framer-motion'

const courses = [
    {
        title: "Bridal Couture Mastery",
        duration: "6 Months",
        description: "Deep dive into the intricate world of Indian bridal wear, from heavy embroidery to contemporary silhouette design.",
        features: ["Intricate Zardosi Work", "Pattern Making for Lehengas", "Client Consultation Secrets", "Portfolio Project"],
        price: "75,000",
        image: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=2030&auto=format&fit=crop"
    },
    {
        title: "Contemporary Fashion Design",
        duration: "3 Months",
        description: "Master the art of western concepts mixed with traditional crafts. Perfect for aspiring runway designers.",
        features: ["Modern Silhouettes", "Textile Manipulation", "Digital Fashion Illustration", "Industrial Sewing"],
        price: "45,000",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
    },
    {
        title: "Fashion Illustration & Portfolio",
        duration: "1 Month",
        description: "Intensive workshop on visual storytelling and creating a high-end design portfolio for global applications.",
        features: ["Anatomy Rendering", "Fabric Texture Rendering", "Collection Planning", "Digital Post-Processing"],
        price: "15,000",
        image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1974&auto=format&fit=crop"
    }
]

const Home = () => {
    return (
        <div>
            <Hero />

            <FounderBio />

            <section className="py-24 bg-charcoal">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold font-serif italic text-xl mb-4 block"
                        >
                            Academic Excellence
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-wider"
                        >
                            Featured Programs
                        </motion.h2>
                        <div className="w-24 h-[1px] bg-gold mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {courses.map((course, idx) => (
                            <CourseCard key={idx} {...course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-20 bg-charcoal-dark border-y border-gold/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-4xl font-serif font-bold text-gold mb-2">500+</div>
                            <div className="text-white/50 uppercase tracking-widest text-xs">Students Trained</div>
                        </div>
                        <div>
                            <div className="text-4xl font-serif font-bold text-gold mb-2">15+</div>
                            <div className="text-white/50 uppercase tracking-widest text-xs">Exhibitions</div>
                        </div>
                        <div>
                            <div className="text-4xl font-serif font-bold text-gold mb-2">100%</div>
                            <div className="text-white/50 uppercase tracking-widest text-xs">Placement Support</div>
                        </div>
                        <div>
                            <div className="text-4xl font-serif font-bold text-gold mb-2">20yr</div>
                            <div className="text-white/50 uppercase tracking-widest text-xs">Industry Legacy</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
