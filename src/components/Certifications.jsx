import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCertificate } from 'react-icons/fa';

const certificates = [
    {
        title: "Prompt Engineering for Developers",
        issuer: "Udemy (Learnsector LLP)",
        date: "Feb 16, 2026",
        image: "/certificates/udemy.png"
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Feb 16, 2025",
        image: "/certificates/freecodecamp.png"
    },
    {
        title: "React Essential Training",
        issuer: "LinkedIn Learning",
        date: "May 07, 2025",
        image: "/certificates/react.png"
    },
    {
        title: "Java Course - Mastering the Fundamentals",
        issuer: "Scaler Topics",
        date: "Aug 16, 2025",
        image: "/certificates/java.png"
    },
    {
        title: "Python Essentials 1",
        issuer: "Cisco Networking Academy",
        date: "May 24, 2024",
        image: "/certificates/python.jpg"
    }
];

const Certifications = () => {
    return (
        <section id="certifications">
            <Container>
                <div className="d-flex align-items-center mb-5 mb-md-4 pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <h2 className="section-title mb-0 border-0 text-start bg-transparent" style={{ transform: 'none', left: '0', background: 'linear-gradient(135deg, #f8fafc, #94a3b8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Certifications
                    </h2>
                </div>
                <Row className="g-4 mt-1 justify-content-center">
                    {certificates.map((cert, index) => (
                        <Col lg={4} md={6} key={index}>
                            <div className="glass-card d-flex flex-column h-100 p-0 overflow-hidden" style={{ transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}>
                                <div style={{ height: '200px', width: '100%', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        className="cert-img"
                                    />
                                </div>
                                <div className="p-4 d-flex flex-column flex-grow-1">
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <h4 className="text-white mb-0 h6 font-weight-bold" style={{ lineHeight: '1.4' }}>{cert.title}</h4>
                                        <FaCertificate className="mt-1 flex-shrink-0 ms-2" style={{ color: 'var(--primary)', fontSize: '1.1rem' }} />
                                    </div>
                                    <p className="text-muted-custom small mb-1">{cert.issuer}</p>
                                    <p className="text-muted small mt-auto mb-0" style={{ opacity: 0.7 }}>Issued: {cert.date}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .cert-img:hover { transform: scale(1.05); cursor: pointer; }
                `}} />
            </Container>
        </section>
    );
};

export default Certifications;
