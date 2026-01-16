import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { User, Mail, Phone, CreditCard, Loader2 } from 'lucide-react'

const Register = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Save to localStorage
        const registrations = JSON.parse(localStorage.getItem('registrations') || '[]')
        localStorage.setItem('registrations', JSON.stringify([...registrations, { ...formData, id: Date.now(), date: new Date().toLocaleDateString() }]))

        setTimeout(() => {
            setIsSubmitting(false)
            navigate('/webinar')
        }, 1500)
    }

    return (
        <div className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-20 bg-charcoal min-h-screen text-white flex items-center justify-center">
            <div className="w-full max-w-md mx-auto px-4 sm:px-6">
                <div className="bg-charcoal-dark px-6 sm:px-8 py-10 sm:py-12 rounded-3xl border border-gold/20 shadow-2xl">
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gold mb-6 sm:mb-8 text-center uppercase tracking-tight">Register Now</h1>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="space-y-1 sm:space-y-2">
                            <label className="text-gold text-[10px] sm:text-xs uppercase font-bold tracking-widest">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} sm:size={18} />
                                <input
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-10 sm:px-12 py-3 sm:py-4 focus:outline-none focus:border-gold/50 text-sm sm:text-base text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                            <label className="text-gold text-[10px] sm:text-xs uppercase font-bold tracking-widest">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} sm:size={18} />
                                <input
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-10 sm:px-12 py-3 sm:py-4 focus:outline-none focus:border-gold/50 text-sm sm:text-base text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                            <label className="text-gold text-[10px] sm:text-xs uppercase font-bold tracking-widest">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} sm:size={18} />
                                <input
                                    required
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    placeholder="+91 000 000 0000"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-10 sm:px-12 py-3 sm:py-4 focus:outline-none focus:border-gold/50 text-sm sm:text-base text-white"
                                />
                            </div>
                        </div>

                        <button
                            disabled={isSubmitting}
                            className="w-full bg-gold text-charcoal py-3 sm:py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" size={18} sm:size={20} /> : <CreditCard size={18} sm:size={20} />}
                            {isSubmitting ? 'Processing...' : 'Enroll & Pay'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
