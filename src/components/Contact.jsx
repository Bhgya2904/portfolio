import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" style={{ paddingBottom: '3rem', borderBottom: 'none' }}>
            <Container>
                <div className="glass-card p-4 p-md-5 mb-5 text-center position-relative overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
                    {/* Background decoration */}
                    <div className="position-absolute" style={{ top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(15, 23, 42, 0) 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
                    <div className="position-absolute" style={{ bottom: '-100px', left: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, rgba(15, 23, 42, 0) 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

                    <Row className="justify-content-center position-relative z-index-1">
                        <Col lg={8}>
                            <h2 className="mb-4 text-gradient display-5 fw-bold" style={{ letterSpacing: '-0.03em' }}>Let's Connect</h2>
                            <p className="lead text-muted-custom mb-5" style={{ fontSize: '1.1rem' }}>
                                I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
                            </p>

                            <Row className="g-4 mb-5 justify-content-center">
                                <Col md={4}>
                                    <a href="mailto:manebhagyasri05@gmail.com" className="text-decoration-none">
                                        <div className="glass-card d-flex flex-column align-items-center justify-content-center p-4 h-100" style={{ boxShadow: 'none' }}>
                                            <div className="d-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', color: 'var(--primary)', fontSize: '1.2rem' }}>
                                                <FaEnvelope />
                                            </div>
                                            <h5 className="text-white h6 font-weight-bold mb-2">Email</h5>
                                            <span className="text-white small">manebhagyasri05@gmail.com</span>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={4}>
                                    <a href="tel:+919121034060" className="text-decoration-none">
                                        <div className="glass-card d-flex flex-column align-items-center justify-content-center p-4 h-100" style={{ boxShadow: 'none' }}>
                                            <div className="d-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', color: 'var(--primary)', fontSize: '1.2rem' }}>
                                                <FaPhone />
                                            </div>
                                            <h5 className="text-white h6 font-weight-bold mb-2">Phone</h5>
                                            <span className="text-white small">+91 9121034060</span>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={4}>
                                    <a href="https://linkedin.com/in/bhagyasri-mane-3a2abb280/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                        <div className="glass-card d-flex flex-column align-items-center justify-content-center p-4 h-100" style={{ boxShadow: 'none' }}>
                                            <div className="d-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', color: 'var(--primary)', fontSize: '1.2rem' }}>
                                                <FaLinkedin />
                                            </div>
                                            <h5 className="text-white h6 font-weight-bold mb-2">LinkedIn</h5>
                                            <span className="text-white small">Bhagyasri Mane</span>
                                        </div>
                                    </a>
                                </Col>
                            </Row>

                            <a href="mailto:manebhagyasri05@gmail.com" className="glow-btn px-5 py-3 fs-6 rounded-pill">Say Hello</a>
                        </Col>
                    </Row>
                </div>

                <div className="text-center pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <p className="text-muted small mb-0">
                        © {new Date().getFullYear()} Bhagyasri Mane. Built with React.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
