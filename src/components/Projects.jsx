import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLaptopCode, FaChevronRight } from 'react-icons/fa';

const projects = [
    {
        title: "HouseHunt - Rental Web App",
        tech: "React, MongoDB, Express.js, JWT",
        desc: [
            "Engineered a full-stack React application featuring JWT authentication and role-based access for owners and tenants.",
            "Developed RESTful APIs with Express.js and MongoDB to manage property listings and search filters."
        ]
    },
    {
        title: "Cyberbreach Forecaster (ML & React)",
        tech: "React, XG-Boost, Random Forest",
        desc: [
            "Collaborated on a team project to develop a predictive website using React.js for the frontend.",
            "Integrated Machine Learning models to forecast potential security breaches."
        ]
    },
    {
        title: "Vehicle Management System (CLI)",
        tech: "Java, Collections API",
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
                <h2 className="section-title">Featured Projects</h2>
                <Row className="g-4">
                    {projects.map((proj, index) => (
                        <Col lg={4} md={6} key={index}>
                            <div className="glass-card d-flex flex-column h-100 p-4">
                                <div className="mb-4 d-flex justify-content-between align-items-start border-bottom pb-4" style={{ borderColor: 'var(--border-color) !important' }}>
                                    <h4 className="text-white mb-0 h5 fw-bold" style={{ width: '85%', lineHeight: '1.4' }}>{proj.title}</h4>
                                    <div className="d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '10px', color: 'var(--primary)', flexShrink: 0 }}>
                                        <FaLaptopCode />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="badge" style={{ background: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontWeight: '500', padding: '6px 12px' }}>
                                        {proj.tech}
                                    </span>
                                </div>
                                <ul className="text-muted-custom small mb-0 flex-grow-1 list-unstyled">
                                    {proj.desc.map((item, idx) => (
                                        <li key={idx} className="mb-3 d-flex align-items-start">
                                            <span className="me-2 mt-1" style={{ color: 'var(--primary)', fontSize: '0.7rem' }}><FaChevronRight /></span>
                                            <span style={{ lineHeight: '1.6' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
