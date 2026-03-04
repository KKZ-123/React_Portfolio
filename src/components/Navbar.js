import { User, Briefcase, Mail, Code } from 'lucide-react';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home" className="logo-container">
                <Code size={24} className="accent-icon" />
                <h2>Portfolio</h2>
            </a>
            <div className="nav-links">
                <a href="#about"><User size={18} /> About</a>
                <a href="#projects"><Briefcase size={18} /> Projects</a>
                <a href="#contact"><Mail size={18} /> Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
