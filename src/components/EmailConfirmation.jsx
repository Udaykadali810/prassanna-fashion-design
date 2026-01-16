import { motion } from 'framer-motion'
import { Mail, CheckCircle, MapPin, Phone, Globe } from 'lucide-react'
import logo from '../assets/logo.jpg'

const EmailConfirmation = ({ student }) => {
    return (
        <div className="bg-[#f4f4f4] min-h-screen p-4 md:p-12 flex items-center justify-center font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl w-full bg-white shadow-2xl rounded-sm overflow-hidden border-t-8 border-[#D4AF37]"
            >
                {/* Email Header */}
                <div className="bg-[#1B1B1B] p-10 text-center">
                    <img src={logo} alt="Logo" className="h-16 w-auto mx-auto mb-6 rounded" />
                    <h1 className="text-[#D4AF37] font-serif text-3xl uppercase tracking-widest font-bold">Enrollment Confirmed</h1>
                </div>

                {/* Email Body */}
                <div className="p-10">
                    <p className="text-[#333] mb-6 text-lg leading-relaxed">
                        Dear <span className="font-bold">{student?.name || 'Aspirant'}</span>,
                    </p>
                    <p className="text-[#555] mb-8 leading-loose italic">
                        Congratulations on taking your first step towards a brilliant career in fashion. We have received your enrollment for the <span className="text-[#D4AF37] font-bold">{student?.course || 'selected course'}</span>.
                    </p>

                    <div className="bg-[#fdfbf2] border border-[#f4e4bc] p-8 mb-10">
                        <h3 className="text-[#D4AF37] uppercase tracking-widest text-xs font-bold mb-4 border-b border-[#f4e4bc] pb-2 text-center">Your Admission Record</h3>
                        <table className="w-full text-sm">
                            <tbody className="divide-y divide-[#f4e4bc]/20">
                                <tr>
                                    <td className="py-3 text-[#777] font-bold">Registration ID:</td>
                                    <td className="py-3 text-[#333] text-right">PF-{(student?.id || Date.now()).toString().slice(-6)}</td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-[#777] font-bold">Amount Paid:</td>
                                    <td className="py-3 text-[#333] text-right font-bold italic">₹{student?.amount || '0'}</td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-[#777] font-bold">Session Start:</td>
                                    <td className="py-3 text-[#333] text-right">Feb 15, 2026</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-[#555] mb-8 leading-loose">
                        Our student coordinator will contact you within 24 hours to schedule your induction session. In the meantime, you can explore our <a href="#" className="text-[#D4AF37] underline font-bold">Student Handbook</a>.
                    </p>

                    <p className="text-[#333] font-bold italic border-l-4 border-[#D4AF37] pl-4 py-2">
                        "Art is not what you see, but what you make others see." — Smt. Lakshmi Prassanna Gollapudi
                    </p>
                </div>

                {/* Email Footer */}
                <div className="bg-[#f9f9f9] border-t border-[#eee] p-8 text-center">
                    <div className="flex justify-center gap-6 mb-6">
                        <Phone size={18} className="text-[#D4AF37]" />
                        <Globe size={18} className="text-[#D4AF37]" />
                        <MapPin size={18} className="text-[#D4AF37]" />
                    </div>
                    <p className="text-[10px] text-[#999] uppercase tracking-widest font-bold">
                        PRASSANNAA FASHION DESIGNS AND INSTITUTE PVT. LTD. <br />
                        Cyber Towers Area, Hyderabad - 500081
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default EmailConfirmation
