import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaPaintBrush, FaDatabase, FaTools } from 'react-icons/fa';

const skillsData = [
    {
        category: "Frontend Dev",
        icon: <FaCode />,
        items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"]
    },
    {
        category: "Programming",
        icon: <FaTools />,
        items: ["Python", "Java", "JavaScript"]
    },
    {
        category: "Tools & DB",
        icon: <FaDatabase />,
        items: ["SQL", "GitHub", "Vite"]
    },
    {
        category: "UI/UX Design",
        icon: <FaPaintBrush />,
        items: ["Figma", "Video Editing", "Photo Editing"]
    }
];

const Skills = () => {
    return (
        <section id="skills">
            <Container>
                <h2 className="section-title">Technical Skills</h2>
                <Row className="g-4">
                    {skillsData.map((skillGroup, index) => (
                        <Col lg={6} key={index}>
                            <div className="glass-card">
                                <div className="d-flex align-items-center mb-4 pb-3" style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <div
                                        className="d-flex align-items-center justify-content-center me-3"
                                        style={{ width: '48px', height: '48px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', color: 'var(--primary)', fontSize: '1.2rem' }}
                                    >
                                        {skillGroup.icon}
                                    </div>
                                    <h4 className="mb-0 h5 font-weight-bold">{skillGroup.category}</h4>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, idx) => (
                                        <span key={idx} className="skill-badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
