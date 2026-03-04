import heroImg from '../assets/images/hero-illustration.png';

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="badge">Available for hire</div>
                    <h1>Crafting Digital <span className="gradient-text">Experiences</span></h1>
                    <p>I'm Kgkhant Hein, a Frontend Developer specialized in building high-performance, visually stunning React applications.</p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary">View My Work</a>
                        <a href="#contact" className="btn-secondary">Let's Talk</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroImg} alt="Hero Animation" className="floating-img" />
                    <div className="image-circles">
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero