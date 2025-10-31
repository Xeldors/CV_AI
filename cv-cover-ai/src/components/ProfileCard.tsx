import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
    name: string;
    title: string;
    skills: string[];
    summary: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, skills, summary }) => {
    return (
        <div className="profile-card">
            <h2 className="profile-name">{name}</h2>
            <h3 className="profile-title">{title}</h3>
            <p className="profile-summary">{summary}</p>
            <div className="profile-skills">
                <h4>Skills:</h4>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfileCard;