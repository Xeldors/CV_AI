import React from 'react';
import '../styles/components.css';

interface CoverProps {
  onOpenChat: () => void;
}

const Cover: React.FC<CoverProps> = ({ onOpenChat }) => {
    return (
        <div className="cover-container">
            <section className="hero-section">
                <h1 className="hero-title">Quantitative Analyst & Software Developer</h1>
                <p className="hero-subtitle">
                    Building robust financial systems and data-driven solutions with expertise in quantitative analysis and full-stack development.
                </p>
                <div className="hero-cta">
                    <button className="btn btn-primary" onClick={onOpenChat}>
                        Ask AI about my experience
                    </button>
                    <button className="btn btn-secondary" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                        View contact
                    </button>
                </div>
            </section>

            <section className="stats-section">
                <div className="stat-card">
                    <div className="stat-value">5+</div>
                    <div className="stat-label">Years in Banking & Tech</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">50+</div>
                    <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">10+</div>
                    <div className="stat-label">Technologies</div>
                </div>
            </section>

            <section className="skills-section">
                <h3 className="section-title">Technical Skills</h3>
                <div className="skills-grid">
                    <div className="skill-tag">Python</div>
                    <div className="skill-tag">TypeScript</div>
                    <div className="skill-tag">React</div>
                    <div className="skill-tag">FastAPI</div>
                    <div className="skill-tag">SQL</div>
                    <div className="skill-tag">Data Analysis</div>
                    <div className="skill-tag">Risk Modeling</div>
                    <div className="skill-tag">Time Series</div>
                    <div className="skill-tag">Financial Engineering</div>
                    <div className="skill-tag">AWS</div>
                    <div className="skill-tag">Docker</div>
                    <div className="skill-tag">Git</div>
                </div>
            </section>
        </div>
    );
};

export default Cover;