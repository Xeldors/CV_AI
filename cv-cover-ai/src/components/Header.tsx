import React from 'react';
import '../styles/components.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <span className="logo-text">Portfolio</span>
                </div>
                <nav className="header-nav">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;