import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Download, Trash2, ShieldCheck, Lock, LogOut, Users, UserPlus, CreditCard, Loader2 } from 'lucide-react'

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState('')
    const [students, setStudents] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [error, setError] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)

    // 1. Data Sync with localStorage 'registrations'
    useEffect(() => {
        if (isAuthenticated) {
            loadData()
        }
    }, [isAuthenticated])

    const loadData = () => {
        const data = JSON.parse(localStorage.getItem('registrations') || '[]')
        setStudents(data)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoggingIn(true)

        setTimeout(() => {
            if (password === 'admin123') {
                setIsAuthenticated(true)
                setError('')
            } else {
                setError('Invalid professional credentials.')
            }
            setIsLoggingIn(false)
        }, 1000)
    }

    const downloadCSV = () => {
        if (students.length === 0) return

        const headers = ['ID', 'Name', 'Email', 'Phone', 'Course', 'Date', 'Status', 'Amount']
        const csvRows = [
            headers.join(','),
            ...students.map(s => [s.id, s.name, s.email, s.phone, s.course, s.date, s.status, s.amount].join(','))
        ]

        const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `registrations_report_${new Date().toLocaleDateString()}.csv`
        a.click()
    }

    // 2. Delete Logic
    const deleteStudent = (id) => {
        const updated = students.filter(s => s.id !== id)
        setStudents(updated)
        localStorage.setItem('registrations', JSON.stringify(updated))
    }

    const filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.course.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (!isAuthenticated) {
        return (
            <div className="pt-40 pb-24 flex items-center justify-center min-h-screen bg-charcoal">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-charcoal-dark p-12 rounded-[2rem] border border-white/10 w-full max-w-md shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-white to-gold"></div>

                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gold/20">
                            <Lock size={32} className="text-gold" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-2 uppercase tracking-tight">Admin Portal</h2>
                        <p className="text-white/40 text-sm">Restricted Access. Professionals Only.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-gold text-xs uppercase tracking-widest font-bold">Access Key</label>
                            <input
                                autoFocus
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-gold/50 text-white transition-all text-center tracking-widest"
                            />
                        </div>
                        {error && <p className="text-red-500 text-xs text-center font-bold tracking-wide italic">{error}</p>}
                        <button
                            disabled={isLoggingIn}
                            className="w-full bg-gold text-charcoal py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gold-dark transition-all transform active:scale-95 shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
                        >
                            {isLoggingIn ? <Loader2 className="animate-spin" size={20} /> : <ShieldCheck size={20} />}
                            {isLoggingIn ? 'Verifying...' : 'Secure Entry'}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">Hint: admin123</p>
                    </div>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-charcoal">
            <div className="container mx-auto px-4">
                {/* Top Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2 uppercase tracking-tight">Backend Dashboard</h1>
                        <p className="text-white/40 text-sm">Managing <span className="text-gold font-bold">{students.length}</span> Active Registrations.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            onClick={downloadCSV}
                            className="bg-white/5 border border-white/10 text-white hover:bg-gold hover:text-charcoal px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all flex items-center gap-2 flex-1 sm:flex-none justify-center"
                        >
                            <Download size={14} sm:size={16} /> Export CSV
                        </button>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all flex items-center gap-2 flex-1 sm:flex-none justify-center"
                        >
                            <LogOut size={14} sm:size={16} /> Logout
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                    <div className="bg-charcoal-dark p-6 rounded-2xl border border-white/5 shadow-xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-500/10 p-3 rounded-lg"><Users className="text-blue-500" /></div>
                            <span className="text-white/40 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Total Enrolled</span>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white">{students.length}</div>
                    </div>
                    <div className="bg-charcoal-dark p-6 rounded-2xl border border-white/5 shadow-xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-green-500/10 p-3 rounded-lg"><CreditCard className="text-green-500" /></div>
                            <span className="text-white/40 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Total Revenue</span>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white">₹{students.reduce((acc, curr) => acc + (curr.status === 'Success' ? parseInt(curr.amount?.replace(/,/g, '') || '0') : 0), 0).toLocaleString()}</div>
                    </div>
                    <div className="bg-charcoal-dark p-6 rounded-2xl border border-white/5 shadow-xl sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-gold/10 p-3 rounded-lg"><UserPlus className="text-gold" /></div>
                            <span className="text-white/40 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Pending Payments</span>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white">{students.filter(s => s.status === 'Pending Payment').length}</div>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="mb-8 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                    <input
                        type="text"
                        placeholder="Search by student name, email, or course..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-charcoal-dark border border-white/10 rounded-2xl px-12 py-4 focus:outline-none focus:border-gold/50 text-white transition-all shadow-xl"
                    />
                </div>

                {/* Table */}
                <div className="bg-charcoal-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] text-gold font-bold">
                                    <th className="px-6 py-4">Student</th>
                                    <th className="px-6 py-4">Contact</th>
                                    <th className="px-6 py-4">Program</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredStudents.length > 0 ? filteredStudents.map((student) => (
                                    <tr key={student.id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-6 py-6 font-bold text-white">{student.name}</td>
                                        <td className="px-6 py-6 italic text-white/60 text-sm">
                                            {student.email} <br />
                                            <span className="text-[10px] text-white/30 uppercase not-italic">{student.phone}</span>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap border border-gold/20">
                                                {student.course}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 text-white/40 text-sm whitespace-nowrap">{student.date}</td>
                                        <td className="px-6 py-6 whitespace-nowrap">
                                            <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold ${student.status === 'Success' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6">
                                            <button
                                                onClick={() => deleteStudent(student.id)}
                                                className="text-white/20 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-20 text-center text-white/20 italic font-light">
                                            {searchTerm ? 'No entries found matching your search.' : 'No registrations logged yet.'}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
