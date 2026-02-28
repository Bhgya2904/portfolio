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
                    <Col lg={5} className="d-flex justify-content-center justify-content-lg-end mt-5 mt-lg-0">
                        <div className="hero-img-container position-relative" style={{ maxWidth: '350px', width: '100%' }}>
                            {/* Decorative background circle */}
                            <div className="position-absolute" style={{ top: '10%', left: '5%', width: '90%', height: '90%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '50%', filter: 'blur(40px)', opacity: '0.4', zIndex: 0 }}></div>

                            <img
                                src="/profile.jpg"
                                alt="Bhagyasri Mane"
                                className="position-relative"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1/1.1',
                                    objectFit: 'cover',
                                    objectPosition: 'center 15%', // Crops out the bottom half, focusing on the face/torso
                                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // Organic blob shape to break up the background lines
                                    border: '4px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                    zIndex: 1,
                                    transition: 'all 0.5s ease'
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
