import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from '../components/Lightbox'

const portfolioItems = [
    { id: 1, title: 'Royal Gold Saree', category: 'Bridal', url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop' },
    { id: 2, title: 'Summer Blossom', category: 'Casual', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop' },
    { id: 3, title: 'Evening Silhouette', category: 'Couture', url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1920&auto=format&fit=crop' },
    { id: 4, title: 'Student Work - Texture', category: 'Student Works', url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop' },
    { id: 5, title: 'Bridal Velvet Lehenga', category: 'Bridal', url: 'https://images.unsplash.com/photo-1610030469617-3f374c431475?q=80&w=1976&auto=format&fit=crop' },
    { id: 6, title: 'Modern Fusion', category: 'Couture', url: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=2030&auto=format&fit=crop' },
    { id: 7, title: 'Graduate Collection', category: 'Student Works', url: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1920&auto=format&fit=crop' },
    { id: 8, title: 'Chic Style', category: 'Casual', url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1974&auto=format&fit=crop' },
]

const categories = ['All', 'Bridal', 'Couture', 'Casual', 'Student Works']

const Portfolio = () => {
    const [filter, setFilter] = useState('All')
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const filteredItems = filter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter)

    const handleOpenLightbox = (index) => {
        const itemIdx = portfolioItems.findIndex(item => item.id === filteredItems[index].id)
        setCurrentIndex(itemIdx)
        setSelectedImage(portfolioItems[itemIdx])
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-charcoal">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold gold-text-gradient mb-4 uppercase tracking-tighter"
                    >
                        Design Portfolio
                    </motion.h1>
                    <div className="w-24 h-[1px] bg-gold mx-auto mb-8"></div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-2 rounded-full border transition-all text-sm uppercase tracking-widest font-bold ${filter === cat ? 'bg-gold border-gold text-charcoal' : 'border-white/20 text-white/50 hover:border-gold/50'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl border border-white/5 shadow-xl"
                                onClick={() => handleOpenLightbox(idx)}
                            >
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                    <span className="text-gold text-xs uppercase tracking-[0.2em] mb-2">{item.category}</span>
                                    <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
                                    <div className="mt-4 w-12 h-[1px] bg-gold"></div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <Lightbox
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                images={portfolioItems}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </div>
    )
}

export default Portfolio
