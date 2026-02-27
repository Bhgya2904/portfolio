import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
    return (
        <section id="home">
            <Container>
                <Row className="align-items-center">
                    <Col lg={7} className="mb-5 mb-lg-0 pe-lg-5">
                        <span className="badge mb-3" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--primary)', padding: '8px 16px', fontWeight: '600' }}>
                            HELLO, I'M
                        </span>
                        <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: '-0.03em' }}>
                            Bhagyasri Mane
                        </h1>
                        <h2 className="h2 mb-4" style={{ color: 'var(--text-muted)', fontWeight: '500' }}>
                            Frontend Developer <span style={{ color: 'var(--primary)' }}>&</span> UI/UX Enthusiast
                        </h2>
                        <p className="lead mb-5 text-muted-custom" style={{ maxWidth: '540px' }}>
                            Dedicated to designing and implementing responsive, scalable user interfaces. I build engaging digital experiences that seamlessly blend functionality with modern aesthetic appeal.
                        </p>
                        <div className="d-flex gap-4">
                            <a href="#projects" className="glow-btn d-flex align-items-center">
                                View My Work <BsArrowRight className="ms-2" />
                            </a>
                            <a href="#contact" className="glow-btn-outline">
                                Contact Me
                            </a>
                        </div>
                    </Col>
                    <Col lg={5} className="d-flex justify-content-center justify-content-lg-end">
                        <div className="hero-img-container" style={{ maxWidth: '380px', width: '100%' }}>
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                                alt="Bhagyasri Mane"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
