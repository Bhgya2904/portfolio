import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaCertificate, FaExpand } from 'react-icons/fa';

const certificates = [
    {
        title: "Frontend Developer Internship",
        issuer: "Back & Forth Solutions (Unipool)",
        date: "August 4, 2025",
        image: "/certificates/unipool.png",
        desc: "Awarded for successful completion of a two-month summer internship in Frontend Development, demonstrating strong proficiency in responsive design and web technologies."
    },
    {
        title: "Prompt Engineering for Developers",
        issuer: "Udemy (Learnsector LLP)",
        date: "Feb 16, 2026",
        image: "/certificates/udemy.png",
        desc: "Comprehensive coursework on crafting effective prompts for AI models, understanding contextual generation, and leveraging LLMs for developer productivity."
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Feb 16, 2025",
        image: "/certificates/freecodecamp.png",
        desc: "300-hour certification covering HTML5, CSS3, Flexbox, Grid, and building responsive layouts that adapt seamlessly to various screen sizes."
    },
    {
        title: "React Essential Training",
        issuer: "LinkedIn Learning",
        date: "May 07, 2025",
        image: "/certificates/react.png",
        desc: "Completed essential training on modern React.js fundamentals, component-based architectures, hooks, and standard frontend practices."
    },
    {
        title: "Java Course - Mastering the Fundamentals",
        issuer: "Scaler Topics",
        date: "Aug 16, 2025",
        image: "/certificates/java.png",
        desc: "Mastered core Java fundamentals including Object-Oriented Programming (OOP) concepts, collections, and practical algorithm implementation."
    },
    {
        title: "Python Essentials 1",
        issuer: "Cisco Networking Academy",
        date: "May 24, 2024",
        image: "/certificates/python.jpg",
        desc: "Achieved student level credential covering Python 3 syntax, semantics, data structures, and the standard library."
    }
];

const Certifications = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

    const handleShow = (certImage) => {
        setSelectedCert(certImage);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedCert(null);
    };

    return (
        <section id="certifications">
            <Container>
                <div className="d-flex align-items-center mb-5 mb-md-4 pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <h2 className="section-title mb-0 border-0 text-start bg-transparent" style={{ transform: 'none', left: '0', background: 'linear-gradient(135deg, #f8fafc, #94a3b8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Certifications
                    </h2>
                </div>
                <Row className="g-4 mt-1">
                    {certificates.map((cert, index) => (
                        <Col lg={4} md={6} key={index}>
                            <div className="glass-card d-flex flex-column h-100 p-4" style={{ transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}>
                                <div className="mb-4 d-flex justify-content-between align-items-start pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <div>
                                        <h4 className="text-white mb-2 h6 font-weight-bold" style={{ lineHeight: '1.4' }}>{cert.title}</h4>
                                        <span className="badge mt-1" style={{ background: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontWeight: '500', padding: '6px 12px' }}>
                                            {cert.issuer}
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '10px', color: 'var(--primary)', flexShrink: 0, fontSize: '1.1rem' }}>
                                        <FaCertificate />
                                    </div>
                                </div>
                                <div className="flex-grow-1 mb-4">
                                    <p className="text-muted-custom small mb-0" style={{ lineHeight: '1.6' }}>
                                        {cert.desc}
                                    </p>
                                </div>

                                <div className="d-flex justify-content-between align-items-end mt-auto pt-3 border-top" style={{ borderColor: 'var(--border-color) !important' }}>
                                    <p className="text-muted small mb-0" style={{ opacity: 0.7 }}>Issued: {cert.date}</p>
                                    <button
                                        onClick={() => handleShow(cert.image)}
                                        className="glow-btn-outline px-3 py-2 d-flex align-items-center"
                                        style={{ fontSize: '0.8rem', fontWeight: '500', background: 'rgba(56, 189, 248, 0.05)' }}
                                    >
                                        View Certificate <FaExpand className="ms-2" style={{ fontSize: '0.75rem' }} />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Certificate Modal */}
                <Modal show={showModal} onHide={handleClose} size="lg" centered contentClassName="bg-transparent border-0">
                    <Modal.Body className="p-0 position-relative text-center">
                        <button
                            onClick={handleClose}
                            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                            style={{ zIndex: 10, background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '50%' }}
                        ></button>
                        {selectedCert && (
                            <div style={{ background: 'var(--bg-card)', padding: '10px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                                <img src={selectedCert} alt="Certificate" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                            </div>
                        )}
                    </Modal.Body>
                </Modal>
            </Container>
        </section>
    );
};

export default Certifications;
