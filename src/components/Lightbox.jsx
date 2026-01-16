import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Lightbox = ({ selectedImage, setSelectedImage, images, currentIndex, setCurrentIndex }) => {
    if (!selectedImage) return null

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                onClick={() => setSelectedImage(null)}
            >
                <button
                    className="absolute top-8 right-8 text-white/50 hover:text-gold transition-colors z-[110]"
                    onClick={() => setSelectedImage(null)}
                >
                    <X size={40} />
                </button>

                <button
                    className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold transition-colors z-[110]"
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                >
                    <ChevronLeft size={60} />
                </button>

                <button
                    className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold transition-colors z-[110]"
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                >
                    <ChevronRight size={60} />
                </button>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative max-w-full max-h-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={images[currentIndex].url}
                        alt={images[currentIndex].title}
                        className="max-w-full max-h-[85vh] object-contain rounded border border-gold/20 shadow-2xl"
                    />
                    <div className="mt-6 text-center">
                        <h3 className="text-2xl font-serif text-gold mb-2">{images[currentIndex].title}</h3>
                        <p className="text-white/60 uppercase tracking-widest text-sm">{images[currentIndex].category}</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Lightbox
