import aboutImg from '../assets/images/about-illustration.png';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image">
                    <img src={aboutImg} alt="About Me Illustration" className="about-illustration" />
                    <div className="about-image-glow"></div>
                </div>
                <div className="about-content">
                    <h2>About <span className="gradient-text">Me</span></h2>
                    <div className="about-text">
                        <p>
                            I am a passionate software developer focused on building practical and scalable digital solutions. I enjoy turning ideas into real-world applications, with experience in developing systems like taxi booking platforms and secure IAM solutions.
                        </p>
                        <p className="about-subtext">
                            I am always eager to learn new technologies, improve my skills, and create efficient systems that deliver real value to users. My expertise includes React, Modern JavaScript, and building secure, user-centric architectures.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About