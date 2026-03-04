import { ExternalLink, Github } from 'lucide-react';

function Projects() {
    const projects = [
        {
            title: "Kilo Taxi Project",
            desc: "Carsary Taxi is a smart taxi booking system designed to provide a seamless and efficient ride-hailing experience. The platform allows users to easily book rides, view available drivers, and manage trip details in real time.",
        },
        {
            title: "IAM System",
            desc: "An integrated Identity and Access Management system to handle secure authentication and role-based access control. Ensures high security standards and scalable user management.",
        },
        {
            title: "Jewelry Management System",
            desc: "A Jewelry Management System is a comprehensive software solution designed to streamline and automate the daily operations of a jewelry business.The system simplifies billing, purchase management, customer records.",
        },
        {
            title: "Library Management System",
            desc: "A Library Management System is a software application designed to efficiently manage the operations of a library by automating tasks such as cataloging, issuing, returning, and reserving books and borrowed items."
        }
    ];

    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((p, i) => (
                    <div className="project-card" key={i}>
                        <div className="card-accent"></div>
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <div className="project-links" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link-icon"><Github size={20} /></a>
                            <a href="/" className="link-icon"><ExternalLink size={20} /></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects