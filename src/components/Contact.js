import { Mail, Linkedin, Github, Send } from 'lucide-react';

function Contact() {
    return (
        <section id="contact">
            <div className="contact-container">
                <Send className="accent-icon" size={32} style={{ marginBottom: '1rem', margin: '0 auto' }} />
                <h2>Get In Touch</h2>
                <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                <div className="social-links">
                    <a href="mailto:kaungkhantzaw.mml223@gmail.com" title="Email">
                        <Mail size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/kaungkhant-zaw-6550b6238/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/KKZ-123" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <Github size={20} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
