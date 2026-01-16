import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
    const whatsappNumber = '919990001111'
    const message = 'Hello Prassannaa Fashion! I am interested in your courses.'

    return (
        <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-charcoal px-4 py-2 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gold/20">
                Chat with us
            </span>
        </motion.a>
    )
}

export default WhatsAppButton
