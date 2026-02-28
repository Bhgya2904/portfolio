import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLaptopCode, FaChevronRight } from 'react-icons/fa';

const projects = [
    {
        title: "DivineRoute AI - Travel Planner",
        tech: "React, Vite, Gemini API",
        link: "https://github.com/Bhgya2904/divineroute-ai",
        desc: [
            "Developed an AI-powered travel planning app that generates personalized day-by-day itineraries using Google Gemini AI.",
            "Implemented a modern startup-style UI with beautiful micro-interactions, dynamic AI loaders, and persistent local storage."
        ]
    },
    {
        title: "HouseHunt - Rental Web App",
        tech: "React, MongoDB, Express.js, JWT",
        link: "https://github.com/Bhgya2904/house-hunt",
        desc: [
            "Engineered a full-stack React application featuring JWT authentication and role-based access for owners and tenants.",
            "Developed RESTful APIs with Express.js and MongoDB to manage property listings and search filters."
        ]
    },
    {
        title: "Cyberbreach Forecaster (ML & React)",
        tech: "React, XG-Boost, Random Forest",
        link: "https://github.com/Bhgya2904/cyber_breach_prediction",
        desc: [
            "Collaborated on a team project to develop a predictive website using React.js for the frontend.",
            "Integrated Machine Learning models to forecast potential security breaches."
        ]
    },
    {
        title: "Vehicle Management System (CLI)",
        tech: "Java, Collections API",
        link: "https://github.com/Bhgya2904/vehicle",
        desc: [
            "Built a Java-based terminal application implementing CRUD operations and core OOP principles.",
            "Designed a robust menu-driven interface with input validation using Java Collections."
        ]
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <Container>
                <div className="d-flex align-items-center mb-5 mb-md-4 pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <h2 className="section-title mb-0 border-0 text-start bg-transparent" style={{ transform: 'none', left: '0', background: 'linear-gradient(135deg, #f8fafc, #94a3b8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Featured Projects
                    </h2>
                </div>
                <Row className="g-4 mt-1">
                    {projects.map((proj, index) => (
                        <Col lg={6} key={index}>
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                <div className="glass-card d-flex flex-column h-100 p-4" style={{ cursor: 'pointer' }}>
                                    <div className="mb-4 d-flex justify-content-between align-items-start pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                                        <div>
                                            <h4 className="text-white mb-2 h5 fw-bold" style={{ lineHeight: '1.4', transition: 'color 0.3s ease' }}>
                                                {proj.title} <span className="text-muted d-inline-block transition" style={{ fontSize: '1rem' }}>↗</span>
                                            </h4>
                                            <span className="badge mt-1" style={{ background: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontWeight: '500', padding: '6px 12px' }}>
                                                {proj.tech}
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', color: 'var(--primary)', flexShrink: 0, fontSize: '1.2rem' }}>
                                            <FaLaptopCode />
                                        </div>
                                    </div>
                                    <ul className="text-muted-custom small mb-0 flex-grow-1 list-unstyled">
                                        {proj.desc.map((item, idx) => (
                                            <li key={idx} className="mb-3 d-flex align-items-start">
                                                <span className="me-3 mt-1" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>•</span>
                                                <span style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
