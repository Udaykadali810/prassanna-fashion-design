import { motion } from 'framer-motion'
import { Clock, BookOpen, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const CourseCard = ({ title, duration, description, features, price, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-charcoal border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:border-gold/30 transition-all group"
        >
            <div className="relative h-64 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gold text-charcoal px-4 py-1 rounded-full font-bold text-sm">
                    {duration}
                </div>
            </div>

            <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 md:mb-4 group-hover:text-gold transition-colors">{title}</h3>
                <p className="text-white/60 mb-6 font-light line-clamp-2 text-sm md:text-base">{description}</p>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white/70 text-xs md:text-sm">
                            <CheckCircle size={14} md:size={16} className="text-gold mr-2 md:mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-4 md:pt-6 border-t border-white/5">
                    <div className="flex flex-col">
                        <span className="text-white/40 text-[10px] uppercase tracking-widest">Enrollment Fee</span>
                        <span className="text-xl md:text-2xl font-bold text-gold">₹{price}</span>
                    </div>
                    <Link
                        to="/register"
                        className="bg-white/5 hover:bg-gold hover:text-charcoal border border-gold/50 text-gold px-4 md:px-6 py-2 rounded-full font-bold transition-all text-xs md:text-sm uppercase tracking-wider"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default CourseCard
