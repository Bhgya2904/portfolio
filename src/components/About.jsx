import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about">
            <Container>
                <h2 className="section-title">About & Education</h2>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="glass-card mb-5">
                            <h3 className="mb-4 text-gradient h4">My Profile</h3>
                            <p className="text-muted-custom mb-0">
                                Hi, I'm Bhagyasri Mane, a passionate Frontend Developer with practical hands-on experience in HTML, CSS, JavaScript, and React.js. I thrive on collaborating within professional environments and applying my skills in real-world web application development. With an eye for creative problem-solving and a deep background in UI/UX through Figma, I bring a holistic approach to building meaningful web interfaces.
                            </p>
                        </div>

                        <h3 className="mb-4 mt-5 d-flex align-items-center h4" style={{ color: 'var(--text-main)' }}>
                            <span className="d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '10px', color: 'var(--primary)' }}>
                                <FaGraduationCap />
                            </span>
                            Education Journey
                        </h3>

                        <div className="timeline-container position-relative">
                            <div className="position-relative mb-5 ps-3">
                                <div className="timeline-dot"></div>
                                <h4 className="mb-2 h5" style={{ color: 'var(--text-main)', fontWeight: '600' }}>B.Tech in Computer Science & Cyber Security</h4>
                                <p className="mb-3 text-gradient fw-bold">Godavari Institute of Engineering and Technology</p>
                                <div className="d-flex align-items-center text-muted-custom small">
                                    <span className="me-4 d-flex align-items-center"><FaCalendarAlt className="me-2" style={{ color: 'var(--primary)' }} />Oct 2022 - May 2026</span>
                                    <span className="d-flex align-items-center"><FaAward className="me-2" style={{ color: 'var(--primary)' }} />CGPA: 8.42/10</span>
                                </div>
                            </div>

                            <div className="position-relative ps-3">
                                <div className="timeline-dot"></div>
                                <h4 className="mb-2 h5" style={{ color: 'var(--text-main)', fontWeight: '600' }}>Intermediate (MPC)</h4>
                                <p className="mb-3 text-gradient fw-bold">Sri Chaitanya Junior College</p>
                                <div className="d-flex align-items-center text-muted-custom small">
                                    <span className="me-4 d-flex align-items-center"><FaCalendarAlt className="me-2" style={{ color: 'var(--primary)' }} />June 2020 - June 2022</span>
                                    <span className="d-flex align-items-center"><FaAward className="me-2" style={{ color: 'var(--primary)' }} />Percentage: 94.3%</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
