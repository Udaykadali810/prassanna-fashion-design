import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo.jpg'

const Footer = () => {
    return (
        <footer className="bg-charcoal-dark pt-16 pb-8 border-t border-gold/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-6 text-2xl font-serif font-bold gold-text-gradient uppercase tracking-widest">
                            <img src={logo} alt="Logo" className="h-12 w-auto rounded border border-gold/10" />
                        </Link>
                        <p className="text-white/60 leading-relaxed mb-6 font-light">
                            Redefining luxury fashion education and couture since 2005. Lead by NIFT Alumna Smt. Lakshmi Prassanna Gollapudi.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all text-white/70">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all text-white/70">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-gold font-serif text-lg mb-6 uppercase tracking-widest">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-white/60 hover:text-gold transition-colors block">Home</Link></li>
                            <li><Link to="/portfolio" className="text-white/60 hover:text-gold transition-colors block">Portfolio</Link></li>
                            <li><Link to="/register" className="text-white/60 hover:text-gold transition-colors block">Admissions</Link></li>
                            <li><Link to="/webinar" className="text-white/60 hover:text-gold transition-colors block">Webinar</Link></li>
                            <li><Link to="/admin" className="text-white/60 hover:text-gold transition-colors block">Staff Login</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h3 className="text-gold font-serif text-lg mb-6 uppercase tracking-widest">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-white/60">
                                <MapPin size={20} className="text-gold flex-shrink-0" />
                                <span>Prassannaa Fashion Institute, Hyderabad, TS, India</span>
                            </li>
                            <li className="flex items-center space-x-3 text-white/60">
                                <Phone size={20} className="text-gold flex-shrink-0" />
                                <span>+91 999 000 1111</span>
                            </li>
                            <li className="flex items-center space-x-3 text-white/60">
                                <Mail size={20} className="text-gold flex-shrink-0" />
                                <span>info@prassannafashion.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1">
                        <h3 className="text-gold font-serif text-lg mb-6 uppercase tracking-widest">Newsletter</h3>
                        <p className="text-white/60 mb-4 font-light">Join our list for exclusive fashion updates.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/5 border border-white/10 px-4 py-2 w-full focus:outline-none focus:border-gold/50 text-white rounded-l"
                            />
                            <button className="bg-gold text-charcoal px-4 py-2 rounded-r hover:bg-gold-dark transition-colors font-bold">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-white/40 text-sm font-light">
                    <p>© {new Date().getFullYear()} PRASSANNAA FASHION DESIGNS AND INSTITUTE PVT. LTD. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
